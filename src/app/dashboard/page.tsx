"use client";
import { Button } from "@/components";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import FolderItem from "@/components/ui/folder/folder-item";
import List from "@/components/ui/file/file-list";
import { useFolderStore } from "@/store/folder/useFolderStore";
import { toast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

function Dashboard() {
  const { folders, fetchFolders } = useFolderStore();
  const { data: session } = useSession();
  const router = useRouter();
  useEffect(() => {
    const getFolderList = async () => {
      try {
        if (!session) {
          setTimeout(getFolderList, 2000);
          return;
        }

        const result = await fetchFolders(session);

        if (!result.success && result.message == "User is not authenticated") {
          router.push("/login");
          throw new Error(result.message);
        } else if (!result.success) {
          throw new Error(result.message);
        } else {
          toast({
            title: "Successful!",
            description: result?.message,
            variant: "default",
          });
        }
      } catch (err: any) {
        toast({
          title: "Opps, Error!",
          description: err?.message,
          variant: "destructive",
        });
      }
    };

    getFolderList();
  }, [session, router, fetchFolders]);

  return (
    <div className="dashboard pt-8 w-full px-6">
      <div className="dashboard-top flex items-center justify-between">
        <CardTitle>Dashboard</CardTitle>
        <Button>Upload File</Button>
      </div>

      {/* Folder list */}
      <Card className="dashboard-mid w-full my-6">
        <CardHeader>
          <div className="flex flex-row items-center justify-between">
            <CardTitle>Recent Folders</CardTitle>
            <Button variant="link">View All</Button>
          </div>
          <CardDescription className="grid grid-cols-2 pt-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-3 gap-4">
            {folders.map((folder, index) => (
              <FolderItem key={index} data={folder} />
            ))}
          </CardDescription>
        </CardHeader>
      </Card>
      {/* file list */}
      <List />
    </div>
  );
}

export default Dashboard;

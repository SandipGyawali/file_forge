import { Button } from "@/components";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import FolderItem from "@/components/ui/folder/folder-item";
import List from "@/components/ui/file/file-list";

function Dashboard() {
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
            <FolderItem />
            <FolderItem />
            <FolderItem />
            <FolderItem />
            <FolderItem />
          </CardDescription>
        </CardHeader>
      </Card>
      {/* file list */}
      <List />
    </div>
  );
}

export default Dashboard;

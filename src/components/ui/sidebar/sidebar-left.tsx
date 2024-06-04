import Link from "next/link";
import { Button } from "@/components/ui/button";
import { list } from "@/data/menu";
import Image from "next/image";
import CreateFolderModal from "@/components/ui/folder/create-folder";
import CreateFileModal from "../file/create-file";

function SideBarLeft() {
  return (
    <div className="sidebar flex flex-col gap-3 pt-2 pl-6 h-screen bg-white shadow-md w-[300px] sticky top-0">
      <a
        href="/dashboard"
        className="-m-1.5 p-1.5 pb-6 w-full flex justify-center items-center scale-120"
      >
        <Image src="/logo.webp" alt="" width={80} height={80} />
      </a>

      <CreateFileModal />

      <CreateFolderModal />

      <div className="w-11/12 border mt-4 mb-2 flex" />

      {/* options */}
      {list.map((data, index) => (
        <Link href={`/dashboard/${data?.route}`} key={index}>
          <Button variant={"link"} className="flex gap-2">
            {data.icon} {data?.name}
          </Button>
        </Link>
      ))}
    </div>
  );
}

export default SideBarLeft;

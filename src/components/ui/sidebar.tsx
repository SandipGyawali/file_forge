import { File, Star } from "lucide-react";
import Link from "next/link";
import { Button } from "./button";

function SideBar() {
  return (
    <div className="sidebar flex flex-col gap-3 mt-8 md:w-[200px] lg:w-[230px]">
      <Link href="/dashboard/files">
        <Button variant={"link"} className="flex gap-2">
          <File size={25} /> All Files
        </Button>
      </Link>

      <Link href="/dashboard/files">
        <Button variant={"link"} className="flex gap-2">
          <Star size={25} /> Favorites
        </Button>
      </Link>
    </div>
  );
}

export { SideBar };

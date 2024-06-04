import { FolderOpen } from "lucide-react";
import { Card } from "../card";

function FolderItem() {
  return (
    <Card
      className="w-full flex flex-col justify-center items-center h-[120px] max-w-[220px] hover:scale-105 
      transition transition-all ease-in-out duration-200 hover:shadow-md cursor-pointer active:scale-95"
    >
      <FolderOpen size={32} />
      <span className="font-semibold text-[12px] text-center pt-[2px]">
        Folder Name
      </span>
    </Card>
  );
}

export default FolderItem;

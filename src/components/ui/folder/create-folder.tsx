"use client";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "../dialog";
import { Button } from "../button";
import { FolderOpen, FolderPlus } from "lucide-react";
import { Input } from "../input";
import { useState } from "react";

function CreateFolderModal() {
  const [folderName, setFolderName] = useState<string>("");

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"link"} className="flex gap-2 justify-start">
          <FolderPlus /> New Folder
        </Button>
      </DialogTrigger>
      <DialogContent className="w-fit">
        <DialogHeader>
          <DialogTitle className="text-center mb-4">New Folder</DialogTitle>
          <DialogDescription className="flex flex-col gap-6 items-center">
            <FolderOpen size={48} />
            <div className="w-full flex flex-col gap-2">
              <Input
                type="input"
                placeholder="Folder Name"
                onChange={(e) => {
                  setFolderName(e.target.value);
                }}
                value={folderName}
              />
              <Button
                variant="default"
                className="w-full"
                onClick={() => {
                  console.log(folderName);
                }}
              >
                Create
              </Button>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default CreateFolderModal;

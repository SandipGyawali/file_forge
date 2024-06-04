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
import { FilePlus2 } from "lucide-react";
import { Input } from "../input";
import { useState } from "react";

function CreateFileModal() {
  const [fileName, setFileName] = useState<string>("");
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"link"} className="flex gap-2 justify-start ">
          <FilePlus2 /> New File
        </Button>
      </DialogTrigger>
      <DialogContent className="w-fit">
        <DialogHeader>
          <DialogTitle className="text-center mb-4">New File</DialogTitle>
          <DialogDescription className="flex flex-col gap-6 items-center">
            <FilePlus2 size={48} />
            <div className="w-full flex flex-col gap-2">
              <Input
                type="input"
                placeholder="File Name"
                onChange={(e) => {
                  setFileName(e.target.value);
                }}
                value={fileName}
              />
              <Button
                variant="default"
                className="w-full"
                onClick={() => {
                  console.log(fileName);
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

export default CreateFileModal;

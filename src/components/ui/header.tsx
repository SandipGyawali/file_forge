"use client";
import { useState } from "react";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { AlignRight, X } from "lucide-react";
import { CircleUserRound } from "lucide-react";
import { Popover } from "./popover";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";
import { Card, CardDescription, CardHeader } from "./card";
import { SearchBar } from "./searchbar";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-background border-b w-full">
      <nav
        className="w-full flex max-w-full items-center justify-between p-6"
        aria-label="Global"
      >
        <div className="flex lg:hidden justify-end w-full">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <AlignRight className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <SearchBar />
        </PopoverGroup>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Popover>
            <PopoverTrigger>
              <Avatar className="w-8 h-8 bg-white">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>
                  <CircleUserRound className="text-gray-600" />
                </AvatarFallback>
              </Avatar>
            </PopoverTrigger>
            <PopoverContent>
              <Card className="w-[380px]">
                <CardHeader>Notifications</CardHeader>
                <CardDescription>You have 3 unread messages.</CardDescription>
              </Card>
            </PopoverContent>
          </Popover>
        </div>
      </nav>
      <Dialog
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white pt-2 px-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a
              href="/dashboard"
              className=" w-full flex justify-center items-center scale-120"
            >
              <Image src="/logo.webp" alt="" width={80} height={80} />
            </a>
            <button
              type="button"
              className="-m-2.5 absolute right-0 top-0 mx-6 my-6 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <SearchBar />
            {/* <div className="-my-6 divide-y divide-gray-500/10">
              <div className="py-6">
                <Avatar className="w-8 h-8">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>
                    <CircleUserRound />
                  </AvatarFallback>
                </Avatar>
              </div>
            </div> */}
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}

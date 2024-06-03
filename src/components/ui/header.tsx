"use client";
import { useState } from "react";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { AlignLeft, X } from "lucide-react";
import { CircleUserRound } from "lucide-react";
import { Popover } from "./popover";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";
import { Card, CardDescription, CardHeader } from "./card";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-background border-b">
      <nav
        className="w-full flex max-w-full items-center justify-between p-6 lg:px-24"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/dashboard" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image
              className="h-8 w-auto"
              src="/next.svg"
              alt=""
              width={20}
              height={20}
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <AlignLeft className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <a
            href="#"
            className="text-sm dark:text-white font-semibold leading-6 text-gray-900"
          >
            Features
          </a>
          <a
            href="#"
            className="text-sm dark:text-white font-semibold leading-6 text-gray-900"
          >
            Marketplace
          </a>
          <a
            href="#"
            className="text-sm dark:text-white font-semibold leading-6 text-gray-900"
          >
            Company
          </a>
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
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image
                className="h-8 w-auto"
                src="/next.svg"
                width={32}
                height={32}
                alt="sdf"
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Product
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Marketplace
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Company
                </a>
              </div>
              <div className="py-6">
                <Avatar className="w-8 h-8">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>
                    <CircleUserRound />
                  </AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}

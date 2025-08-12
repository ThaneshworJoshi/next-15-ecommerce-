"use client";

import React, { useState } from "react";
import Image from "next/image";

import { HeaderProps } from "./Header.types";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  CreditCard,
  LogOut,
  Settings,
  User,
  ShoppingCart,
  Menu,
} from "lucide-react";

import { FaCaretDown, FaRegUser } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ProductSearchModal } from "@/components/shared";

export const Header: React.FC<HeaderProps> = ({
  navItems,
  cartItemCount,
  cartTotal,
}) => {
  const pathName = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const onOpenSearchModal = () => {
    setIsOpen(true);
  };
  return (
    <header className="w-full bg-white">
      {/* Top Seciton  */}
      <div className="py-2 border-b-2">
        <div className="container flex items-center justify-end px-4 py-3 mx-auto sm:justify-between">
          {/* Left Section  */}
          <div className="items-center hidden gap-4 sm:flex">
            <Select>
              <SelectTrigger className="flex items-center justify-center border-0 outline-none [&>svg:last-of-type]:hidden p-0">
                <SelectValue placeholder="ENG" />
                <FaCaretDown className="w-6 h-4" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">EN</SelectItem>
                <SelectItem value="dark">NP</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="flex items-center justify-center border-0 outline-none [&>svg:last-of-type]:hidden p-0">
                <SelectValue placeholder="USD" />
                <FaCaretDown className="w-6 h-4" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="usd">USD</SelectItem>
                <SelectItem value="npr">NPR</SelectItem>
                <SelectItem value="inr">INR</SelectItem>
              </SelectContent>
            </Select>
          </div>
          {/* Right Section */}
          <div className="flex items-center gap-4 text-xl">
            <div className="w-full">
              {/*  */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="text-lg">
                    <FaRegUser /> My profile
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <User />
                      <span>Profile</span>
                      <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <CreditCard />
                      <span>Billing</span>
                      <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Settings />
                      <span>Settings</span>
                      <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />

                  <DropdownMenuItem>
                    <LogOut />
                    <span>Log out</span>
                    <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <Link
              href='/checkout/cart'
              className="relative w-full h-full px-0 mr-8"
            >
              <ShoppingCart />
              {cartItemCount > 0 && (
                <span className="absolute -top-3.5 -right-4 bg-primary-red text-white rounded-full w-5 h-5 text-xs flex items-center justify-center border-2 border-white">
                  {cartItemCount}
                </span>
              )}
            </Link>
            <div className="hidden sm:block">
              <span className="mr-8 text-neutral-secondary ">Items</span>
              <span className="text-neutral-muted">{cartTotal}</span>
            </div>
            <Button onClick={onOpenSearchModal} variant="ghost" size="lg" className="w-full h-full px-0">
              <IoSearch className="scale-150" />
            </Button>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" className="ml-2 sm:hidden">
                  <Menu className="scale-150" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle></SheetTitle>
                  <SheetDescription></SheetDescription>
                </SheetHeader>
                <nav className="flex flex-col gap-6">
                  {navItems.map((item) => {
                    const isActive = item.href === pathName;

                    return (
                      <div key={item.label}>
                        <Link
                          href={item.href}
                          className={`mx-9 text-xl  font-medium transition-colors ${
                            isActive
                              ? "text-blue-600 font-bold"
                              : "text-gray-700 hover:text-blue-500"
                          }`}
                        >
                          {item.label}
                        </Link>
                      </div>
                    );
                  })}
                </nav>
                <SheetFooter></SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Bottom section Logo and Navigation */}
      <div className="py-8">
        <div className="container flex items-center justify-between px-4 mx-auto">
          <Link href={'/'} className="flex items-center gap-2 cursor-pointer">
            <Image src="/logo1.png" alt="E-com logo" width={44} height={44} />
            <span className="text-lg font-bold text-neutral-dark">Paw Planet</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden sm:flex gap-3 lg:gap-4 xl:gap-6  [&>a:last-of-type]:mx-0">
            {navItems.map((item) => {
              const isActive = item.href === pathName;

              return (
                <div key={item.label}>
                  <Link
                    href={item.href}
                    className={`mx-3 lg:mx-6 xl:mx-9 text-sm sm:text-sm md:text-xl xl:text-2xl  font-medium transition-colors ${
                      isActive
                        ? "text-blue-600 font-bold"
                        : "text-gray-700 hover:text-blue-500"
                    }`}
                  >
                    {item.label}
                  </Link>
                </div>
              );
            })}
          </nav>
        </div>
      </div>
      <ProductSearchModal data={{isOpen}} events={{onClose:() => setIsOpen(false)}} />
    </header>
  );
};

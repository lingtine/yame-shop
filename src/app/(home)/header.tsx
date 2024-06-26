"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Button } from "primereact/button";
import { Badge } from "primereact/badge";
import { OverlayPanel } from "primereact/overlaypanel";
import { useRef } from "react";
const Header: React.FC = () => {
  const op = useRef<OverlayPanel | null>(null);

  return (
    <header className="w-full bg-black fixed top-0 py-4 flex">
      <div className="container flex justify-between items-center">
        <Link href={"/"} className="text-3xl text-white ">
          <Image
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-auto"
            alt="Logo"
            src={"/images/logo.png"}
          />
        </Link>

        <Button
          type="button"
          label="Bộ sưu tập"
          text
          onClick={(e) => {
            if (op) op.current?.toggle(e);
          }}
        />

        <OverlayPanel
          ref={op}
          showCloseIcon
          closeOnEscape
          dismissable={false}
        ></OverlayPanel>

        <div className="flex">
          <Button
            className="text-white"
            icon="pi pi-search"
            rounded
            text
          ></Button>
          <Button
            className="text-white"
            icon="pi pi-user"
            rounded
            text
          ></Button>
          <Button
            icon="pi pi-shopping-bag"
            className="text-white relative overflow-visible"
            rounded
            text
          >
            <Badge
              value={0}
              className="absolute bg-red-500 top-0 right-0"
            ></Badge>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;

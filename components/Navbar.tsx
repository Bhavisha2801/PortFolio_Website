"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";

export function Navbar() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <NavbarComp className="top-2" />
    </div>
  );
}

function NavbarComp({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Home" linkVal='' />
        <MenuItem setActive={setActive} active={active} item="CV" linkVal='#cv' />
        <MenuItem setActive={setActive} active={active} item="Projects" linkVal='#projects'>
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Elwotools"
              href="https://www.elwotools.se/"
              src="/images/elwotools.png"
              description="Worked on product and cart page design and feature related tasks and implemented Admin Panel."
            />
            <ProductItem
              title="PostIt"
              href="https://postit-prompts.vercel.app/"
              src="/images/postit.png"
              description="Implemented Full stack app named postit using. Handled frontend and backend both including design."
            />
            <ProductItem
              title="YPP"
              href="https://www.yourproductpartners.com/"
              src="/images/ypp.png"
              description="Handled profiles designs and forms designs and features like submit a form and automations emails on submit."
            />
            <ProductItem
              title="Apollo Pharmacy"
              href="https://apolloclone.netlify.app/doctors"
              src="/images/apollo.png"
              description="Created using JS and HTML/CSS. Basic site created to show data using JS and design a static website."
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Skills" linkVal='#skills' />
        <MenuItem setActive={setActive} active={active} item="Contact Me" linkVal='#contact' />
      </Menu>
    </div>
  );
}

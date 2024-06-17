import React from "react";
import SectionContainer from "../ui/SectionContainer";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const menuItems = ["About Me", "Skills", "Projects", "Contact Me"];

  return (
    <SectionContainer id="contact-me" className="bg-foreground-200">
      <footer>
        <main className="container max-w-7xl mx-auto p-5 lg:p-0 grid grid-cols-4 place-items-center">
          <Image src="/logo.png" width={100} height={100} alt="logo" />
          <div>
            <p>Atheer Ganaiem</p>
            <p>atheer95@gmail.com</p>
            <Link href="https://github.com/Atheer-Ganayem" className="underline text-primary">
              Github
            </Link>
          </div>
          <div className="flex flex-col">
            {menuItems.map((item, index) => (
              <Link
                key={`footer-nav-${index}`}
                color="foreground"
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="text-lg duration-200 hover:text-secondary hover:ps-1"
              >
                {item}
              </Link>
            ))}
          </div>
          <p>&copy; 2024 Atheer Ganaiem. All rights reserved.</p>
        </main>
      </footer>
    </SectionContainer>
  );
}

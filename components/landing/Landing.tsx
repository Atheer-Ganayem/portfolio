import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Landing = () => {
  return (
    <div className="h-[93vh] flex items-center flex-col justify-center gap-10">
      <Image src="/logo.png" height={100} width={100} alt="logo" />
      <p className="text-5xl font-bold text-center">Atheer Ganaiem</p>
      <p className="text-xl">Full-Stack web developer</p>
      <div className="flex flex-row gap-4">
        <Button color="secondary" variant="shadow" size="lg" as={Link} href="#contact-me">
          Contact Me
        </Button>
        <Button size="lg" color="primary" variant="flat" as={Link} href="#projects">
          My Work
        </Button>
      </div>
    </div>
  );
};

export default Landing;

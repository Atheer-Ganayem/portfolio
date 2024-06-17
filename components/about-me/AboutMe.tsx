import React from "react";
import AnimatedHeading from "../ui/AnimatedHeading";
import SectionContainer from "../ui/SectionContainer";
import AboutMeParagraph from "./AboutMeParagraph";
import IconCloud from "../magicui/icon-cloud";
import Image from "next/image";

const iconsNames = [
  "react",
  "typescript",
  "javascript",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "vercel",
  "git",
  "github",
  "visualstudiocode",
  "go",
];

export default function AboutMe() {
  return (
    <SectionContainer className="bg-foreground-100" id="about-me">
      <AnimatedHeading text="About Me" className="text-5xl" underlineBgColor="bg-primary" />
      <main className="container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div>
          <Image src="/logo.png" width={250} height={250} alt="logo" className="mx-auto" />
          <AboutMeParagraph />
        </div>
        <IconCloud iconSlugs={iconsNames} />
      </main>
    </SectionContainer>
  );
}

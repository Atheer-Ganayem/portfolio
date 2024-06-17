import React from "react";
import SectionContainer from "../ui/SectionContainer";
import AnimatedHeading from "../ui/AnimatedHeading";
import { projects } from "@/data/projects";
import Project from "./Project";

export default function Projects() {
  return (
    <SectionContainer className="bg-foreground-100" id="projects">
      <AnimatedHeading text="Projects" underlineBgColor="bg-warning" className="text-5xl" />
      <main className="grid lg:grid-cols-2 grid-cols-1 gap-5 container max-w-7xl mx-auto p-5 lg:p-0">
        {projects.map((project, index) => (
          <Project key={`project-${index}`} project={project} />
        ))}
      </main>
    </SectionContainer>
  );
}

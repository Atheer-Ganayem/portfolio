"use client";

import React from "react";
import FrontendSkills from "./FrontendSkills";
import BackendSkills from "./BackendSkills";
import OtherSkills from "./OtherSkills";
import AnimatedHeading from "../ui/AnimatedHeading";
import SectionContainer from "../ui/SectionContainer";

const Skills = () => {
  return (
    <SectionContainer id="skills">
      <AnimatedHeading text="My Skills" className="text-5xl text-center" />
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5 lg:p-0 container mx-auto max-w-7xl">
        <FrontendSkills />
        <BackendSkills />
        <OtherSkills />
      </main>
      {/* <main className="flex gap-5 justify-between lg:flex-row flex-col p-5 lg:p-0 container mx-auto max-w-7xl">
        <FrontendSkills />
        <BackendSkills />
        <OtherSkills />
      </main> */}
    </SectionContainer>
  );
};

export default Skills;

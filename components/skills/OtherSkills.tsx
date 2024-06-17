import React from "react";
import { VscodeOriginal, GithubOriginal } from "devicons-react";
import SkillsCard from "./SkillsCard";

const skills = [
  { text: "VS Code", icon: VscodeOriginal },
  // { text: "Github", icon: GithubOriginal },
];

const BackendSkills = () => {
  return (
    <SkillsCard>
      <div className="text-center font-bold text-2xl text-warning">Other</div>
      <div className="grid grid-cols-3 content-center gap-y-5">
        {skills.map(skill => (
          <span
            key={skill.text}
            className="flex flex-col gap-3 items-center justify-center text-center"
          >
            <skill.icon size={50} /> {skill.text}
          </span>
        ))}
        <span className="flex flex-col gap-3 items-center justify-center text-center">
          <GithubOriginal className="rounded-full bg-white" size={50} />
          Github
        </span>
      </div>
    </SkillsCard>
  );
};

export default BackendSkills;

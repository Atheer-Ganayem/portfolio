import React from "react";
import {
  JavascriptOriginal,
  Html5Original,
  Css3Original,
  ReactOriginal,
  NextjsOriginal,
  TailwindcssOriginal,
} from "devicons-react";
import { MonitorSmartphone } from "lucide-react";
import SkillsCard from "./SkillsCard";

const skills = [
  { text: "HTML", icon: Html5Original },
  { text: "CSS", icon: Css3Original },
  { text: "JavaScript", icon: JavascriptOriginal },
  { text: "React", icon: ReactOriginal },
  { text: "Next.js", icon: NextjsOriginal },
  { text: "Tailwind", icon: TailwindcssOriginal },
  { text: "Responive Design", icon: MonitorSmartphone },
];

const FrontendSkills = () => {
  return (
    <SkillsCard>
      <div className="text-center font-bold text-2xl text-primary">Front-End</div>
      <div className="grid grid-cols-3 content-center gap-y-5">
        {skills.map(skill => (
          <span
            key={skill.text}
            className="flex flex-col gap-3 items-center justify-center text-center"
          >
            <skill.icon size={50} /> {skill.text}
          </span>
        ))}
      </div>
    </SkillsCard>
  );
};

export default FrontendSkills;

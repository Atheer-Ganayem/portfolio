import React from "react";
import {
  NodejsOriginalWordmark,
  SqliteOriginal,
  MongodbOriginal,
  TypescriptOriginal,
  ExpressOriginal,
  GoOriginal,
} from "devicons-react";
import SkillsCard from "./SkillsCard";

const skills = [
  { text: "Node.js", icon: NodejsOriginalWordmark },
  { text: "Express.js", icon: ExpressOriginal },
  { text: "TypeScript", icon: TypescriptOriginal },
  { text: "MongoDB", icon: MongodbOriginal },
  { text: "Sqlite", icon: SqliteOriginal },
  { text: "Go (Learning...)", icon: GoOriginal },
];

const BackendSkills = () => {
  return (
    <SkillsCard>
      <div className="text-center font-bold text-2xl text-secondary">Back-End</div>
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

export default BackendSkills;

import React, { FC } from "react";
import { Chip } from "@nextui-org/react";

interface Props {
  tech: { title: string; icon: FC<any> }[];
}

const ProjectTech: FC<Props> = ({ tech }) => {
  return (
    <div className="flex gap-2 flex-wrap">
      {tech.map((tech, index) => (
        <Chip
          key={`tech-stack-${index}`}
          color="primary"
          variant="flat"
          startContent={<tech.icon size={28} />}
          size="lg"
        >
          {tech.title}
        </Chip>
      ))}
    </div>
  );
};

export default ProjectTech;

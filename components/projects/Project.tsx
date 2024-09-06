import { Card } from "@nextui-org/react";
import React from "react";
import ProjectImages from "./ProjectImages";
import ProjectDescription from "./ProjectDescription";
import ProjectTech from "./ProjectTech";
import ProjectLinks from "./ProjectLinks";
import ProjectAccounts from "./ProjectAccounts";

const Project = ({ project }: { project: Project }) => {
  return (
    <Card className="relative flex flex-col h-fit">
      <a href={project.link || ""} target="_blank">
        <ProjectImages path={project.imagesPath} images={project.images} />
      </a>
      <div className="p-5 flex flex-col gap-4">
        <h1 className="font-bold text-2xl">{project.title}</h1>
        <ProjectDescription description={project.description} />
        {project.accounts && <ProjectAccounts accounts={project.accounts} />}
        <ProjectTech tech={project.tech} />
        <ProjectLinks githubRepo={project.githubRepo} websiteLink={project.link} />
      </div>
    </Card>
  );
};

export default Project;

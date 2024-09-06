import React, { FC } from "react";
import { GithubOriginal } from "devicons-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import MultipleReposBtn from "./MultipleReposBtn";

interface Props {
  githubRepo: string | GithubRepo[];
  websiteLink?: string;
}

const ProjectLinks: FC<Props> = ({ githubRepo, websiteLink }) => {
  return (
    <div className="flex flex-row gap-5">
      {typeof githubRepo === "string" ? (
        <Button
          startContent={<GithubOriginal size={24} className="bg-white rounded-full" />}
          as={Link}
          href={githubRepo}
          target="_blank"
          className="bg-foreground text-content1"
        >
          Github
        </Button>
      ) : (
        <MultipleReposBtn repos={githubRepo} />
      )}
      {websiteLink && (
        <Button
          as={Link}
          href={websiteLink}
          target="_blank"
          startContent={
            <Image src="/icons/website-icon.svg" width={24} height={24} alt="website-logo" />
          }
        >
          Website
        </Button>
      )}
    </div>
  );
};

export default ProjectLinks;

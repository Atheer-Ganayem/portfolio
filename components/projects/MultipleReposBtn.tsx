"use client";
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import { GithubOriginal } from "devicons-react";
import Link from "next/link";

const MultipleReposBtn = ({ repos }: { repos: GithubRepo[] }) => {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          startContent={<GithubOriginal size={24} className="bg-white rounded-full" />}
          target="_blank"
          className="bg-foreground text-content1"
        >
          Github ss
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        {repos.map(repo => (
          <DropdownItem key={repo.url} as={Link} href={repo.url} target="_blank">
            {repo.name}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default MultipleReposBtn;

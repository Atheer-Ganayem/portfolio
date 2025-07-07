"use client";

import { Button } from "@nextui-org/react";
import React, { FC, useState } from "react";

interface Props {
  description: string;
}

const MAX_WORDS = 200;

const ProjectDescription: FC<Props> = ({ description }) => {
  const [showMore, setShowMore] = useState(false);

  const trimmed = description.trim();
  const isLong = trimmed.length > MAX_WORDS;
  const displayText = showMore || !isLong ? trimmed : trimmed.substring(0, MAX_WORDS);

  const lines = displayText
    .split("\n")
    .map(line => line.trim())
    .filter(line => line !== "");

  return (
    <div className="space-y-2">
      {lines.map((line, index) => (
        <p key={index} className="leading-relaxed">
          {line.startsWith("##") ? (
            <span className="block text-xl font-bold underline">{line.substring(2).trim()}</span>
          ) : (
            line
          )}
          {index === lines.length - 1 && isLong && (
            <Button
              size="sm"
              variant="light"
              color="primary"
              className="ml-2 inline"
              onClick={() => setShowMore(prev => !prev)}
            >
              {showMore ? "Show Less" : "More..."}
            </Button>
          )}
        </p>
      ))}
    </div>
  );
};

export default ProjectDescription;

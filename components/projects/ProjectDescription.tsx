"use client";

import { Button } from "@nextui-org/react";
import React, { FC, useState } from "react";

interface Props {
  description: string;
}

const MAX_WORDS = 200;

const ProjectDescription: FC<Props> = ({ description }) => {
  const [showMore, setShowMore] = useState<boolean>(false);

  const desc = showMore
    ? description
    : description.length > MAX_WORDS
    ? description.substring(0, MAX_WORDS)
    : description;
  return (
    <p>
      {desc}
      {description.length > MAX_WORDS && (
        <Button
          color="primary"
          variant="light"
          size="sm"
          onClick={() => setShowMore(prev => !prev)}
        >
          {!showMore ? "More..." : "Show Less"}
        </Button>
      )}
    </p>
  );
};

export default ProjectDescription;

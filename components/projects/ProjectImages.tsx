import Image from "next/image";
import React, { FC } from "react";

interface Props {
  path: string;
  images: string[];
}

const ProjectImages: FC<Props> = ({ images, path }) => {
  if (images[0] == "ws-logo.png") {
    return (
      <div className="flex justify-center pt-2">
        <Image src={path + images[0]} width={300} height={500} alt="image" />
      </div>
    );
  }

  return <Image src={path + images[0]} width={1000} height={500} alt="image" />;
};

export default ProjectImages;

import Image from "next/image";
import React, { FC } from "react";

interface Props {
  path: string;
  images: string[];
}

const ProjectImages: FC<Props> = ({ images, path }) => {
  return <Image src={path + images[0]} width={1000} height={500} alt="image" />;
};

export default ProjectImages;

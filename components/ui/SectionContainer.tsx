import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export default function SectionContainer({ children, className, id }: Props) {
  return (
    <div className={`py-10 flex flex-col gap-10 ${className}`} id={id}>
      {children}
    </div>
  );
}

import { Card } from "@nextui-org/react";
import React from "react";

export default function SkillsCard({ children }: { children: React.ReactNode }) {
  return <Card className="w-full p-5 flex flex-col gap-5">{children}</Card>;
}

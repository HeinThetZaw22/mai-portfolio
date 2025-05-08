import React, { ElementType } from "react";
import { Card } from "./ui/card";
import { Icon } from "@iconify/react";
import Image, { StaticImageData } from "next/image";
interface ProjectCardProps {
  title: string;
  image: StaticImageData;
  description: string;
  demoLink?: string;
  sourceLink: string;
  techstacks: { icon: string | ElementType; name: string }[];
}
const ProjectCard = ({
  title,
  description,
  demoLink,
  image,
  sourceLink,
  techstacks,
}: ProjectCardProps) => {
  return (
    <Card className=" p-0">
      <div className=" relative aspect-[16/9] m-1">
        <Image src={image} alt="web" fill className="" />
      </div>
      <div className=" px-5 pb-5 space-y-2">
        <div className=" flex justify-between items-center">
          <h1 className=" font-medium font-poppins text-emerald-500">
            {title}
          </h1>
          <div className=" space-x-2">
            {demoLink && (
              <a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className=" text-xs border border-emerald-200 px-4 py-2 rounded-md hover:bg-emerald-50 transition duration-200"
              >
                Demo
              </a>
            )}
            <a
              href={sourceLink}
              target="_blank"
              rel="noopener noreferrer"
              className=" text-xs bg-emerald-200 px-4 py-2 rounded-md hover:bg-emerald-300 border hover:border-emerald-200 transition duration-200"
            >
              Source
            </a>
          </div>
        </div>
        <p className=" text-sm line-clamp-3 py-2 text-secondary">
          {description}
        </p>
        <div className=" flex flex-wrap font-montserrat  gap-3">
          {techstacks.map((item, i) => (
            <span
              key={i}
              className=" px-4 w-fit flex gap-1 items-center text-sm py-1 border rounded-full"
            >
              {typeof item.icon === "string" ? (
                <Icon icon={item.icon} width="16" height="16" />
              ) : (
                <item.icon />
              )}
              {item.name}
            </span>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;

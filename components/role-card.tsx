import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Code } from "lucide-react";

interface RoleCard {
    icon: any;
  title: string;
  description: string;
  techStacksTitle: string;
  techStacks: string[];
}

const RoleCard = ({
 icon: Icon,
  title,
  description,
  techStacksTitle,
  techStacks,
}: RoleCard) => {
  return (
    <Card className="relative md:flex-1/3 md:-mt-20 -mt-20 mb-20 z-10">
      <CardHeader>
        <span className=" bg-emerald-300 mx-auto w-fit p-3 my-3 rounded-full">
          <Icon />
        </span>
        <CardTitle className=" text-lg text-center text-[#141c3a]">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className=" font-poppins text-center text-sm text-[#141c3a]">
        <p className=" max-h-20 md:min-h-20">{description}</p>

        <div className=" pt-5">
          <h3 className=" text-primary pb-3">{techStacksTitle}:</h3>
          <div className=" flex flex-col font-montserrat space-y-1">
            {techStacks.map((item, i) => (
              <span key={i} className=" px-4 w-fit text-start text-sm py-1 rounded-full">
                {item}
              </span>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RoleCard;

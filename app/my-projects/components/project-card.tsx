import Image from "next/image";
import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";

type DataProps = {
  data: {
    title: string;
    body1: string;
    body2: string;
    image: string;
    links: {
      url: string;
      text: string;
    }[];
  };
};

const ProjectCard = ({ data }: DataProps) => {
  const { title, body1, body2, image, links } = data;
  return (
    <div className="rounded-lg w-full sm:w-1/3-g shadow-lg bg-grey">
      <Image
        aria-label={title}
        priority={false}
        width={500}
        height={250}
        src={`/images/${image}`}
        alt={title}
        className="object-cover w-full h-48"
      />
      <div className="p-4">
        <h3 className="rext-lg font-medium">{title}</h3>
        <p className="text-sm mt-2 min-h-50">{body1}</p>
        <p className="text-sm mt-2 min-h-50">{body2}</p>
        <div className="flex flex-row mt-4 justify-between">
          <a href={links[0].url} className="flex items-center">
            <AiFillGithub className="icons_contact_me" />
            <span className="text-black">{links[0].text}</span>
          </a>
          <a href={links[1].url} className="flex items-center">
            <CgWebsite className="icons_contact_me" />
            <span className="text-black">{links[1].text}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

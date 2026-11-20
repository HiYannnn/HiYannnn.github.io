import React from "react";
import Image from "next/image";
import { EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, demoUrl, demoLabel }) => {
  return (
    <div>
      {demoUrl ? (
        <div className="grid h-32 place-items-center rounded-t-xl bg-[#ece4f6] text-3xl font-bold text-[#472d52] md:h-52">
          {imgUrl ? (
            <Image src={imgUrl} alt="" width={760} height={180} className="h-auto w-3/4 max-w-[260px]" />
          ) : (
            <span className="px-4 text-center">{title}</span>
          )}
        </div>
      ) : <div
        className="group rounded-t-xl h-32 md:h-52 w-full md:w-auto bg-center relative overflow-hidden"
        src={imgUrl}
        alt={title}
        width={260}
        height={240}
        style={{ background: `url(${imgUrl}) no-repeat center center`, backgroundSize: "contain" }}
      >
        <div className="overlay absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 items-center justify-center">
          <Link
            href={gitUrl}
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white mr-4 group/link"
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] group-hover/link:text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </Link>
        </div>
      </div>}
      <div className="bg-[#181818] rounded-b-xl py-6 px-4 text-white">
        <h5 className="font-lg font-semibold">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
        {demoUrl && (
          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 font-semibold underline-offset-4">
            <Link href={demoUrl} className="underline">{demoLabel}</Link>
            {gitUrl && <Link href={gitUrl} className="underline">View on GitHub</Link>}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
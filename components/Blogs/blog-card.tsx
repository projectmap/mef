import React, { FC } from 'react';

export interface IBlogCard {
  src: string;
  title: string;
  slug: string;
}
const BlogCard: FC<IBlogCard> = ({ src, title, slug }) => {
  return (
    <>
      <div className="w-full rounded-[10px] md:w-1/2  shadow-lg lg:w-1/3 flex-col  pt-5 hover:h-full transform transition duration-500 hover:scale-105 ">
        <a href={`/article/${slug}`}>
          <img src={src} alt={`Hero image`} className="rounded-t-[10px] " />
          {/* <p className="uppercase pt-1 text-xs">
            {title} / July 23, 2021
          </p> */}
          <div className="p-[20px] px-[20px]">
            <h2 className="text-lg md:text-3xl m-0 font-medium">{title}</h2>
            <p className="h-[95px] overflow-hidden text-gray-600 text-ellipsis mt-[10px]">
              Magna sint voluptate adipisicing sit. Aliqua nulla pariatur id aliqua qui voluptate magna nostrud. Esse
              cupidatat quis do culpa minim veniam mollit excepteur cillum excepteur laboris sit est sit. Sint occaecat
              adipisicing dolore veniam sint in tempor cupidatat consequat ut sint. Id eu laborum nulla nostrud esse
              minim id. Lorem deserunt ea nostrud sunt culpa consequat culpa sint do aliquip non pariatur.
            </p>

            <button className="mt-[20px] bg-[#14323a] px-[22px] rounded-[8px] opacity-90 py-[8px] text-white">
              Read More
            </button>
          </div>
        </a>
      </div>
    </>
  );
};

export default BlogCard;

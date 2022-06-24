import React, { FC } from 'react';

export interface IBlogCard {
  data: any;
  slugs: string[];
}
const BlogCard: FC<IBlogCard> = (props) => {
  const { data, slugs } = props;
  return (
    <>
      <div className="w-full rounded-[10px] md:w-1/2  shadow-lg lg:w-1/3 flex-col  pt-5 hover:h-full transform transition duration-500 hover:scale-105 ">
        <a href={`/blogs/${slugs[0]}`}>
          <img src={data.coverpicture.url} alt={`Hero image`} className="rounded-t-[10px] " />
          <div className="p-[20px] px-[20px]">
            <h2 className="text-lg md:text-3xl m-0 font-medium">{data.title[0].text}</h2>
            <p className="uppercase pt-1 text-xs">{data.mins_read[0].text} Mins Read</p>
            <p className="h-[95px] overflow-hidden text-gray-600 text-ellipsis mt-[10px]">
              {data.short_descriptions[0].text}
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

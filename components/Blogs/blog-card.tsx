import React, { FC } from 'react';

export interface IBlogCard {
  src: string;
  title: string;
  slug: string;
}
const BlogCard: FC<IBlogCard> = ({ src, title, slug }) => {
  return (
    <>
      <div className="md:w-1/2 lg:w-1/3 flex-col md:p-5 pt-5 ">
        <a href={`/article/${slug}`}>
          <img
            src={src}
            alt={`Hero image`}
            className="rounded-3xl hover:h-full transform transition duration-500 hover:scale-105"
          />
          {/* <p className="uppercase pt-1 text-xs">
            {title} / July 23, 2021
          </p> */}
          <h2 className="text-lg md:text-3xl m-0 font-medium">{title}</h2>
          {/* <div className="flex text-gray hover:text-black mt-1 p-0">
            <div
              className="flex items-center p-0 hover:bg-gray-100"
              style={{ borderRadius: "50%" }}
            >
              <BsPlusCircleFill
                size="40"
                color="#5ca595"
                className="hover:red"
              />
            </div>
            <p className="uppercase pl-2 ">Read More</p>
          </div> */}
        </a>
      </div>
    </>
  );
};

export default BlogCard;

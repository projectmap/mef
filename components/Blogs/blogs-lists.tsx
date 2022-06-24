import React, { FC } from 'react';
import BlogCard, { IBlogCard } from './blog-card';
import Container from '../Layout/Container';

interface IBlogsLists {
  blogsLists: any;
}

export const BlogLists: FC<IBlogsLists> = ({ blogsLists }) => {
  return (
    <div className="py-[80px] ">
      <Container>
        <div className="my-[10px] py-[30px] ">
          <h2 className="text-[40px] font-[500] text-center">Our latest news and Blogs</h2>
          <p className="text-center text-[rgba(39,39,39,.74)]">
            Et est magna sunt culpa exercitation eiusmod Lorem nulla proident quis dolor.
          </p>
        </div>
        <div className="flex gap-[25px]">
          {blogsLists.map((article: any, i: number) => {
            return <BlogCard {...article} key={i.toString()} />;
          })}
        </div>
        <div className="flex mt-[30px]">
          <a
            href={'/blogs'}
            className="transform transition duration-500 hover:scale-105 text-[16px] mt-[30px] hover:bg-[#14323a] bg-white text-black border-[#14323a] border text-center hover:text-white text-[18px] mx-auto  px-[50px] py-[20px] rounded-[80px]"
          >
            See All Blogs
          </a>
        </div>
      </Container>
    </div>
  );
};

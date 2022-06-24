import React, { FC } from 'react';
import BlogCard, { IBlogCard } from './blog-card';
import Container from '../Layout/Container';

interface IBlogsLists {
  blogsLists: IBlogCard[];
}

export const BlogLists: FC<IBlogsLists> = ({ blogsLists }) => {
  return (
    <div className="py-[30px] ">
      <Container>
        <div className="my-[10px] py-[10px] ">
          <h2 className="text-[30px] font-[500] text-center">Our latest blogs</h2>
          <p className="text-center">Voluptate est occaecat occaecat nostrud consectetur.</p>
        </div>
        <div className="flex gap-[25px]">
          {blogsLists.map((article, i) => {
            return <BlogCard {...article} />;
          })}
        </div>
        <div className="flex">
          <button className="text-[16px] mt-[30px] bg-blue-600 text-center text-white text-[18px] mx-auto hover:opacity-50 border px-[50px] py-[20px] rounded-[80px]">
            See all blogs{' '}
          </button>
        </div>
      </Container>
    </div>
  );
};

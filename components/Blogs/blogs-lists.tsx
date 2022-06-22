import React, { FC } from 'react';
import BlogCard, { IBlogCard } from './blog-card';
import Container from '../Layout/Container';

interface IBlogsLists {
  blogsLists: IBlogCard[];
}

export const BlogLists: FC<IBlogsLists> = ({ blogsLists }) => {
  const [isReadAll, setReadAll] = React.useState(false);

  return (
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
        <button className="text-[16px] mt-[30px] text-center mx-auto hover:opacity-50">View All Blogs</button>
      </div>
    </Container>
  );
};

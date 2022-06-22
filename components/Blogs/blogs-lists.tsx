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
      <div className="flex justify-between">
        <h2 className="text-[30px] font-[500]">Blogs</h2>
        <button className="text-[16px]">View all blogs</button>
      </div>
      <div className="flex gap-[10px]">
        {blogsLists.map((article, i) => {
          return <BlogCard {...article} />;
        })}
      </div>
    </Container>
  );
};

import React from 'react';
import { client } from '../../prismic/client';
import Layout from '../../components/Layout/Layout';
import Container from '../../components/Layout/Container';
import BlogCard from '../../components/Blogs/blog-card';

export async function getServerSideProps(context: any) {
  console.log(context);
  const id = context.query.id as string;
  const allBlogs = await client.getAllByType('blogs');
  const footer = await client.getAllByType('footer');
  return {
    props: {
      allBlogs,
      id,
      footer,
    },
  };
}
const BlogsDetails = (props: any) => {
  const selectedBlogs = props?.allBlogs?.find((item: any) => item.slugs[0] === props.id);

  return (
    <div>
      <Layout title={selectedBlogs.data.title[0].text} footer={props?.footer[0].data}>
        <div className="py-[30px]">
          <Container>
            <p className="text-[40px]">{selectedBlogs.data.title[0].text}</p>
            <p>{selectedBlogs.first_publication_date.split('T')[0]}</p>
            <span className="uppercase text-[10px] px-[8px] py-[8px] rounded-[5px] text-white bg-[#14323a]">
              {selectedBlogs.data.mins_read[0].text} Mins Read
            </span>
            <img src={selectedBlogs.data.coverpicture.url} className="mt-[10px] h-[450px] w-full" />

            <div className="mt-[10px]" dangerouslySetInnerHTML={{ __html: selectedBlogs.data.details[0].text }} />
          </Container>
          <Container>
            <div className="my-[10px] ">
              <h2 className="text-[40px] font-[500] ">Other Related Blogs</h2>
            </div>
            <div className="flex gap-[25px]">
              {props.allBlogs.map((article: any, i: number) => {
                if (i < 3) {
                  return <BlogCard {...article} key={i.toString()} />;
                }
                return null;
              })}
            </div>
          </Container>
        </div>
      </Layout>
    </div>
  );
};

export default BlogsDetails;

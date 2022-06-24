import React from 'react';
import Layout from '../../components/Layout/Layout';

import { client } from '../../prismic/client';
import BlogCard from '../../components/Blogs/blog-card';
import Container from '../../components/Layout/Container';
export async function getServerSideProps() {
  const blogs = await client.getAllByType('blogs');
  const footer = await client.getAllByType('footer');

  return {
    props: {
      blogs,
      footer,
    }, // will be passed to the page component as props
  };
}
const Blogs = (props: any) => {
  return (
    <Layout navBarColor={'bg-white'} footer={props.footer[0].data}>
      <div
        className="py-[50px]"
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="1500"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
      >
        <Container>
          <div className="my-[10px] py-[30px] ">
            <h2 className="text-[40px] font-[500] text-center">Read Our Blogs and Know About Our Work</h2>
            <p className="text-center text-[rgba(39,39,39,.74)]">
              Et est magna sunt culpa exercitation eiusmod Lorem nulla proident quis dolor.
            </p>
          </div>
          <div className="flex gap-[25px]">
            {props.blogs.map((article: any, i: number) => {
              return <BlogCard {...article} key={i.toString()} />;
            })}
          </div>
          <div className="flex mt-[30px]">
            <button className="transform transition duration-500 hover:scale-105 text-[16px] mt-[30px] hover:bg-[#14323a] bg-white text-black border-[#14323a] border text-center hover:text-white text-[18px] mx-auto  px-[50px] py-[20px] rounded-[80px]">
              Load More
            </button>
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default Blogs;

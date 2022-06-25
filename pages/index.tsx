import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Layout from '../components/Layout/Layout';
import { IBlogCard } from '../components/Blogs/blog-card';
import { BlogLists } from '../components/Blogs/blogs-lists';
import VideoCardLists from '../components/Video/video-card-lists';
import { HeroSection } from '../components/HeroSection';
import VideoSection from '../components/VideoSection';
import Slogans from '../components/Slogs';
import LearnMore from '../components/LeanMore/learn-more';
import { Client } from '@prismicio/client';
import { client } from '../prismic/client';

export async function getServerSideProps() {
  const homePage = await client.getAllByType('homepage');
  const blogs = await client.getAllByType('blogs', { limit: 3 });
  const video = await client.getAllByType('video', { limit: 3 });
  const footer = await client.getAllByType('footer');

  return {
    props: {
      homePage,
      blogs,
      video,
      footer,
    },
  };
}

const Home: NextPage = (props: any) => {
  const homePageData = props.homePage[0].data;
  const selectedVideoForHomePage = props.video.find((item: any) => item.data.isfeatured)?.data;

  return (
    <Layout footer={props.footer[0].data} title="Bhumika Nepal">
      <div>
        <div className="relative">
          <section className="hidden lg:block">
            <Slogans slugsLists={homePageData.slogslists} />
          </section>
          <section className="">
            <HeroSection data={homePageData} />
          </section>
        </div>
        <section className="py-[40px] mt-[220px]">
          <VideoSection selectedVideoForHomePage={selectedVideoForHomePage} />
        </section>
        <section
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true"
        >
          <LearnMore />
        </section>
        <section
          className="mt-[20px]"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true"
        >
          <BlogLists blogsLists={props.blogs} />
        </section>
        <section
          className="mt-[20px]"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true"
        >
          <VideoCardLists videoLists={props.video} />
        </section>
      </div>
    </Layout>
  );
};

export default Home;

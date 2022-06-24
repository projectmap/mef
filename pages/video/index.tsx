import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import Layout from '../../components/Layout/Layout';

import { client } from '../../prismic/client';
import Container from '../../components/Layout/Container';
import VideoCard from '../../components/Video/video-card';

export async function getServerSideProps() {
  const video = await client.getAllByType('video');
  const footer = await client.getAllByType('footer');

  return {
    props: {
      video,
      footer,
    }, // will be passed to the page component as props
  };
}
const Video = (props: any) => {
  return (
    <Layout navBarColor="bg-white" footer={props.footer[0].data}>
      <section
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="1500"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
      >
        <Container>
          <div className="py-[30px]">
            <h2 className="text-[40px] font-[500] text-center">Our all Work Videos</h2>
            <p className="text-center text-[rgba(39,39,39,.74)]">
              Et est magna sunt culpa exercitation eiusmod Lorem nulla proident quis dolor.
            </p>
          </div>
          <div className="flex gap-[10px]">
            {props.video.map((article: any, i: number) => {
              return <VideoCard {...article} key={i.toString()} />;
            })}
          </div>
        </Container>
      </section>
    </Layout>
  );
};

export default Video;

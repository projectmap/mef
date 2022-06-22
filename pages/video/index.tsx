import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { blogsLists } from '..';
import Layout from '../../components/Layout/Layout';
import VideoCardLists from '../../components/Video/video-card-lists';
const Video = () => {
  return (
    <Layout>
      <div className="w-[55%]  bg-black  mx-auto">
        <Carousel showArrows={true}>
          {blogsLists.map((item) => {
            return (
              <div className="w-full flex-col md:p-5 pt-5 ">
                <a href={`/article/${item.slug}`}>
                  <img
                    src={item.src}
                    alt={`Hero image`}
                    className="rounded-3xl hover:h-full transform transition duration-500 hover:scale-105"
                  />
                  <h2 className="text-lg md:text-3xl m-0 font-medium">{item.title}</h2>
                </a>
              </div>
            );
          })}
        </Carousel>
      </div>
      <section>
        <VideoCardLists videoLists={blogsLists} />
      </section>
    </Layout>
  );
};

export default Video;

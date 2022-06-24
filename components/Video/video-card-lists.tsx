import React, { FC } from 'react';
import Container from '../Layout/Container';
import VideoCard, { IVideoCard } from './video-card';

interface IVideoCardLists {
  videoLists: any;
}

const VideoCardLists: FC<IVideoCardLists> = ({ videoLists }) => {
  return (
    <div className="py-[80px] bg-[#f6f5fa] ">
      {' '}
      <Container>
        <div className="py-[30px]">
          <h2 className="text-[40px] font-[500] text-center">Our Work Videos</h2>
          <p className="text-center text-[rgba(39,39,39,.74)]">
            Et est magna sunt culpa exercitation eiusmod Lorem nulla proident quis dolor.
          </p>
        </div>
        <div className="flex gap-[10px]">
          {videoLists.map((article: any, i: number) => {
            return <VideoCard {...article} key={i.toString()} />;
          })}
        </div>
      </Container>
      <div className="flex mt-[30px]">
        <a
          href="/video"
          className="transform transition duration-500 hover:scale-105 text-[16px] mt-[30px] hover:bg-[#14323a] bg-white text-black border-[#14323a] border text-center hover:text-white text-[18px] mx-auto  px-[50px] py-[20px] rounded-[80px]"
        >
          See All Videos
        </a>
      </div>
    </div>
  );
};

export default VideoCardLists;

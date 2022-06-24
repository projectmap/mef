import React, { FC } from 'react';
import Container from '../Layout/Container';
import VideoCard, { IVideoCard } from './video-card';

interface IVideoCardLists {
  videoLists: IVideoCard[];
}

const VideoCardLists: FC<IVideoCardLists> = ({ videoLists }) => {
  return (
    <div className="py-[40px]">
      {' '}
      <Container>
        <div className="py-[20px]">
          <h2 className="text-[30px] font-[500] text-center">Videos</h2>
          <p className="text-center">Et est magna sunt culpa exercitation eiusmod Lorem nulla proident quis dolor.</p>
        </div>
        <div className="flex gap-[10px]">
          {videoLists.map((article, i) => {
            return <VideoCard {...article} />;
          })}
        </div>
      </Container>
      <div className="flex">
        <button className="text-[16px] mt-[30px] bg-blue-600 text-center text-white text-[18px] mx-auto hover:opacity-50 border px-[50px] py-[20px] rounded-[80px]">
          See all Videos{' '}
        </button>
      </div>
    </div>
  );
};

export default VideoCardLists;

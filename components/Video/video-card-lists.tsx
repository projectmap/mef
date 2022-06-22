import React, { FC } from 'react';
import Container from '../Layout/Container';
import VideoCard, { IVideoCard } from './video-card';

interface IVideoCardLists {
  videoLists: IVideoCard[];
}

const VideoCardLists: FC<IVideoCardLists> = ({ videoLists }) => {
  return (
    <div>
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
        <a href={'/video'} className="text-[16px] mx-auto">
          View all Videos
        </a>
      </div>
    </div>
  );
};

export default VideoCardLists;

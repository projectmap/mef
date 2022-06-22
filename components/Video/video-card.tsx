import React, { FC } from 'react';

export interface IVideoCard {
  src: string;
  title: string;
  slug: string;
}
const VideoCard: FC<IVideoCard> = ({ src, title, slug }) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 flex-col md:p-5 pt-5 ">
      <div className="relative">
        <a href={`/article/${slug}`}>
          <img
            src={src}
            alt={`Hero image`}
            className="rounded-3xl hover:h-full transform transition duration-500 hover:scale-105"
          />
          <img
            height="80px"
            width="80px"
            className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"
            src={
              'https://www.freepnglogos.com/uploads/youtube-play-button-png/youtube-play-button-file-youtube-play-buttom-icon-svg-wikimedia-commons-8.png'
            }
          />
          <h2 className="text-lg absolute bottom-0 md:text-3xl m-0 font-medium px-[15px] text-white py-[20px]">
            {title}
          </h2>
        </a>
      </div>
    </div>
  );
};

export default VideoCard;

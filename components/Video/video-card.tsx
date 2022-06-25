import React, { FC } from 'react';
import ThemeContext from '../../ThemeContext';

export interface IVideoCard {
  data: any;
}
const VideoCard: FC<IVideoCard> = ({ data }) => {
  const { embedUrl, setEmbedUrl, isNepali } = React.useContext(ThemeContext);

  console.log(data, 'data');
  return (
    <div
      className="w-full md:w-1/2 lg:w-[32%] flex-col md:p-5 pt-5 cursor-pointer"
      onClick={() => setEmbedUrl(data?.youtube_video_link.url)}
    >
      <div className=" relative rounded-[8px] hover:h-full transform transition duration-500 hover:scale-105">
        <img src={data.thumbnail.url} alt={`Hero image`} />
        <img
          height="60px"
          width="60px"
          className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"
          src={
            'https://www.freepnglogos.com/uploads/youtube-play-button-png/youtube-play-button-file-youtube-play-buttom-icon-svg-wikimedia-commons-8.png'
          }
        />
        <p
          className="text-[12px] w-full leading-[25px] absolute bottom-0 md:text-[18px] m-0 font-medium px-[15px] text-white pb-[10px] py-[20px]"
          style={{ background: 'linear-gradient(90deg, rgba(42,72,77,0.7245098723082983) 51%, rgba(42,70,77,1) 100%)' }}
        >
          {isNepali ? data.title_nepali[0].text : data.title[0].text}
        </p>
      </div>
    </div>
  );
};

export default VideoCard;

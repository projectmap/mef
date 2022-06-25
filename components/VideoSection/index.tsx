import React, { FC } from 'react';
import Container from '../Layout/Container';
import ThemeContext from '../../ThemeContext';

const VideoSection: FC<{ selectedVideoForHomePage: any }> = ({ selectedVideoForHomePage }) => {
  const { embedUrl, setEmbedUrl } = React.useContext(ThemeContext);
  console.log(selectedVideoForHomePage, 'selectedVideoForHomePage');
  return (
    <div className="relative bg-[#fefefe]">
      <Container>
        <div className="h-[65vh] flex flex-col justify-center">
          <div className="flex flex-col md:flex-row justify-between ">
            <div
              className="w-full md:w-1/2 relative cursor-pointer "
              data-aos="fade-right"
              data-aos-delay="50"
              data-aos-duration="1500"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="true"
              onClick={() => setEmbedUrl(selectedVideoForHomePage.youtube_video_link.url)}
            >
              <img className="left-0 rounded-[40px]" src={selectedVideoForHomePage?.thumbnail?.url} />
              <img
                className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"
                height="100px"
                width="100px"
                src={
                  'https://www.freepnglogos.com/uploads/youtube-play-button-png/youtube-play-button-file-youtube-play-buttom-icon-svg-wikimedia-commons-8.png'
                }
              />
            </div>
            <div
              className="w-full lg:w-1/3 flex flex-col justify-center"
              data-aos="fade-left"
              data-aos-delay="50"
              data-aos-duration="1500"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="true"
            >
              <div>
                <h1 className="text-[30px] text-center lg:text-[60px] leading-[60px] ">We are here to help children</h1>

                <p className="text-gray-600 text-center mt-[12px]">
                  Quis adipisicing do eiusmod elit aliqua. In sunt sunt proident dolore consectetur cillum. Nisi
                  cupidatat officia anim incididunt. Nulla culpa ut cupidatat nisi. Excepteur velit sit laborum nostrud.
                  Quis cupidatat ad do sunt duis minim in cupidatat ad cillum do exercitation reprehenderit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default VideoSection;

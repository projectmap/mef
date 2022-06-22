import React from 'react';
import Container from '../Layout/Container';

const VideoSection = () => {
  return (
    <div className="relative bg-[#fefefe]">
      <Container>
        <div className="h-[65vh] flex flex-col justify-center">
          <div className="flex justify-between ">
            <div className="w-1/2 relative cursor-pointer ">
              <img
                className="left-0 rounded-[60px]"
                src={
                  'https://images.unsplash.com/photo-1542810634-71277d95dcbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80'
                }
              />
              <img
                className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"
                height="100px"
                width="100px"
                src={
                  'https://www.freepnglogos.com/uploads/youtube-play-button-png/youtube-play-button-file-youtube-play-buttom-icon-svg-wikimedia-commons-8.png'
                }
              />
            </div>
            <div className="w-1/3 flex flex-col justify-center">
              <div>
                <h1 className="text-[60px] leading-[60px] ">We are here to help children</h1>

                <p className="text-gray-600 mt-[12px]">
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

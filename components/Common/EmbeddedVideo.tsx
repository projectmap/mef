import React from 'react';
import ThemeContext from '../../ThemeContext';

const EmbedVideo = () => {
  const { embedUrl, setEmbedUrl } = React.useContext(ThemeContext);

  if (!embedUrl) {
    return null;
  }

  return (
    <>
      <div className="fixed flex flex-col justify-between bg-black w-screen h-screen z-[2] opacity-50 "></div>

      <div className="fixed left-1/2 top-1/2 translate-y-[-50%] translate-x-[-50%]  z-[50000000000000] ">
        <div className="flex">
          <a className="cursor-pointer group flex ml-auto " onClick={() => setEmbedUrl(undefined)}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="16" className="fill-[#000000] group-hover:fill-[#2a464d]" fill="black" />
              <path d="M22 10L10 22" stroke="#F6F5FA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M10 10L22 22" stroke="#F6F5FA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
        <div className="flex justify-center">
          <div className="relative overflow-hidden pt-[56%] w-[100vw]  mx-auto lg:w-[774px]  lg:mt-0">
            <iframe
              src={'https://www.youtube-nocookie.com/embed/0Q4J8KufCQg?autoplay=1'}
              frameBorder="0"
              className="bg-[#080808] rounded-24  absolute w-[100%] h-[95%] inset-0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmbedVideo;

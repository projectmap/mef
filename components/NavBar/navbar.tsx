import React, { FC } from 'react';
import Container from '../Layout/Container';

const Navbar: FC<{ navBarColor?: string; details: any }> = ({ navBarColor, details }) => {
  return (
    <nav className={'sticky opacity-90  bg-[#14323a] top-0 z-[2] py-[20px] ' + navBarColor ?? ' '}>
      <Container>
        <div className="flex justify-between mx-auto">
          <div className="w-1/2">
            <a href="/" className="flex">
              <img src={details.logo.url} height="40px" width="40px" />
              <span className="my-auto text-[22px] ml-[10px] text-white">{details.organization_name[0].text}</span>
            </a>
          </div>

          <div className="w-[30%] flex justify-between">
            <div className="flex  flex-col justify-center">
              <a href="/" className="text-[18px] text-white">
                Home
              </a>
            </div>
            <div className="flex flex-col justify-center">
              <a href="/video" className="text-[18px] text-white">
                Video
              </a>
            </div>
            <div className="flex flex-col justify-center">
              <a href="/blogs" className="text-[18px] text-white">
                Blogs
              </a>
            </div>
            <div className="flex flex-col justify-center">
              <a href="/about-us" className="text-[18px] text-white">
                {' '}
                About Us
              </a>
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;

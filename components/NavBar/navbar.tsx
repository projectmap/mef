import React from 'react';
import Container from '../Layout/Container';

const Navbar = () => {
  return (
    <nav className="sticky bg-[#14323a] opacity-90  top-0 z-[2] py-[20px]">
      <Container>
        <div className="flex justify-between mx-auto">
          <div className="w-1/2">
            <a href="/">
              <img src={'https://c8.alamy.com/comp/2B4561A/demo-icon-2B4561A.jpg'} height="50px" width="50px" />
            </a>
          </div>

          <div className="w-[20%] flex justify-between">
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
              <a href="/contact" className="text-[18px] text-white">
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

import React from 'react';
import Container from '../Layout/Container';
import Button from '../Common/button';

const LearnMore = () => {
  return (
    <div className="bg-[#14323a] opacity-90 my-[20px]">
      <Container>
        <div className="flex flex-col md:flex-row py-[40px] justify-between">
          <h1 className="text-white text-[20px] text-center md:text-left w-full md:w-1/3">
            Id voluptate reprehenderit cillum reprehenderit eu cupidatat occaecat esse ipsum.
          </h1>
          <a href="/about-us" className="md:flex mx-auto md:mx-0 mt-[10px] md:mt-0 flex-col justify-center">
            <Button buttonName="Learn About Us" className="" />
          </a>
        </div>
      </Container>
    </div>
  );
};

export default LearnMore;

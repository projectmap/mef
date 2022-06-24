import React from 'react';
import Container from '../Layout/Container';
import Button from '../Common/button';

const LearnMore = () => {
  return (
    <div className="bg-[#14323a] opacity-90 my-[20px]">
      <Container>
        <div className="flex py-[40px] justify-between">
          <h1 className="text-white text-[20px] w-1/3">
            Id voluptate reprehenderit cillum reprehenderit eu cupidatat occaecat esse ipsum.
          </h1>
          <Button buttonName="Learn about us" className="" />
        </div>
      </Container>
    </div>
  );
};

export default LearnMore;

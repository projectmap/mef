import React from 'react';
import Container from '../Layout/Container';

const Slogans = () => {
  return (
    <Container>
      <div className="flex justify-between container absolute z-[1] bottom-[-20%]">
        <div className="rounded-[10px] text-[25px] bg-white shadow-lg w-1/4 py-[40px] h-[250px] px-[10px]">
          <p>"Sunt cupidatat do excepteur consectetur magna elit. Dolore officia et consectetur eu duis laborum eu"</p>
          <p className="text-[18px] text-gray-600">Sujeet Singh</p>
        </div>
        <div className="rounded-[10px] shadow-lg bg-white text-[25px]  w-1/4  py-[40px] px-[10px]">
          <p>"Cupidatat proident ea elit mollit excepteur est deserunt eiusmod veniam laboris incididunt."</p>
          <p className="text-[18px] text-gray-600">Sujeet Singh</p>
        </div>
        <div className="rounded-[10px] shadow-lg bg-white text-[25px]  w-1/4  py-[40px] px-[10px]">
          <p>"Cupidatat proident ea elit mollit excepteur est deserunt eiusmod veniam laboris incididunt."</p>
          <p className="text-[18px] text-gray-600">Sujeet Singh</p>
        </div>
      </div>
    </Container>
  );
};

export default Slogans;

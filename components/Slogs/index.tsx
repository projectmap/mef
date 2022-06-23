import React from 'react';
import Container from '../Layout/Container';

const Slogans = () => {
  return (
    <Container>
      <div className="flex justify-between container absolute z-[1] bottom-[-25%]">
        <div className="rounded-[10px] text-[20px] bg-white flex flex-col justify-center text-center shadow-lg w-1/4 py-[30px] h-[250px] px-[10px]">
          <p>"Sunt cupidatat do excepteur consectetur magna elit. Dolore officia et consectetur eu duis laborum eu"</p>
          <p className="text-[18px] text-gray-600 mt-[10px]">Sujeet Singh</p>
        </div>
        <div className="rounded-[10px] shadow-lg bg-white flex flex-col justify-center text-center text-[20px]  w-1/4  py-[30px] px-[10px]">
          <p>"Cupidatat proident ea elit mollit excepteur est deserunt eiusmod veniam laboris incididunt."</p>
          <p className="text-[18px] text-gray-600 mt-[10px]">Sujeet Singh</p>
        </div>
        <div className="rounded-[10px] shadow-lg bg-white flex flex-col justify-center text-center text-[20px]  w-1/4  py-[30px] px-[10px]">
          <p>"Cupidatat proident ea elit mollit excepteur est deserunt eiusmod veniam laboris incididunt."</p>
          <p className="text-[18px] text-gray-600 mt-[10px]">Sujeet Singh</p>
        </div>
      </div>
    </Container>
  );
};

export default Slogans;

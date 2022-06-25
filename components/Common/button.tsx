import React, { FC } from 'react';
import LeftArrow from './LeftArrow.svg';
import { BsArrowRightShort } from 'react-icons/bs';
const Button: FC<{ buttonName: string; className: string; iconColor?: 'red' }> = ({
  buttonName,
  className,
  iconColor = 'red',
}) => {
  const arrowColor = {
    red: LeftArrow,
  };

  return (
    <button className={`animate-image flex rounded-[50px] bg-white px-[20px] py-[10px] text-black ${className}`}>
      <span className="flex flex-col justify-center">{buttonName}</span>
      <div className="ml-6 icon mx-auto my-auto">
        <BsArrowRightShort size={25} />
      </div>
    </button>
  );
};

export default Button;

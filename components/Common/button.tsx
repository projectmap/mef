import React, { FC } from 'react';
import LeftArrow from './LeftArrow.svg';

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
      {buttonName}
      <img className="ml-6 icon mx-auto mt-1" src={LeftArrow} />
    </button>
  );
};

export default Button;

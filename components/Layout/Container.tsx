import React, { FC } from 'react';

const Container: FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="px-[30px] xl:px-0 container mx-auto">{children}</div>;
};

export default Container;

import React, { FC } from 'react';

const Container: FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="container mx-auto">{children}</div>;
};

export default Container;

import React, { ReactNode } from 'react';

type MainProps = {
  children?: ReactNode;
};

const Main = ({ children }: MainProps) => {
  return (
    <>
      <div role="main" className="main transformZ0">
        {children}
      </div>
    </>
  );
};

export default Main;

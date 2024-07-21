import React, { ReactNode } from 'react';

type MainProps = {
  children?: ReactNode;
};

const Main: React.FC<MainProps> = ({ children }) => {
  return (
      <div role="main" className="main transformZ0">
        {children}
      </div>
  );
};

export default Main;

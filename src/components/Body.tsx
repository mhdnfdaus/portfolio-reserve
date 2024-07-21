import React, { ReactNode } from "react";

type MainProps = {
  children?: ReactNode;
};

const Body: React.FC<MainProps> = ({ children }) => {
  return (
    <div className="body" data-scroll-container>
      {children}
    </div>
  );
};

export default Body;

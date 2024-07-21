import { ReactNode } from "react";

type MainProps = {
  children?: ReactNode;
};

const Body = ({ children } : MainProps) => {
  return (
    <div className="body" data-scroll-container>
      {children}
    </div>
  );
};

export default Body;

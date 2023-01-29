import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const Container = ({ children }: Props) => {
  return (
    <div className="lg:pt-36 pt-24 px-4 h-auto w-full flex flex-col items-center">
      {children}
    </div>
  );
};

export default Container;

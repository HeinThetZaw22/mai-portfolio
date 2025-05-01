import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 xl:px-40">{children}</div>
  );
};

export default Container;

import React from "react";

interface MaxWidthWrapperProps {
  children: React.ReactNode;
}

const MaxWidthWrapper: React.FC<MaxWidthWrapperProps> = ({ children }) => {
  return <div className="max-w-[1400px] mx-auto px-4">{children}</div>;
};

export default MaxWidthWrapper;

import React from "react";

interface HorizontalLineWithTextProps {
  text: string;
}

const HorizontalSeparator: React.FC<HorizontalLineWithTextProps> = ({
  text,
}) => {
  return (
    <div className="flex items-center">
      <div className="w-full h-[1px] bg-grayPrimary"></div>
      <h2 className="px-5 font-medium text-grayPrimary whitespace-nowrap">
        {text}
      </h2>
      <div className="w-full h-[1px] bg-grayPrimary"></div>
    </div>
  );
};

export default HorizontalSeparator;

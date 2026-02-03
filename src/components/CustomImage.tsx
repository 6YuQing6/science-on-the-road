import React from "react";

type CustomImageProps = React.ImgHTMLAttributes<HTMLImageElement>;

const CustomImage: React.FC<CustomImageProps> = ({ src, alt, ...props }) => {
  console.log("this is src", src);
  if (!src) return null;
  return <img src={src} alt={alt} className="markdown-img" {...props} />;
};

export default CustomImage;

"use client";

import React from "react";
import Image from "next/image";

const BASE_URL = process.env.BASE_PATH || "/images/";

const Img = ({
  className,
  src = "defaultNoData.png",
  alt = "testImg",
  isStatic = false,
  width,
  height,
  ...restProps
}) => {
  const [imgSrc, setImgSrc] = React.useState(src);

  React.useEffect(() => {
    setImgSrc(src);
  }, [src]);

  return (
    <Image
      className={className}
      src={isStatic ? imgSrc : `${BASE_URL}${imgSrc}`}
      alt={alt}  // Ensure 'alt' is passed to 'Image'
      width={width}
      height={height}
      {...restProps}
      onError={() => {
        setImgSrc("defaultNoData.png");
      }}
    />
  );
};

export { Img };

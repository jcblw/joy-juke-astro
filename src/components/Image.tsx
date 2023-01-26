import { useEffect, useState } from "react";

export default ({
  className = "",
  src,
  alt,
}: {
  src: string;
  alt: string;
  className?: string;
}) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    if (isLoaded || isError) {
      return;
    }

    const img = new Image();
    img.src = src;
    img.onload = () => {
      setIsLoaded(true);
    };
    img.onerror = () => {
      setIsError(true);
    };
  }, [isLoaded, isError, setIsLoaded, setIsError]);

  return (
    <div className={`${className} overflow-hidden`}>
      <img
        className={`${className} ${
          isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
        } transition-all origin-center duration-500 ease-in-out`}
        src={src}
        alt={alt}
      />
    </div>
  );
};

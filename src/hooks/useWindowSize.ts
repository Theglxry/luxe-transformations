import { useState, useEffect } from "react";

function useWindowSize() {
  // State to store the window dimensions
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    setWindowSize({
      width: window?.innerWidth,
      height: window?.innerHeight,
    });

    // Handler function to update window size on resize
    const handleResize = () => {
      setWindowSize({
        width: window?.innerWidth,
        height: window?.innerHeight,
      });
    };

    // Add event listener for resize events
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    width: windowSize.width,
    height: windowSize.height,
    sm: windowSize?.width < 640,
    md: windowSize?.width < 768,
  };
}

export default useWindowSize;

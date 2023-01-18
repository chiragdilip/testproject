import { useRef, useEffect } from "react";

//This is the hook to take care of controlling canvas and updating frames every one second.
const useCanvas = (draw, stop) => {
  const canvasRef = useRef(null);

  //hack used to show intial screen when direction is stopped
  const renderCounts = useRef(0);

  //update frames at an interval of 1 second
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    let animationFrameId;
    renderCounts.current++;
    const render = () => {
      draw(context);
      animationFrameId = window.requestAnimationFrame(render);
    };

    const interval = setInterval(render, 1000);
    //if stoped and rendered a couple of times , clear the interval
    if (stop && renderCounts.current > 2) {
      clearInterval(interval);
    }
    //when unmounting clear interval and cancle animation
    return () => {
      clearInterval(interval);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [draw, stop]);

  return canvasRef;
};

export default useCanvas;

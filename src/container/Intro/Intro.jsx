import React, { useRef, useEffect } from "react";
import { meal } from "../../constants";
import "./Intro.css";

const Intro = () => {
  const vidRef = useRef();

  useEffect(() => {
    const video = vidRef.current;

    video.addEventListener("ended", () => {
      video.play();
    });

    return () => {
      video.removeEventListener("ended", () => {
        video.play();
      });
    };
  }, []);

  useEffect(() => {
    const video = vidRef.current;
    video.play();
  }, []);

  return (
    <div className="app__video">
      <video
        ref={vidRef}
        src={meal}
        type="video/mp4"
        loop
        width={"100%"}
        height={"100%"}
        muted
        autoPlay
      />
    </div>
  );
};

export default Intro;

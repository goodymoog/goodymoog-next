"use client";

import { useEffect, useRef } from "react";

export default function SpinningAlbumVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      video.pause();
      video.currentTime = 0;
      video.muted = false;
    }
  }, []);

  return (
    <video
      ref={videoRef}
      className="spinning-cd-video"
      loop
      playsInline
      preload="metadata"
      onClick={(e) => {
        e.currentTarget.play();
      }}
    >
      <source src="/videos/spinning-cd.mp4" type="video/mp4" />
    </video>
  );
}
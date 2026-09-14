"use client";

export default function SpinningAlbumVideo() {
  return (
    <video
      className="spinning-cd-video"
      loop
      playsInline
      preload="auto"
      onClick={(e) => e.currentTarget.play()}
    >
      <source src="/videos/spinning-cd.mp4" type="video/mp4" />
    </video>
  );
}
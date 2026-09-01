"use client";

import { useRef, useState } from "react";

/**
 * Teacher intro video with reliable click-to-play.
 * - Before playback: the poster shows and the whole area (poster + its play
 *   button + anywhere on it) is one clickable target that starts the video.
 * - After playback starts: the native <video> controls take over.
 * Video file: /public/teacher-mia-freya.mp4 · Poster: /public/mia-freya-poster.jpg
 */
export default function TeacherVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  const startPlayback = () => {
    const video = videoRef.current;
    if (!video) return;
    setStarted(true);
    const attempt = video.play();
    if (attempt && typeof attempt.catch === "function") {
      // If playback with sound is blocked by the browser, retry muted so it still plays.
      attempt.catch(() => {
        video.muted = true;
        video.play().catch(() => {});
      });
    }
  };

  return (
    <div className="relative w-full aspect-[640/368] rounded-xl overflow-hidden shadow-lg bg-green-900">
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        controls
        playsInline
        preload="metadata"
        poster="/mia-freya-poster.jpg"
        aria-label="Meet Teacher Mia Freya introduction video"
        onPlay={() => setStarted(true)}
      >
        <source src="/teacher-mia-freya.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {!started && (
        <button
          type="button"
          onClick={startPlayback}
          aria-label="Play Teacher Mia Freya's introduction video"
          className="absolute inset-0 z-10 cursor-pointer bg-black/0 transition hover:bg-black/10"
        >
          <span className="sr-only">Play video</span>
        </button>
      )}
    </div>
  );
}

import React, { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

function MusicButton() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    try {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        await audioRef.current.play();
        setIsPlaying(true);
      }
    } catch (err) {
      console.log("Audio play blocked until user interacts", err);
    }
  };

  useEffect(() => {
    const audio = audioRef.current;

    const handleEnded = () => setIsPlaying(false);

    if (audio) {
      audio.addEventListener("ended", handleEnded);
    }

    return () => {
      if (audio) {
        audio.removeEventListener("ended", handleEnded);
      }
    };
  }, []);

  return (
    <>
      <audio ref={audioRef} src="/music.mp3" loop />

      <button
        onClick={toggleMusic}
        className="fixed md:bottom-6 bottom-3 right-6 z-50 md:w-14 md:h-14 w-10 h-10 rounded-full bg-gradient-to-r from-[#1a1a1a]/80 via-[#2a2a2a]/70 to-[#1a1a1a]/80  text-white flex items-center justify-center shadow-lg hover:scale-105 transition"
      >
        {isPlaying ? <Volume2 size={22} /> : <VolumeX size={22} />}
      </button>
    </>
  );
}

export default MusicButton;
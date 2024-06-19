"use client";

import { VideoPlayer } from "@/components/VideoPlayer";
import { useState } from "react";

const UseEffectVidePlayer = () => {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="">
      <div className="border border-white p-3 mb-4">
        <p className="text-2xl mb-3 text-blue-400">
          {playing ? "Rodando" : "Pausado"}
        </p>
        <button
          className="bg-blue-400 rounded-md p-3 text-black"
          onClick={() => {
            setPlaying(!playing);
          }}
        >
          Play/Pause
        </button>

        <VideoPlayer
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          isPlaying={playing}
        ></VideoPlayer>
      </div>
    </div>
  );
};

export default UseEffectVidePlayer;

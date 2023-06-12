import React, { FC, memo, useEffect, useRef } from "react";
import videojs from "video.js";

interface IVideoPlayerProps {
  options?: videojs.PlayerOptions;
  src: string;
  onEnded?: () => void;
}

const initialOptions: videojs.PlayerOptions = {
  autoplay: false,
  controls: true,
  responsive: true,
  disablePictureInPicture: true,
  fluid: true,
  playbackRates: [0.5, 0.75, 1, 1.25, 1.5, 2],
  controlBar: {
    pictureInPictureToggle: false,
  },
};

const VideoContainer: FC<IVideoPlayerProps> = ({ options, src, ...props }) => {
  const videoNode = useRef<HTMLVideoElement>(null);
  const player = useRef<videojs.Player>();

  useEffect(() => {
    if (!videoNode.current) return;
    player.current = videojs(videoNode.current, {
      ...initialOptions,
      ...options,
      sources: [
        {
          src,
          type: "video/mp4",
        },
      ],
    }).ready(function () {
      this.on("ended", () => {
        props.onEnded && props.onEnded();
      });
    });

    return () => {
      if (player.current) {
        player.current.dispose();
      }
    };
  }, [options]);

  return <video ref={videoNode} className="video-js custom-video"></video>;
};

export default memo(VideoContainer);

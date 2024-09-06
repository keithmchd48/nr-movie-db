import { useEffect, useRef } from "react";
import { YOUTUBE_DOMAIN } from "utils/assets";
import { TTrailer } from "hooks/types";

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: any;
  }
}

const YOUTUBE_SCRIPT_ID: string = "youtube-iframe-api";
const YOUTUBE_IFRAME_ID: string = "youtube-trailer";

const YTComponent = ({ trailer, muted } : {trailer: TTrailer | null, muted: boolean}) => {
  let playerRef: React.RefObject<HTMLElement> = useRef(null);

  let videoOptions: string = ``;
  if (trailer?.key) {
    videoOptions = `&autoplay=1&mute=1&loop=1&playlist=${trailer?.key}&controls=0&showinfo=0&rel=0&modestbranding=1&fs=0&color=white&iv_load_policy=3&disablekb=1&autohide=0&cc_load_policy=0&enablejsapi=1&widgetid=1`;
  }

  const loadPlayerRef = () => {
    // @ts-ignore
    playerRef.current = new window.YT.Player(YOUTUBE_IFRAME_ID, {
      videoId: trailer?.key,
      playerVars: { autoplay: 1, controls: 0 },
    });
  };

  useEffect(() => {
    let iframeScript: HTMLScriptElement | null = document.getElementById(YOUTUBE_SCRIPT_ID) as HTMLScriptElement | null;

    if (!iframeScript) {
      iframeScript = document.createElement("script");
      iframeScript.id = YOUTUBE_SCRIPT_ID;
      iframeScript.src = `${YOUTUBE_DOMAIN}iframe_api`;
      const firstScriptTag = document.getElementsByTagName("script")[0];
      if (firstScriptTag && firstScriptTag.parentNode) {
        firstScriptTag.parentNode.insertBefore(iframeScript, firstScriptTag);
      }
    }

    window.onYouTubeIframeAPIReady = () => {
      loadPlayerRef();
    };

    return () => {
      if (iframeScript) {
        iframeScript.remove();
      }
      window.YT = null;
      window.onYouTubeIframeAPIReady = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (playerRef.current) {
      // @ts-ignore
      if (playerRef.current.isMuted()) {
        // @ts-ignore
        playerRef.current.unMute();
      } else {
        // @ts-ignore
        playerRef.current.mute();
      }
    }
  }, [muted]);

  return (
    <iframe
      id={YOUTUBE_IFRAME_ID}
      className="w-screen aspect-video"
      src={`${YOUTUBE_DOMAIN}embed/${trailer?.key}?${videoOptions}`}
      title="YouTube video player"
      allowFullScreen
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    ></iframe>
  );
};

export default YTComponent;

import { useEffect, useRef } from 'react';
import { YOUTUBE_DOMAIN } from "../utils/assets";

const YOUTUBE_SCRIPT_ID = 'youtube-iframe-api';
const YOUTUBE_IFRAME_ID = 'youtube-trailer';

const YTComponent = ({trailer, muted}) => {
  let playerRef = useRef(null);

  let videoOptions = ``;
  if (trailer?.key) {
    videoOptions = `&autoplay=1&mute=1&loop=1&playlist=${trailer?.key}&controls=0&showinfo=0&rel=0&modestbranding=1&fs=0&color=white&iv_load_policy=3&disablekb=1&autohide=0&cc_load_policy=0&enablejsapi=1&widgetid=1`;
  }

  const loadPlayerRef = () => {
    playerRef.current = new window.YT.Player(YOUTUBE_IFRAME_ID, {
      videoId: trailer?.key,
      playerVars: { 'autoplay': 1, 'controls': 0 },
    });
  };

  useEffect(() => {
    let iframeScript = document.getElementById(YOUTUBE_SCRIPT_ID);

    if(!iframeScript) {
      iframeScript = document.createElement('script');
      iframeScript.id = YOUTUBE_SCRIPT_ID;
      iframeScript.src = `${YOUTUBE_DOMAIN}iframe_api`;
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(iframeScript, firstScriptTag);
    }

    window.onYouTubeIframeAPIReady = () => {
      loadPlayerRef();
    };

    return () => {
      if(iframeScript) {
        iframeScript.remove();
      }
      window.YT = null;
      window.onYouTubeIframeAPIReady = null;
    };
  }, []);

  useEffect(() => {
    if (playerRef.current) {
      if (playerRef.current.isMuted()) {
        playerRef.current.unMute();
      } else {
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

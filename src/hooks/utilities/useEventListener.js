import { useEffect, useRef } from "react";

export default function useEventListener(
  eventType,
  callback,
  element = window
) {
  const callBackRef = useRef(callback);

  useEffect(() => {
    callBackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    const handler = (e) => callBackRef.current(e);
    element.addEventListener(eventType, handler);

    return () => {
      element.removeEventListener(eventType, handler);
    };
  }, [eventType, element]);
}

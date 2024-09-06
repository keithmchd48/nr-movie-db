import { useEffect, useRef } from "react";

export default function useEventListener(
  eventType: string,
  callback: (event: MouseEvent) => void,
  element = window
) {
  const callBackRef: React.MutableRefObject<(event: MouseEvent) => void> = useRef(callback);

  useEffect(() => {
    callBackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    const handler: (e: MouseEvent) => void = (e: MouseEvent) => callBackRef.current(e);
    element.addEventListener(eventType, handler as EventListener);

    return () => {
      element.removeEventListener(eventType, handler as EventListener);
    };
  }, [eventType, element]);
}

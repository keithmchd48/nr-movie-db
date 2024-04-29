import useEventListener from "hooks/utilities/useEventListener";

export default function useClickOutside(ref: React.RefObject<HTMLElement>, ignoreRef: React.RefObject<HTMLElement> | null, callback: (e: MouseEvent) => void) {
  useEventListener(
    "click",
    (e: MouseEvent) => {
      if (ignoreRef && ignoreRef.current && (ignoreRef.current as Node).contains(e.target as Node)) return;

      if (ref.current == null || ref.current.contains(e.target as Node)) return;

      callback(e);
    },
    window
  );
}

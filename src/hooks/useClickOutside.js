import useEventListener from "./useEventListener";

export default function useClickOutside(ref, ignoreRef, callback) {
  useEventListener("click", (e) => {
    if(ignoreRef && ignoreRef.current.contains(e.target)) return;
    if (ref.current == null || ref.current.contains(e.target)) return;

    callback(e);
  }, document);
};
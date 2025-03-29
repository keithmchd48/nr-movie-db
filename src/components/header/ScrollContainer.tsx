import { useEffect, useState, ReactNode } from "react";

const ScrollContainer = ({children}: {children: ReactNode}) => {
  const [scroll, setScroll] = useState(false);

  const addGradient: () => void = () => {
    setScroll(window.scrollY > 20);
  };

  useEffect(() => {
    window.addEventListener("scroll", addGradient);

    // When component is unmounted, unsubscribe from the listener
    return () => {
      window.removeEventListener("scroll", addGradient);
    };
  }, []);

  return (
    <div
        className={`layout-padding flex fixed w-screen z-30 justify-between items-center py-3 ${
          scroll
            ? "bg-brand-black"
            : "xs:bg-brand-black l:bg-transparent l:bg-gradient-to-b l:from-brand-black"
        }`}
      >
        {children}
      </div>
  );
};

export default ScrollContainer;
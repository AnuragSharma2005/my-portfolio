import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;

    const move = (e) => {
      if (cursor) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      }
    };

    const handleHover = (e) => {
      setHovering(!!e.target.closest(".cursor-hover"));
    };

    document.addEventListener("mousemove", move);
    document.addEventListener("mouseover", handleHover);

    return () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", handleHover);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`fixed z-[9999] pointer-events-none rounded-full -translate-x-1/2 -translate-y-1/2 transition-all duration-150 ease-out
        ${hovering
          ? "w-16 h-16 bg-blue-400/20 border border-blue-500/40 backdrop-blur-md"
          : "w-6 h-6 bg-white/10 border border-white/20 backdrop-blur-sm"
        }`}
      style={{ top: 0, left: 0 }}
    />
  );
};

export default CustomCursor;

import { useEffect, useRef, useState } from "react";

export function useOnScreen(options) {
  const ref = useRef();
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        const element = ref.current;
        observer.unobserve(element);
      }
    };
  }, [ref, options]);
  return [ref, visible];
}

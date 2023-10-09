import Router from "next/router";
import { useEffect, useRef, useState } from "react";

const usePageLoading = (delay = 200) => {
  const timeoutRef = useRef();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const start = () => {
      timeoutRef.current = window.setTimeout(() => {
        setIsLoading(true);
      }, delay);
    };
    const end = () => {
      window.clearTimeout(timeoutRef.current);
      setIsLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, [delay]);

  return isLoading;
};

export default usePageLoading;

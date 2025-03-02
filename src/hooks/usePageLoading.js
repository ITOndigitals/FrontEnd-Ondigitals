import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

const usePageLoading = (delay = 1000) => {
  const router = useRouter();
  const timeoutRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const start = (url) => {
      // So sánh URL đích với URL hiện tại để xác định có cần loading không
      if (url !== router.asPath) {
        timeoutRef.current = setTimeout(() => {
          setIsLoading(true);
          const mainElement = document.getElementById("main");
          if (mainElement) {
            mainElement.style.display = "none";
          }
        }, delay);
      }
    };

    const end = () => {
      clearTimeout(timeoutRef.current);
      setIsLoading(false);
      const mainElement = document.getElementById("main");
      if (mainElement) {
        mainElement.style.display = "block";
      }
    };

    router.events.on("routeChangeStart", start);
    router.events.on("routeChangeComplete", end);
    router.events.on("routeChangeError", end);

    // Cleanup khi component unmount
    return () => {
      router.events.off("routeChangeStart", start);
      router.events.off("routeChangeComplete", end);
      router.events.off("routeChangeError", end);
      clearTimeout(timeoutRef.current); // Đảm bảo timeout bị hủy
    };
  }, [delay, router.asPath]); // Thêm router.asPath vào dependency để cập nhật khi URL thay đổi

  return isLoading;
};

export default usePageLoading;
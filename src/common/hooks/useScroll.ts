import { useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";
import { scrollState } from "@store/scroll";
import { useEffect } from "react";

const useScroll = () => {
  const location = useLocation();
  const [scrollValue, setScrollValue] = useRecoilState(scrollState);

  useEffect(() => {
    if (scrollValue[location?.pathname])
      window.scrollTo(0, scrollValue[location?.pathname]);

    let scrollEnvet = () => {
      setScrollValue({
        ...scrollValue,
        [location.pathname]: window.scrollY,
      });
    };

    document.addEventListener("scroll", scrollEnvet);
    return () => {
      document.removeEventListener("scroll", scrollEnvet);
    };
  }, []);
};

export default useScroll;

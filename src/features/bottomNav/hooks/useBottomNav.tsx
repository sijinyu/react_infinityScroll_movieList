import { filterState } from "@store/movieAndFavorit";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";

const useBottomNav = () => {
  const setFilterState = useSetRecoilState(filterState);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [navValue, setNavValue] = useState(pathname);

  const handleHistoryChagne = (e: React.SyntheticEvent, value: string) => {
    if (pathname !== value) {
      setNavValue(value);
      navigate(value);
      setFilterState(value);
    }
  };

  return {
    value: navValue,
    handleHistoryChagne,
  };
};

export default useBottomNav;

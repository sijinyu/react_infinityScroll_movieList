import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const useBottomNav = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [navValue, setNavValue] = useState(pathname);

  const handleHistoryChagne = (e: React.SyntheticEvent, value: string) => {
    if (pathname !== value) {
      setNavValue(value);
      navigate(value);
    }
  };

  return {
    value: navValue,
    handleHistoryChagne,
  };
};

export default useBottomNav;

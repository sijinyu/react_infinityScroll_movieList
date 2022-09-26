import { searchState } from "@store/search";
import { useRecoilState } from "recoil";
import React, { useState, useCallback, useTransition } from "react";

const useSearch = () => {
  const [keyword, setKeyword] = useRecoilState(searchState);
  const [searchValue, setSearchValue] = useState<string>(keyword);
  const [isPending, setTransition] = useTransition();

  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      setSearchValue(value);
    },
    [searchValue]
  );

  const handleSearchClick = () => {
    window.scrollTo(0, 0);
    setTransition(() => {
      setKeyword(searchValue);
    });
  };

  return {
    keyword,
    handleSearchChange,
    handleSearchClick,
    isPending,
    searchValue,
  };
};

export default useSearch;

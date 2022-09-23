import React, { useState, useCallback, useTransition } from "react";

export const useSearch = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [keyword, setKeyword] = useState<string>("");
  const [isPending, setTransition] = useTransition();

  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      setSearchValue(value);
    },
    [searchValue]
  );

  const handleSearchClick = () =>
    setTransition(() => {
      setKeyword(searchValue);
    });

  return {
    keyword,
    handleSearchChange,
    handleSearchClick,
    isPending,
    searchValue,
  };
};

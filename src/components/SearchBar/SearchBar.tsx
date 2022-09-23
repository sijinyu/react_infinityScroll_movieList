import React from "react";
import { Button, Typography, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CircularProgress from "@mui/material/CircularProgress";
import * as S from "./SearchBar.style";
import { handleOnKeyEnter } from "@common/utils";

export interface Props {
  value: string;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClick: () => void;
  loading: boolean;
}

function SearchBar({ value, handleChange, handleClick, loading }: Props) {
  return (
    <S.Container>
      <S.SearchInput
        value={value}
        onKeyUp={(e) => handleOnKeyEnter(e, handleClick)}
        onChange={handleChange}
        placeholder="영화 제목을 입력해주세요."
        endAdornment={
          loading ? (
            <CircularProgress color="primary" size={20} />
          ) : (
            <IconButton aria-label="search" onClick={handleClick}>
              <SearchIcon />
            </IconButton>
          )
        }
      />
      <Button variant="contained" onClick={handleClick}>
        <Typography>검색</Typography>
      </Button>
    </S.Container>
  );
}

export default SearchBar;

import React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import ListIcon from "@mui/icons-material/List";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";
import * as S from "./BottomNavContainer.style";

interface Props {
  value: string;
  handleChange: (e: React.SyntheticEvent, value: string) => void;
}

export default function BottomNavContainer({ value, handleChange }: Props) {
  return (
    <S.Container>
      <BottomNavigation showLabels value={value} onChange={handleChange}>
        <BottomNavigationAction
          label="영화"
          value="/"
          LinkComponent={Link}
          icon={<ListIcon />}
        />
        <BottomNavigationAction
          label="즐겨찾기"
          value="/favorite"
          LinkComponent={Link}
          icon={<FavoriteIcon />}
        />
      </BottomNavigation>
    </S.Container>
  );
}

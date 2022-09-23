import BottomNavContainer from "src/components/BottomNavContainer";
import useBottomNav from "../hooks/useBottomNav";

export default function BottomNav() {
  const { value, handleHistoryChagne } = useBottomNav();

  return (
    <BottomNavContainer
      value={value}
      handleChange={handleHistoryChagne}
    ></BottomNavContainer>
  );
}

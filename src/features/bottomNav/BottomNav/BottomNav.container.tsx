import { BottomNavContainer } from "@components";
import useBottomNav from "../hooks/useBottomNav";

export default function BottomNav() {
  const { value, handleHistoryChagne } = useBottomNav();

  return (
    <BottomNavContainer value={value} handleChange={handleHistoryChagne} />
  );
}

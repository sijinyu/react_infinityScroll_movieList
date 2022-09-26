import { recoilPersist } from "recoil-persist";
import { atom } from "recoil";

const { persistAtom } = recoilPersist();

export const scrollState = atom({
  key: "scroll",
  default: {},

  effects_UNSTABLE: [persistAtom],
});

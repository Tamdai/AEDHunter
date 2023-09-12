import { atom } from "recoil";

export const positionAtom = atom<string[]>({
  key: "positionAtom",
  default: [],
});

export const locationAtom = atom<string[]>({
  key: "locationAtom",
  default: [],
});

export const keywordsAtom = atom<string[]>({
  key: "keywordsAtom",
  default: [],
});

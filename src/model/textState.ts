import { atom, selector, useRecoilValue, useSetRecoilState } from "recoil";

export const textState = atom({
  key: "textState", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});

export const changeTextState = selector({
  key: "changeTextState",
  get: ({ get }) => {
    const text = get(textState);
    return text.length;
  },
});

export const useCount = () => useRecoilValue(changeTextState);

export const setText = () => {
  const edit = useSetRecoilState(textState);
  return (text: string) => edit(text);
};

export const useText = () => useRecoilValue(textState);

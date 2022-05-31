import {atom, selector, useRecoilState, useRecoilValue} from "recoil";

const textState = atom({
    key: 'textState',
    default: '',
});

const textSizeState = selector({
    key: 'textSizeState',
    get: ({get}) => {
        const text = get(textState);

        return text.length;
    }
});

export const useTextState = () => {
    const [text, setText] = useRecoilState(textState);

    return {text, setText};
}

export const useTextSizeState = () => {
  const textSize = useRecoilValue(textSizeState);

  return {textSize};
}

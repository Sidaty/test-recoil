import {atom, selector, useRecoilState, useRecoilValue} from "recoil";

const fontSizeState = atom({
    key: 'fontSizeState',
    default: 20
});

const fontSizeLabelState = selector({
    key: 'fontSizeLabelState',
    get: ({get}) => {
        const fontSize = get(fontSizeState);

        return `${fontSize}px`;
    }
});

export const useFontSizeState = () => {
    const [fontSize, setFontSize] = useRecoilState(fontSizeState);

    const increment = () => {
        if (fontSize >= 35) return;
        setFontSize(fontSize + 1);
    }

    const decrement = () => {
        if (fontSize < 5) return;
        setFontSize(fontSize - 1);
    }

    return {
        fontSize, increment, decrement
    }
}

export const useFontSizeLabelState = () => {
    const fontSizeLabel = useRecoilValue(fontSizeLabelState);

    return {fontSizeLabel};
}
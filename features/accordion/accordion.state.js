import {atom, useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";


const accordionExpendedState = atom({
    key: 'accordionExpendedState',
    default: ''
});

export const useAccordionExpended = () => {
  return useRecoilState(accordionExpendedState);
}

export const useSetAccordionExpended = () => {
  return useSetRecoilState(accordionExpendedState);
}

export const useAccordionExpendedValue = () => {
  return useRecoilValue(accordionExpendedState);
}

import {atom, selector, useRecoilValue} from "recoil";

export const totoTextState = atom({
    key: 'totoTextState',
    default: ''
});

export const totoListState = atom({
    key: 'totoListState',
    default: []
});


export const TODO_LIST_FILTER = [
    'Tout',
    'Terminés',
    'Non-terminés'
];

export const todoListFilterState = atom({
    key: 'todoListFilterState',
    default: TODO_LIST_FILTER[0]
});

export const filteredTodoListState = selector({
    key: 'filteredTodoListState',
    get: ({get}) => {
        const todoList = get(totoListState);
        const filter = get(todoListFilterState);

        console.log({todoList, filter})

        switch (filter) {
            case TODO_LIST_FILTER[1]:
                return todoList.filter(({isComplete}) => isComplete);
            case TODO_LIST_FILTER[2]:
                return todoList.filter(({isComplete}) => !isComplete);
            default:
                return todoList;
        }
    }
});

export const todoListStatsState = selector({
    key: 'todoListStatsState',
    get: ({get}) => {
        const todoList = get(totoListState);

        const totalNum = todoList.length;
        const totalCompletedNum = todoList.filter(({isComplete}) => isComplete).length;
        const totalUncompletedNum = totalNum - totalCompletedNum;
        const percentCompleted = totalNum === 0 ? 0 : (totalCompletedNum / totalNum) * 100;

        return {
            totalNum,
            totalCompletedNum,
            totalUncompletedNum,
            percentCompleted
        }
    }
});
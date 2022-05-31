import {v4 as uuidv4} from "uuid";
import {useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";

import {todoListStatsState, todoListFilterState, totoListState, filteredTodoListState, totoTextState} from "./todo.state";

export const useTotoText = () => {
  return useRecoilState(totoTextState);
}

export const useTotoListState = () => {
    const [todoList, setTodoList] = useRecoilState(totoListState);

    return {
        todoList, setTodoList
    }
}

export const useTodoList = () => {
    const todoList = useRecoilValue(totoListState);

    return {todoList}
}

export const useAddTodo = () => {
    const setTodoList = useSetRecoilState(totoListState);

    return (todoItem) => {
        const id = uuidv4();
        setTodoList(todos => [...todos, {...todoItem, id}]);
    }
}

export const useUpdateTodo = () => {
    const setTodoList = useSetRecoilState(totoListState);

    return (todoItem) => {
        setTodoList(todos => {
            const index = todos.findIndex(({id}) => todoItem.id === id);
            console.log({todoItem});
            return replaceItemAt(todos, todoItem, index);
        });
    }
}

export const useDeleteTodo = () => {
    const setTodoList = useSetRecoilState(totoListState);

    return ({id}) => {
        setTodoList(todos => {
            const index = todos.findIndex(({id: _id}) => id === _id);
            return removeItemAt(todos, index);
        });
    }
}

export const useTodoListFilterState = () => {
    const [todoListFilter, setTodoListFilter] = useRecoilState(todoListFilterState);

    return {
        todoListFilter, setTodoListFilter
    }
}

export const useFilteredTodoListState = () => {
    return useRecoilValue(filteredTodoListState);
}

export const useTodoListStatsState = () => {
    return useRecoilValue(todoListStatsState);
}

function replaceItemAt(arr, item, index) {
    return [...arr.slice(0, index), item, ...arr.slice(index + 1)];
}

function removeItemAt(arr, index) {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
}

import React from 'react';
import {useFilteredTodoListState} from "../../features/todos/todo.service";
import TodoItemCreator from "../../features/todos/components/TodoItemCreator";
import TodoItem from "../../features/todos/components/TodoItem";
import TodoListFilters from "../../features/todos/components/TodoListFilters";
import TodoListStats from "../../features/todos/components/TodoListStats";
import {Box, Container, Stack} from "@mui/material";

function TodoListPage() {

    const todoList = useFilteredTodoListState();

    return (
        <Box>
            <TodoListStats/>
            <TodoListFilters/>
            <TodoItemCreator/>
            <Stack mt={2} spacing={1}>
                {todoList.map(todoItem => (
                    <TodoItem key={todoItem.id} todoItem={todoItem}/>
                ))}
            </Stack>
        </Box>
    );
}

export default TodoListPage;
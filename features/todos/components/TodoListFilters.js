import React from 'react';
import {useTodoListFilterState} from "../todo.service";
import {TODO_LIST_FILTER} from "../todo.state";
import {Box, MenuItem, Select, Typography} from "@mui/material";

function TodoListFilters() {

    const {todoListFilter, setTodoListFilter} = useTodoListFilterState();

    return (
        <Box mb={2} width={"100%"}>
            <Typography>Filtre :</Typography>
            <Select value={todoListFilter} onChange={({target: {value}}) => setTodoListFilter(value)}>
                {TODO_LIST_FILTER.map(filter => (
                    <MenuItem key={filter} value={filter}>{filter}</MenuItem>
                ))}
            </Select>
        </Box>
    );
}

export default TodoListFilters;
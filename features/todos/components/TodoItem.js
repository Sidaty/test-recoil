import React from 'react';
import {useDeleteTodo, useUpdateTodo} from "../todo.service";
import {Box, Checkbox, IconButton, TextField, Tooltip} from "@mui/material";
import {Delete} from "@mui/icons-material";

function TodoItem({todoItem}) {
    const updateTodo = useUpdateTodo();
    const deleteTodo = useDeleteTodo();

    const {todo, isComplete} = todoItem;

    const handleEditTodo = ({target: {value}}) => updateTodo({...todoItem, todo: value});
    const handleToggleTodo = ({target: {checked}}) => updateTodo({...todoItem, isComplete: checked});

    const handleDeleteTodo = () => deleteTodo(todoItem);

    return (
        <Box display={"flex"} alignItems={"center"}>
            <TextField fullWidth value={todo} onChange={handleEditTodo}/>
            <Tooltip title={"Terminé"}>
                <Checkbox checked={isComplete} onChange={handleToggleTodo}/>
            </Tooltip>
            <Tooltip title={"Supprimé"}>
                <IconButton onClick={handleDeleteTodo}>
                    <Delete sx={{color: "red"}}/>
                </IconButton>
            </Tooltip>
        </Box>
    );
}

export default TodoItem;
import React from 'react';
import {useAddTodo, useTotoText} from "../todo.service";
import {Box, Button, TextField} from "@mui/material";

function TodoItemCreator() {

    const addTodo = useAddTodo();
    const [todo, setTodo] = useTotoText('');

    const handleAddTodo = (e) => {
        e.preventDefault();

        if (todo.trim().length === 0) return;

        addTodo({todo, isComplete: false});
        setTodo('');
    }

    return (
        <Box>
            <form onSubmit={handleAddTodo}>
                <Box display={"flex"}>
                    <TextField fullWidth value={todo} onChange={({target: {value}}) => setTodo(value)}/>
                    <Button variant={"outlined"} sx={{ml: 2}}>Ajouter</Button>
                </Box>
            </form>
        </Box>
    );
}

export default TodoItemCreator;
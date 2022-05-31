import React from 'react';
import {useTodoListStatsState} from "../todo.service";
import {Box, Divider, Paper, Stack, Typography} from "@mui/material";

function TodoListStats() {

    const {
        totalNum,
        totalCompletedNum,
        totalUncompletedNum,
        percentCompleted
    } = useTodoListStatsState();

    const formattedPercentCompleted = Math.round(percentCompleted);

    return (
        <Paper variant={"outlined"} sx={{mt: 5, mb: 2}}>
            <Stack p={2} spacing={1}>
                <Typography variant={"h4"} gutterBottom>Statistiques</Typography>
                <Typography>Total: {totalNum}</Typography>
                <Divider/>
                <Typography>Terminés: {totalCompletedNum}</Typography>
                <Divider/>
                <Typography>Non-Terminés: {totalUncompletedNum}</Typography>
                <Divider/>
                <Typography>Pourcentage Terminés: {formattedPercentCompleted}</Typography>
            </Stack>
        </Paper>
    );
}

export default TodoListStats;
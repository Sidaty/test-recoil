import React from 'react';
import {Box, CircularProgress} from "@mui/material";

function CircularProgressBar() {
    return (
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"} m={"auto"}>
            <CircularProgress/>
        </Box>
    );
}

export default CircularProgressBar;
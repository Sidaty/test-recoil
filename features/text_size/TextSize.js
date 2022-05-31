import React from 'react';
import {useTextSizeState, useTextState} from "./text.state";
import {TextField, Typography} from "@mui/material";

function TextSize() {

    return (
        <div style={{paddingLeft: 20}}>
            <Typography variant={"h1"}>Test Recoil 2</Typography>
            <TextInput/>
            <TextOutput/>
            <TextSizeLabel/>
        </div>
    );
}

export default TextSize;


function TextInput() {
    const {setText, text} = useTextState();

    const handleChange = ({target: {value}}) => {
        setText(value);
    }

    return (
        <>
            <TextField fullWidth value={text} onChange={handleChange}/>
        </>
    );
}

function TextOutput() {
    const {text} = useTextState();

    return (
      <>
          <Typography>Valeur: {text}</Typography>
      </>
    );
}

function TextSizeLabel() {
    const {textSize} = useTextSizeState();

    return (
      <>
          <Typography>{textSize}</Typography>
      </>
    );
}

import React from 'react';
import {useCurrentUserEmail} from "../../users/user.service";
import {CircularProgress, Typography} from "@mui/material";
import {hasError, loading} from "../recoil.util";

function CurrentUserEmail() {

    const {state, contents} = useCurrentUserEmail();

    if (hasError(state)) return (<></>);

    if (loading(state)) return (
        <CircularProgress/>
    )

    const {email} = contents;

    return (
        <Typography>{email}</Typography>
    );
}

export default CurrentUserEmail;
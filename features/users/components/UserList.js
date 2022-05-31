import React from 'react';
import {useRefreshUserList, useSetCurrentUserId, useUserList} from "../user.service";
import {
    CircularProgress,
    IconButton,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Tooltip, Typography
} from "@mui/material";
import Link from "next/link";
import {Info, Refresh} from "@mui/icons-material";
import {hasError, loading} from "../../commons/recoil.util";

function UserList() {

    const {state, contents} = useUserList();
    const setCurrentUserId = useSetCurrentUserId();

    if (hasError(state)) return (
        <Typography>Erreur</Typography>
    );

    if (loading(state)) return (
        <CircularProgress/>
    )

    const users = contents.users;

    return (
        <Paper sx={{mt: 5}}>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell>Nom</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>

                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users?.map(user => (
                            <TableRow key={user.id} onClick={() => setCurrentUserId(user.id)}>
                                <TableCell>{user.id}</TableCell>
                                <TableCell>{user.name}</TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>
                                    <Tooltip title={"Detail"}>
                                        <IconButton>
                                            <Link href={`/users/${user.id}`}>
                                                <Info/>
                                            </Link>
                                        </IconButton>
                                    </Tooltip>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
}

export default UserList;
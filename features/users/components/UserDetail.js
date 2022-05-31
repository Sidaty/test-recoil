import React from 'react';
import {Avatar, Grid, Paper, Stack, Typography, Link as LinkMui, CircularProgress, Box} from "@mui/material";
import {useRouter} from "next/router";
import {useUserById} from "../user.service";
import Link from "next/link";
import {hasError, hasValue, loading} from "../../commons/recoil.util";

function UserDetail() {

    const {query: {userId}} = useRouter();
    const {state, contents} = useUserById(userId);

    if (hasError(state)) return (
        <Typography>Erreur</Typography>
    );

    if (loading(state)) return (
        <CircularProgress/>
    )

    const user = contents.user;

    return (
        <Paper variant={"outlined"} sx={{p: 2, mt: 5}}>
            <Typography variant={"h3"} gutterBottom>Detail utilisateur</Typography>
            <Avatar>
                <Typography>{userId}</Typography>
            </Avatar>

            <Box mt={4}/>

            <UserPersonalInfo user={user}/>

            <Grid container spacing={2} mt={1}>
                <Grid item xs={12} md={6}>
                    <UserAddress address={user.address}/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <UserCompany company={user.company}/>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default UserDetail;

function UserPersonalInfo({user}) {
    return (
        <Stack spacing={1}>
            <Typography>{user.name}</Typography>
            <Typography>{user.username}</Typography>
            <Typography>{user.email}</Typography>
            <Typography>{user.phone}</Typography>
            <LinkMui component={Link} href={`https://${user.website}`}>{user.website}</LinkMui>
        </Stack>
    );
}

function UserAddress({address}) {
    return (
        <DetailItemCard title={"Addresse"}>
            <Stack spacing={0.5}>
                <Typography>{address.city}</Typography>
                <Typography>{address.street}</Typography>
                <Typography>{address.suite}</Typography>
                <Typography>{address.zipcode}</Typography>
            </Stack>
        </DetailItemCard>
    );
}

function UserCompany({company}) {
    return (
        <DetailItemCard title={"Societé"}>
            <Stack spacing={0.5}>
                <Typography>{company.name}</Typography>
                <Typography>{company.bs}</Typography>
                <Typography>{company.catchPhrase}</Typography>
            </Stack>
        </DetailItemCard>
    );
}

function DetailItemCard({title, children}) {
    return (
        <Paper
            variant={"outlined"}
            sx={{
                p: 2, height: '100%',
                "&hover": {
                    color: "blue"
                }
            }}>
            <Typography variant={"h5"} gutterBottom>{title}</Typography>
            {children}
        </Paper>
    );
}
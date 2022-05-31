import React from 'react';
import {TextField} from "@mui/material";
import {useRecoilState} from "recoil";
import {postSearchState} from "../posts.state";

function SearchPost() {

    const [search, setSearch] = useRecoilState(postSearchState);

    return (
        <TextField
            value={search}
            sx={{width: {xs: 300, md: 500}}}
            onChange={({target: {value}}) => setSearch(value)}
        />
    );
}

export default SearchPost;
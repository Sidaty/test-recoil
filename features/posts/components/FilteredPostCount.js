import React from 'react';
import {Avatar, Box} from "@mui/material";
import {useRecoilValue} from "recoil";
import {filteredPostsCountState} from "../posts.state";

function FilteredPostCount() {

    const nb = useRecoilValue(filteredPostsCountState);

    return (
        <Avatar>
            {nb}
        </Avatar>
    );
}

export default FilteredPostCount;
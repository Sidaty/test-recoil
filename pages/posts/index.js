import React, {useEffect} from 'react';
import {Box, Paper, Typography, useScrollTrigger} from "@mui/material";
import {useRecoilState} from "recoil";
import {postsListState} from "../../features/posts/posts.state";
import PostListPage from "../../features/posts/components/PostListPage";
import FilteredPostCount from "../../features/posts/components/FilteredPostCount";
import SearchPost from "../../features/posts/components/SearchPost";

function PostsPage() {

    const [posts, setPosts] = useRecoilState(postsListState);

    // const trigger = useScrollTrigger({
    //     disableHysteresis: true,
    //     threshold: 100,
    // });

    // console.log({trigger});

    useEffect(() => {
        if (posts.length > 0) return;
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(posts => setPosts(posts))
    }, []);

    return (
        <Box>
            <Typography variant={"h1"}>
                La list des posts
            </Typography>

            {/*{trigger}*/}

            <Paper variant={"outlined"} sx={{mt: 4}}>
                <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} p={2}>
                    <SearchPost/>
                    <FilteredPostCount/>
                </Box>

                <PostListPage/>
            </Paper>
        </Box>
    );
}

export default PostsPage;
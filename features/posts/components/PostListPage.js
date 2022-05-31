import React from 'react';
import {Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material";
import {useRecoilValue} from "recoil";
import {filteredPostsState} from "../posts.state";

function PostListPage() {

    const filteredPosts = useRecoilValue(filteredPostsState);

    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>User Id</TableCell>
                    <TableCell>Titre</TableCell>
                    <TableCell>Contenu</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {filteredPosts.map(post => (
                    <TableRow key={post.id}>
                        <TableCell>{post.id}</TableCell>
                        <TableCell>{post.userId}</TableCell>
                        <TableCell>{post.title}</TableCell>
                        <TableCell>{post.body}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}

export default PostListPage;
import React from "react";
import styled from "styled-components"
import Post from "../Post/Post";
import PostFormContainer from "../PostForm/PostFormContainer";

export default function Newsfeed({posts}) {
    return <NewsfeedStyle>
        <PostFormContainer/>
        {posts.map(post => <Post key={`nf-post-${post.id}`} post={post}/>)}
    </NewsfeedStyle>
}

const NewsfeedStyle = styled.div`
    margin: 1rem auto;
    padding: 0 1rem;
    max-width: 50rem;
`
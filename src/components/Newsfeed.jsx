import React, {useState} from "react";
import PostForm from "./PostForm";
import styled from "styled-components"
import Post from "./Post";

export default function Newsfeed() {
    const [posts, updatePosts] = useState([])

    return <NewsfeedStyle>
        <PostForm onPost={(newPost) => updatePosts([...posts, newPost])}/>
        {posts.map((post, index) => <Post key={`nf-post-${index}`} postText={post}/>)}
    </NewsfeedStyle>
}

const NewsfeedStyle = styled.div`
    margin: 1rem auto;
    padding: 0 1rem;
    max-width: 50rem;
`
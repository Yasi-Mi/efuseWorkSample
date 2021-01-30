import React, {useState} from "react";
import PostForm from "./PostForm";
import styled from "styled-components"

export default function Newsfeed() {
    const [posts, updatePosts] = useState([])

    return <NewsfeedStyle>
        <PostForm onPost={(newPost) => {
            const newPosts = [...posts, newPost];
            updatePosts([...posts, newPost])
        }}/>
        {posts.map((post, index) => <div key={`nf-post-${index}`}>{post}</div>)}
    </NewsfeedStyle>
}

const NewsfeedStyle = styled.div`
    margin: 1rem auto;
    padding: 0 1rem;
    max-width: 50rem;
`
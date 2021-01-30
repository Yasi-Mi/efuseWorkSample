import React from "react";
import PostForm from "./PostForm";
import styled from "styled-components"

export default function Newsfeed() {
    return <NewsfeedStyle>
        <PostForm/>
    </NewsfeedStyle>
}

const NewsfeedStyle = styled.div`
    margin: 1rem auto;
    padding: 0 1rem;
    max-width: 50rem;
`
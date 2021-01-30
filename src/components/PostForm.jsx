import React, {useState} from "react";
import logo from "../image (23).png";
import styled from "styled-components"
import {
    borderGray,
    placeholderTextColor,
    primaryButtonColor,
    primaryButtonHover,
    primaryButtonTextColor,
    primaryTextColor
} from "../colors";

export default function PostForm({onPost}) {
    const [text, updateText] = useState("");

    return <PostFormStyle>
        <FlexArea>
            <AvatarFlex><Avatar src={logo} alt="avatar"/></AvatarFlex>
            <TextArea placeholder={"What is on your mind?"} onChange={(event) => updateText(event.target.value)}/>
        </FlexArea>
        <ButtonArea>
            <PostButton onClick={() => text && onPost(text)}>Post It</PostButton>
        </ButtonArea>
    </PostFormStyle>
}

const FlexArea = styled.div`
    display: flex;
    border-bottom: 1px solid ${borderGray};
    padding: 1rem;
`

const AvatarFlex = styled.div`
    flex-grow: 1;
`

const ButtonArea = styled.div`
    text-align: right;
    padding: 1rem;
`

const Avatar = styled.img`
    object-fit: cover;
    height: 4rem;
    width: 4rem;
    margin: 0 1rem;
    border-radius: 4rem;
    border: 1px solid black;
`
const PostFormStyle = styled.div`
    background-color: #ffffff;
    border-radius: 1rem;
    filter: drop-shadow(0 2px 2px #333333);
    flex-grow: 4;
`

const TextArea = styled.textarea`
    border: none;
    resize: none;
    padding: 1.3rem 0;
    outline: none;
    color: ${primaryTextColor};
    font-weight: bold;
    width: 90%;
    min-height: 7rem;
    font-size: 1.4rem;
    
    ::placeholder {
        color: ${placeholderTextColor}
    }
`
TextArea.displayName = "TextArea";

const PostButton = styled.button`
    border: none;
    border-radius: 0.5rem;
    background-color: ${primaryButtonColor};
    color: ${primaryButtonTextColor};
    outline: none;
    height: 3rem;
    width: 6rem;
    font-size: 1.2rem;
    
    :hover {
        background-color: ${primaryButtonHover};
    }
`
PostButton.displayName = "PostButton"
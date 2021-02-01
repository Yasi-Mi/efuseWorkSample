import React, {useState} from "react";
import styled from "styled-components"
import {
    secondaryTextColor,
    primaryButtonColor,
    primaryButtonHover,
    primaryButtonTextColor,
    primaryTextColor
} from "../../sharedStyles/colors";
import {
    Avatar,
    AvatarFlex,
    NewsfeedCard,
    NewsfeedCardContentHeading,
    NewsfeedCardContentTop
} from "../../sharedStyles/StyledComponents";

export default function PostForm({avatar, onPost}) {
    const [text, setText] = useState("");

    const updateText = (event) => {
        setText(event.target.value)
    };

    const postForm = () => {
        text && onPost(text)
        setText("")
    }

    return <NewsfeedCard>
        <NewsfeedCardContentTop>
            <NewsfeedCardContentHeading>
                <AvatarFlex><Avatar src={`avatars/${avatar}`} alt="avatar"/></AvatarFlex>
                <TextArea value={text} placeholder={"What is on your mind?"} onChange={updateText}/>
            </NewsfeedCardContentHeading>
        </NewsfeedCardContentTop>
        <ButtonArea>
            <PostButton onClick={postForm}>Post It</PostButton>
        </ButtonArea>
    </NewsfeedCard>
}

const ButtonArea = styled.div`
    text-align: right;
    padding: 1rem;
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
        color: ${secondaryTextColor}
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
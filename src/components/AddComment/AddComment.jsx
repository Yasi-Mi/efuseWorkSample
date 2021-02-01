import React, {useState} from "react";
import moment from "moment";
import {AvatarSmall} from "../../sharedStyles/StyledComponents";
import styled from "styled-components"
import {primaryTextColor, secondaryTextColor} from "../../sharedStyles/colors";

const ENTER_KEY_CODE = 13

export default function AddComment({onPostComment, avatar}) {
    const [text, setText] = useState("")

    const onInputChange = event => {
        setText(event.target.value)
    }

    const onKeypress = event => {
        if (event.charCode === ENTER_KEY_CODE) {
            onPostComment(text, moment().toISOString())
            setText("")
        }
    };

    return <AddCommentContainer>
        <div><AvatarSmall src={`avatars/${avatar}`}/></div>
        <AddCommentInput value={text} onChange={onInputChange} onKeyPress={onKeypress}/>
    </AddCommentContainer>
}

const AddCommentContainer = styled.div`
    display: flex;
    margin: 1rem 0;
`

const AddCommentInput = styled.input`
    height: 2rem;
    margin: .5rem;
    border-radius: 1rem;
    outline: none;
    padding: 0 .5rem;
    color: ${primaryTextColor};
    border: 1px solid ${secondaryTextColor};
    width: 85%;
`
AddCommentInput.displayName = "AddCommentInput"

import React, {useState} from "react";
import moment from "moment";
import styled from "styled-components"
import {primaryTextColor, secondaryTextColor} from "../../sharedComponents/colors";
import {ENTER_KEY_CODE} from "../constants";
import {AvatarSmall} from "../../sharedComponents/Avatar";

export default function AddComment({onComment, avatar}) {
    const [text, setText] = useState("")

    const onInputChange = event => {
        setText(event.target.value)
    }

    const onKeypress = event => {
        if (event.charCode === ENTER_KEY_CODE && text) {
            onComment(text, moment().toISOString())
            setText("")
        }
    };

    return <AddCommentContainer>
        <div><AvatarSmall image={avatar}/></div>
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

import React, {useState} from "react"
import styled from "styled-components"
import {ReactionCount} from "../../sharedComponents/StyledComponents";
import {blueTextColor, commentBackground, primaryTextColor, secondaryTextColor} from "../../sharedComponents/colors";
import PostedTimeFormatted from "../../sharedComponents/PostedTimeFormatting/PostedTimeFormatted";
import {faHeart, faPencilAlt, faTrash} from "@fortawesome/free-solid-svg-icons"
import {ENTER_KEY_CODE} from "../constants";
import {AvatarSmall} from "../../sharedComponents/Avatar";
import {InteractButton} from "../../sharedComponents/InteractButton";

export default function Comment({comment, onLike, onEdit, onDelete}) {
    const [newContent, setNewContent] = useState(comment.content)
    const [editMode, setEditMode] = useState(false)

    const onEditClick = () => {
        setEditMode(!editMode)
        setNewContent(comment.content)
    }

    const onEditCommentChange = event => {
        setNewContent(event.target.value);
    }

    const onKeypress = event => {
        if (event.charCode === ENTER_KEY_CODE && editMode && newContent) {
            onEdit(newContent)
            setEditMode(false)
        }
    };

    return <CommentStyle>
        <AvatarMargin>
            <AvatarSmall image={comment.userAvatar}/>
        </AvatarMargin>
        <CommentBox>
            <CommentHeader>
                <div>
                    <Name>{comment.username}</Name>
                    <Occupation>{comment.occupation}</Occupation>
                </div>
                <CommentTimeStyle><PostedTimeFormatted postedTime={comment.postedTime}/></CommentTimeStyle>
            </CommentHeader>
            {editMode ?
                <EditCommentInput value={newContent} onChange={onEditCommentChange} onKeyPress={onKeypress}/> :
                <CommentContent>{comment.content}</CommentContent> }
            <CommentActions>
                <ReactionCount count={comment.likes}>{comment.likes} Likes </ReactionCount> |
                <InteractButton onClick={onLike} icon={faHeart} text="Like"/> |
                <InteractButton onClick={onEditClick} icon={faPencilAlt} text="Edit"/> |
                <InteractButton onClick={onDelete} icon={faTrash} text="Delete"/>
            </CommentActions>
        </CommentBox>
    </CommentStyle>
}

const EditCommentInput = styled.input`
    outline: none;
    border: none;
    border-radius: 1rem;
    padding: 0.5rem;
`;
EditCommentInput.displayName = "EditCommentInput"

const CommentActions = styled.div`
    color: ${secondaryTextColor};
    font-size: 0.8rem;
`

const AvatarMargin = styled.div`
    margin-top: 2rem;
`

const CommentHeader = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Name = styled.div`
    color: ${primaryTextColor};
    font-weight: bold;
`

const Occupation = styled.div`
    color: ${blueTextColor};
    font-size: 0.8rem;
`

const CommentTimeStyle = styled.div`
    color: ${secondaryTextColor};
    text-align: right;
    font-size: 0.6rem;
`

const CommentStyle = styled.div`
    margin: 1rem 0;
    display: flex;
`;

const CommentContent = styled.div`
    color: ${primaryTextColor};
`

const CommentBox = styled.div`
    background-color: ${commentBackground};
    width: 85%;
    border-radius: .5rem;
    padding: 1rem;
`
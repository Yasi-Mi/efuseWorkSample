import React, {useState} from "react"
import styled from "styled-components"
import {AvatarSmall, PostActionButton, ReactionCount} from "../../sharedComponents/StyledComponents";
import {blueTextColor, commentBackground, primaryTextColor, secondaryTextColor} from "../../sharedComponents/colors";
import PostedTimeFormatted from "../../sharedComponents/PostedTimeFormatting/PostedTimeFormatted";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHeart, faPencilAlt, faTrash} from "@fortawesome/free-solid-svg-icons"
import {ENTER_KEY_CODE} from "../constants";

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
            <AvatarSmall src={`avatars/${comment.userAvatar}`}/>
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
                <PostActionButton onClick={onLike}><FontAwesomeIcon icon={faHeart}/> Like </PostActionButton> |
                <PostActionButton onClick={onEditClick}><FontAwesomeIcon icon={faPencilAlt}/> Edit </PostActionButton> |
                <PostActionButton onClick={onDelete}><FontAwesomeIcon icon={faTrash}/> Delete</PostActionButton>
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
    color: ${blueTextColor}
`

const CommentTimeStyle = styled.div`
    color: ${secondaryTextColor};
    text-align: right;
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
    margin: .5rem;
    border-radius: .5rem;
    padding: 1rem;
`
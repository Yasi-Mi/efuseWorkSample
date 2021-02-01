import React from "react"
import styled from "styled-components"
import {AvatarSmall, PostActionButton, ReactionCount} from "../../sharedComponents/StyledComponents";
import {blueTextColor, commentBackground, primaryTextColor, secondaryTextColor} from "../../sharedComponents/colors";
import PostedTimeFormatted from "../../sharedComponents/PostedTimeFormatting/PostedTimeFormatted";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHeart, faPencilAlt, faTrash} from "@fortawesome/free-solid-svg-icons"

export default function Comment({comment}) {
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
            <CommentContent>{comment.content}</CommentContent>
            <CommentActions>
                <ReactionCount count={comment.likes}>{comment.likes} Likes </ReactionCount> |
                <PostActionButton><FontAwesomeIcon icon={faHeart}/> Like </PostActionButton> |
                <PostActionButton><FontAwesomeIcon icon={faPencilAlt}/> Edit </PostActionButton> |
                <PostActionButton><FontAwesomeIcon icon={faTrash}/> Delete</PostActionButton>
            </CommentActions>
        </CommentBox>
    </CommentStyle>
}

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
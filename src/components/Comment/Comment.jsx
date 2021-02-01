import React from "react"
import styled from "styled-components"
import {AvatarSmall} from "../../sharedComponents/StyledComponents";
import {blueTextColor, commentBackground, primaryTextColor, secondaryTextColor} from "../../sharedComponents/colors";
import PostedTimeFormatted from "../../sharedComponents/PostedTimeFormatting/PostedTimeFormatted";

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
            </CommentActions>
        </CommentBox>
    </CommentStyle>
}

const CommentActions = styled.div`
    display: flex;
    color: ${secondaryTextColor}
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
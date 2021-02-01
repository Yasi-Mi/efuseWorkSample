import React from "react"
import styled from "styled-components"
import {AvatarSmall} from "../../sharedStyles/StyledComponents";
import {blueTextColor, commentBackground, primaryTextColor, secondaryTextColor} from "../../sharedStyles/colors";
import moment from "moment";

export default function Comment({comment}) {
    const minutesDiff = moment().diff(comment.postedTime, "minutes")

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
                <CommentTime>{minutesDiff} {minutesDiff === 1 ? "minute" : "minutes"} ago</CommentTime>
            </CommentHeader>
            <CommentContent>{comment.content}</CommentContent>
        </CommentBox>
    </CommentStyle>
}

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

const CommentTime = styled.div`
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
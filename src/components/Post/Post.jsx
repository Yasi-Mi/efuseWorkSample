import React from "react";
import styled from "styled-components"
import {
    Avatar,
    NewsfeedCard,
    NewsfeedCardContentHeading,
    NewsfeedCardContentTop, ReactionCount
} from "../../sharedComponents/StyledComponents";
import {
    blueTextColor,
    primaryTextColor,
    secondaryTextColor
} from "../../sharedComponents/colors";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'
import CommentSectionContainer from "../CommentSection/CommentSectionContainer";
import PostedTimeFormatted from "../../sharedComponents/PostedTimeFormatting/PostedTimeFormatted";

export default function Post({post}) {
    return <NewsfeedCard>
        <NewsfeedCardContentTop>
            <NewsfeedCardContentHeading>
                <Avatar src={`avatars/${post.userAvatar}`} alt="avatar"/>
                <div>
                    <Name>Yasi Minachi</Name>
                    <Location><FontAwesomeIcon icon={faMapMarkerAlt}/> {post.location}</Location>
                    <TimePostedStyle><PostedTimeFormatted postedTime={post.postedTime}/></TimePostedStyle>
                </div>
            </NewsfeedCardContentHeading>
            <PostText>{post.content}</PostText>
            <div>
                <ReactionCount count={post.likes}>{post.likes} Likes</ReactionCount>
                <span>&nbsp;&#8226;&nbsp;</span>
                <ReactionCount count={post.comments.length}>{post.comments.length} Comments</ReactionCount>
            </div>
        </NewsfeedCardContentTop>
        <CommentSectionContainer comments={post.comments} postID={post.id}/>
    </NewsfeedCard>
}

const PostText = styled.div`
    color: ${primaryTextColor};
    font-size: 1.2rem;
    margin-top: 1rem;
`;

const Name = styled.div`
    color: ${primaryTextColor};
    font-size: 1rem;
    font-weight: bold;
`;

const Location = styled.div`
    color: ${blueTextColor};
    font-size: 1rem;
    font-weight: bold;
`;

const TimePostedStyle = styled.div`
    color: ${secondaryTextColor};
    font-size: 0.8rem;
`;
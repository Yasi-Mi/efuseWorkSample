import React from "react";
import styled from "styled-components"
import {
    Avatar,
    NewsfeedCard,
    NewsfeedCardContentHeading,
    NewsfeedCardContentTop
} from "../../sharedStyles/StyledComponents";
import {
    grayedOutTextColor,
    locationTextColor,
    primaryTextColor,
    secondaryTextColor
} from "../../sharedStyles/colors";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import CommentSectionContainer from "../CommentSection/CommentSectionContainer";

export default function Post({post}) {
    return <NewsfeedCard>
        <NewsfeedCardContentTop>
            <NewsfeedCardContentHeading>
                <Avatar src={`avatars/${post.userAvatar}`} alt="avatar"/>
                <div>
                    <Name>Yasi Minachi</Name>
                    <Location><FontAwesomeIcon icon={faMapMarkerAlt}/> {post.location}</Location>
                    <TimePosted>1 minute ago</TimePosted>
                </div>
            </NewsfeedCardContentHeading>
            <PostText>{post.content}</PostText>
            <div>
                <span style={{color: post.likes > 0 ? secondaryTextColor : grayedOutTextColor}}>{post.likes} Likes</span>
                <span>&nbsp;&#8226;&nbsp;</span>
                <span style={{color: grayedOutTextColor}}>0 Comments</span>
            </div>
        </NewsfeedCardContentTop>
        <CommentSectionContainer postID={post.id}/>
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
    color: ${locationTextColor};
    font-size: 1rem;
    font-weight: bold;
`;

const TimePosted = styled.div`
    color: ${secondaryTextColor};
    font-size: 0.8rem;
`;
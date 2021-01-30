import React, {useState} from "react";
import styled from "styled-components"
import logo from "../image (23).png";
import {
    Avatar,
    NewsfeedCard,
    NewsfeedCardContentHeading,
    NewsfeedCardContentTop
} from "../sharedStyles/StyledComponents";
import {
    commentSectionBackground,
    grayedOutTextColor,
    locationTextColor,
    primaryTextColor,
    secondaryTextColor
} from "../sharedStyles/colors";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faHeart, faCommentDots } from '@fortawesome/free-solid-svg-icons'

export default function Post({postText}) {
    const [likes, setLikes] = useState(0);

    return <NewsfeedCard>
        <NewsfeedCardContentTop>
            <NewsfeedCardContentHeading>
                <Avatar src={logo} alt="avatar"/>
                <div>
                    <Name>Yasi Minachi</Name>
                    <Location><FontAwesomeIcon icon={faMapMarkerAlt}/> OH, USA</Location>
                    <TimePosted>1 minute ago</TimePosted>
                </div>
            </NewsfeedCardContentHeading>
            <PostText>{postText}</PostText>
            <div>
                <span style={{color: likes > 0 ? secondaryTextColor : grayedOutTextColor}}>{likes} Likes</span>
                <span>&nbsp;&#8226;&nbsp;</span>
                <span style={{color: grayedOutTextColor}}>0 Comments</span>
            </div>
        </NewsfeedCardContentTop>
        <CommentSection>
            <LikeAndComment>
                <LikeCommentItem onClick={() => {setLikes(likes + 1)}}><FontAwesomeIcon icon={faHeart}/> Like</LikeCommentItem>
                <LikeCommentItem><FontAwesomeIcon icon={faCommentDots}/> Comment</LikeCommentItem>
            </LikeAndComment>
        </CommentSection>
    </NewsfeedCard>
}

const LikeAndComment = styled.div`
    color: ${secondaryTextColor};
    font-size: 1rem;
    font-weight: bold;
    display: flex;
`;

const LikeCommentItem = styled.button`
    margin-right: 1rem;
    background: transparent;
    border: none;
    outline: none;
    color: ${secondaryTextColor};
    font-size: 1rem;
    
    :hover {
        color: ${primaryTextColor}
    }
`;
LikeCommentItem.displayName = "LikeCommentItem";

const CommentSection = styled.div`
    padding: 1rem 2rem;
    background-color: ${commentSectionBackground};
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
`

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
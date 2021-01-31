import React, {useState} from "react";
import styled from "styled-components"
import logo from "../../image (23).png";
import {
    Avatar,
    NewsfeedCard,
    NewsfeedCardContentHeading,
    NewsfeedCardContentTop
} from "../../sharedStyles/StyledComponents";
import {
    commentSectionBackground,
    grayedOutTextColor,
    locationTextColor,
    primaryTextColor,
    secondaryTextColor
} from "../../sharedStyles/colors";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faHeart, faCommentDots } from '@fortawesome/free-solid-svg-icons'
import LikeCommentSection from "../LikeCommentSection/LikeCommentSection";

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
        <LikeCommentSection onLike={() => {setLikes(likes + 1)}}/>
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
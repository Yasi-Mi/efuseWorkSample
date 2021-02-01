import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCommentDots, faHeart} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import {commentSectionBackground, primaryTextColor, secondaryTextColor} from "../../sharedStyles/colors";

export default function CommentSection({onLike}) {
    return <LikeCommentSectionStyle>
        <LikeCommentButtons>
            <LikeCommentButton onClick={onLike}><FontAwesomeIcon icon={faHeart}/> Like</LikeCommentButton>
            <LikeCommentButton><FontAwesomeIcon icon={faCommentDots}/> Comment</LikeCommentButton>
        </LikeCommentButtons>
    </LikeCommentSectionStyle>
}

const LikeCommentSectionStyle = styled.div`
    padding: 1rem 2rem;
    background-color: ${commentSectionBackground};
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
`

const LikeCommentButtons = styled.div`
    color: ${secondaryTextColor};
    font-size: 1rem;
    font-weight: bold;
    display: flex;
`;

const LikeCommentButton = styled.button`
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
LikeCommentButton.displayName = "LikeCommentButton";
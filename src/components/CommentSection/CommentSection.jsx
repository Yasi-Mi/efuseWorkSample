import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCommentDots, faHeart} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import {commentSectionBackground, secondaryTextColor} from "../../sharedComponents/colors";
import AddCommentContainer from "../AddComment/AddCommentContainer";
import {PostActionButton} from "../../sharedComponents/StyledComponents";
import CommentContainer from "../Comment/CommentContainer";

export default function CommentSection({onLike, comments, postID}) {
    const [addCommentExpanded, setAddCommentExpanded] = useState(false);

    const onCommentClick = () => {
        setAddCommentExpanded(!addCommentExpanded)
    }

    return <LikeCommentSectionStyle>
        <LikeCommentButtons>
            <PostActionButton onClick={onLike}><FontAwesomeIcon icon={faHeart}/> Like</PostActionButton>
            <PostActionButton onClick={onCommentClick}><FontAwesomeIcon icon={faCommentDots}/> Comment</PostActionButton>
        </LikeCommentButtons>
        {addCommentExpanded && <AddCommentContainer postID={postID}/>}
        {comments.map(comment => <CommentContainer key={`comment-${comment.id}`} comment={comment} postID={postID}/>)}
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
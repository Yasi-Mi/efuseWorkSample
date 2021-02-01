import React, {useState} from "react";
import {faCommentDots, faHeart} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import {commentSectionBackground, secondaryTextColor} from "../../sharedComponents/colors";
import CommentContainer from "../Comment/CommentContainer";
import AddComment from "../AddComment/AddComment";
import {InteractButton} from "../../sharedComponents/InteractButton";

export default function CommentSection({onLike, onComment, avatar, comments, postID}) {
    const [addCommentExpanded, setAddCommentExpanded] = useState(false);

    const onCommentClick = () => {
        setAddCommentExpanded(!addCommentExpanded)
    }

    const onPostComment = (content, postedTime) => {
        setAddCommentExpanded(false);
        onComment(content, postedTime)
    }

    return <LikeCommentSectionStyle>
        <LikeCommentButtons>
            <InteractButton onClick={onLike} icon={faHeart} text="Like"/>
            <InteractButton onClick={onCommentClick} icon={faCommentDots} text="Comment"/>
        </LikeCommentButtons>
        {addCommentExpanded && <AddComment onComment={onPostComment} avatar={avatar}/>}
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
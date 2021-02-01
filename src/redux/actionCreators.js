import {
    ADD_COMMENT_ACTION_TYPE,
    ADD_POST_ACTION_TYPE, DELETE_COMMENT_ACTION_TYPE, EDIT_COMMENT_ACTION_TYPE,
    LIKE_COMMENT_ACTION_TYPE,
    LIKE_POST_ACTION_TYPE
} from "./actionTypes";

export function addPostAction(content, postedTime) {
    return {
        type: ADD_POST_ACTION_TYPE,
        payload: {content, postedTime}
    }
}

export function likePostAction(postID) {
    return {
        type: LIKE_POST_ACTION_TYPE,
        payload: {postID}
    }
}

export function addCommentAction(postID, content, postedTime) {
    return {
        type: ADD_COMMENT_ACTION_TYPE,
        payload: {postID, content, postedTime}
    }
}

export function likeCommentAction(postID, commentID) {
    return {
        type: LIKE_COMMENT_ACTION_TYPE,
        payload: {postID, commentID}
    }
}

export function editCommentAction(postID, commentID, newContent) {
    return {
        type: EDIT_COMMENT_ACTION_TYPE,
        payload: {postID, commentID, newContent}
    }
}

export function deleteCommentAction(postID, commentID) {
    return {
        type: DELETE_COMMENT_ACTION_TYPE,
        payload: {postID, commentID}
    }
}
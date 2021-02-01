import {ADD_COMMENT_ACTION_TYPE, ADD_POST_ACTION_TYPE, LIKE_POST_ACTION_TYPE} from "./actionTypes";

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
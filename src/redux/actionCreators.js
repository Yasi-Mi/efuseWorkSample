import {ADD_POST_ACTION_TYPE, LIKE_POST_ACTION} from "./actionTypes";

export function addPostAction(content, postedTime) {
    return {
        type: ADD_POST_ACTION_TYPE,
        payload: {content, postedTime}
    }
}

export function likePostAction(postID) {
    return {
        type: LIKE_POST_ACTION,
        payload: {postID}
    }
}
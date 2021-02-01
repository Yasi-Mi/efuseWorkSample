import {ADD_POST_ACTION_TYPE, LIKE_POST_ACTION} from "./actionTypes";
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    currentUser: {
        name: "Yasi Minachi",
        avatar: "image (23).png",
        occupation: "Software Developer"
    },
    currentLocation: "OH, USA",
    posts: []
}

export function newsfeedReducer(state = initialState, action) {
    switch(action.type) {
        case ADD_POST_ACTION_TYPE:
            const newPost = {
                id: uuidv4(),
                content: action.payload.content,
                postedTime: action.payload.postedTime,
                username: state.currentUser.name,
                userAvatar: state.currentUser.avatar,
                location: state.currentLocation,
                likes: 0,
                comments: []
            }
            return {...state, ...{posts: [...state.posts, newPost]}}
        case LIKE_POST_ACTION:
            const updatedPosts = state.posts.map(post => {
                return post.id === action.payload.postID ? {...post, ...{likes: post.likes + 1}} : post
            })

            return {...state, ...{posts: updatedPosts}};
        default:
            return state
    }
}
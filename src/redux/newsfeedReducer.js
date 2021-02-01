import {
    ADD_COMMENT_ACTION_TYPE,
    ADD_POST_ACTION_TYPE, DELETE_COMMENT_ACTION_TYPE, EDIT_COMMENT_ACTION_TYPE,
    LIKE_COMMENT_ACTION_TYPE,
    LIKE_POST_ACTION_TYPE
} from "./actionTypes";
import {v4 as uuidv4} from 'uuid';

const initialState = {
    currentUser: {
        name: "Yasi Minachi",
        avatar: "yasi-avatar.png",
        occupation: "Software Developer"
    },
    currentLocation: "OH, USA",
    posts: []
}

export function newsfeedReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_POST_ACTION_TYPE:
            const newPost = {
                id: uuidv4(),
                content: action.payload.content,
                postedTime: action.payload.postedTime,
                username: state.currentUser.name,
                userAvatar: state.currentUser.avatar,
                location: state.currentLocation,
                likes: 0,
                comments: [],
            }
            return {...state, ...{posts: [...state.posts, newPost]}}
        case LIKE_POST_ACTION_TYPE:
            return updatePost(state, action.payload.postID, (post) => {
                return {...post, ...{likes: post.likes + 1}}
            });
        case ADD_COMMENT_ACTION_TYPE:
            const newComment = {
                id: uuidv4(),
                content: action.payload.content,
                postedTime: action.payload.postedTime,
                username: state.currentUser.name,
                userAvatar: state.currentUser.avatar,
                occupation: state.currentUser.occupation,
                likes: 0,
            };
            return updatePost(state, action.payload.postID, post => {
                return {...post, ...{comments: [...post.comments, newComment]}}
            });
        case LIKE_COMMENT_ACTION_TYPE: {
            return updateComment(state, action.payload.postID, action.payload.commentID, comment => {
                return {...comment, ...{likes: comment.likes + 1}}
            })
        }
        case EDIT_COMMENT_ACTION_TYPE: {
            return updateComment(state, action.payload.postID, action.payload.commentID, comment => {
                return {...comment, ...{content: action.payload.newContent}}
            })
        }
        case DELETE_COMMENT_ACTION_TYPE: {
            return updatePost(state, action.payload.postID, post => {
                return {...post, ...{comments: post.comments.filter(comment => comment.id !== action.payload.commentID)}}
            })
        }
        default:
            return state
    }
}

function updatePost(state, postID, edit) {
    const updatedPosts = state.posts.map(post => {
        return post.id === postID ? edit(post) : post
    })
    return {...state, ...{posts: updatedPosts}};
}

function updateComment(state, postID, commentID, edit) {
    return updatePost(state, postID, post => {
        return {...post, ...{comments:
                post.comments.map(comment => {
                    return comment.id === commentID ? edit(comment) : comment
                })
            }
        }
    });
}
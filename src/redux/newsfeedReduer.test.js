import {newsfeedReducer} from "./newsfeedReducer";
import {ADD_POST_ACTION_TYPE, LIKE_POST_ACTION} from "./actionTypes";

describe("newsfeedReducer", () => {

    const oldState = {
        currentUser: {
            name: "this guy",
            avatar: "thisguy.png"
        },
        currentLocation: "Antarctica",
        posts: [
            {
                id: "A",
                content: "something",
                likes: 1
            },
            {
                id: "B",
                content: "something else",
                likes: 1
            }
        ]
    }

    let newState;

    describe("add a post", () => {
        const action = {
            type: ADD_POST_ACTION_TYPE,
            payload: {
                content: "HELLO WORLD",
                postedTime: "2020-10-10"
            }
        }

        beforeEach(() => {
            newState = newsfeedReducer(oldState, action)
        })

        it("adds a new post with provided information", () => {
            expect(newState.posts.length).toEqual(3);
            expect(newState.posts[2].content).toEqual("HELLO WORLD");
            expect(newState.posts[2].postedTime).toEqual("2020-10-10");
        });

        it("adds information about the user to the post", () => {
            expect(newState.posts[2].username).toEqual("this guy");
            expect(newState.posts[2].userAvatar).toEqual("thisguy.png");
            expect(newState.posts[2].location).toEqual("Antarctica");
        })
    });

    describe("like a post", () => {
        const action = {
            type: LIKE_POST_ACTION,
            payload: {
                postID: "B"
            }
        }

        beforeEach(() => {
            newState = newsfeedReducer(oldState, action);
        })

        it("increments the like of the post", () => {
            expect(newState.posts[1].likes).toEqual(2);
        })

        it("does not increment other posts", () => {
            expect(newState.posts[0].likes).toEqual(1);
        })
    })
});
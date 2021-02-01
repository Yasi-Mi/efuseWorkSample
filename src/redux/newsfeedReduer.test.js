import {newsfeedReducer} from "./newsfeedReducer";
import {addCommentAction, addPostAction, likeCommentAction, likePostAction} from "./actionCreators";

describe("newsfeedReducer", () => {

    const oldState = {
        currentUser: {
            name: "this guy",
            avatar: "thisguy.png",
            occupation: "dev"
        },
        currentLocation: "Antarctica",
        posts: [
            {
                id: "A",
                content: "something",
                likes: 1,
                comments: [{
                    id: "C",
                    content: "original content",
                    likes: 1,
                }]
            },
            {
                id: "B",
                content: "something else",
                likes: 1,
                comments: []
            }
        ]
    }

    let newState;

    describe("add a post", () => {
        const action = addPostAction("HELLO WORLD", "2020-10-10")

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
        const action = likePostAction("B")

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

    describe("commenting on a post", () => {
        const action = addCommentAction("B", "hello hello hello", "2020-11-10")

        beforeEach(() => {
            newState = newsfeedReducer(oldState, action);
        })

        it("adds the comment to the post", () => {
            expect(newState.posts[1].comments.length).toEqual(1);
            expect(newState.posts[1].comments[0].content).toEqual("hello hello hello");
            expect(newState.posts[1].comments[0].postedTime).toEqual("2020-11-10");
        })

        it("adds user information to the comment", () => {
            expect(newState.posts[1].comments[0].username).toEqual("this guy");
            expect(newState.posts[1].comments[0].userAvatar).toEqual("thisguy.png");
            expect(newState.posts[1].comments[0].occupation).toEqual("dev");
        })

        it("only adds the comment to the correct post", () => {
            expect(newState.posts[0].comments.length).toEqual(1);
        })
    })

    describe("Liking a comment", () => {
        const action = likeCommentAction("A", "C")

        beforeEach(() => {
            newState = newsfeedReducer(oldState, action);
        })

        it("increments the like of the comment", () => {
            expect(newState.posts[0].comments[0].likes).toEqual(2);
        })
    })
});
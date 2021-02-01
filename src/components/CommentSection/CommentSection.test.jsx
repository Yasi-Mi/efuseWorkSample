import CommentSection from "./CommentSection";
import {shallow} from "enzyme";
import React from "react";
import AddCommentContainer from "../AddComment/AddCommentContainer";
import Comment from "../Comment/Comment";

describe("CommentSection", () => {
    let wrapper;
    const onLike = jest.fn();

    const comments = [
        {content: "dummy"},
        {content: "2"}
    ]

    beforeEach(() => {
        wrapper = shallow(<CommentSection onLike={onLike} comments={comments}/>);
    })

    describe("when the user presses the like button", () => {
        beforeEach(() => {
            wrapper.find("LikeCommentButton").at(0).simulate("click")
        })

        it("calls onLike", () => {
            expect(onLike.mock.calls.length).toEqual(1);
        })
    })

    describe("the add comment section", () => {
        it("does not show the add a comment section", () => {
            expect(wrapper.find(AddCommentContainer).length).toEqual(0);
        })

        describe("when the user presses the comment button", () => {
            beforeEach(() => {
                wrapper.find("LikeCommentButton").at(1).simulate("click")
            })

            it("expands the comments section and allows the user to add a comment", () => {
                expect(wrapper.find(AddCommentContainer).length).toEqual(1);
            })
        })
    })

    describe("comments", () => {
        it("displays all the comments", () => {
            expect(wrapper.find(Comment).length).toEqual(2);
            expect(wrapper.find(Comment).at(0).props().comment).toEqual(comments[0]);
            expect(wrapper.find(Comment).at(1).props().comment).toEqual(comments[1]);
        })
    });
})
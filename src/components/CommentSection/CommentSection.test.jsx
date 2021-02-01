import CommentSection from "./CommentSection";
import {shallow} from "enzyme";
import React from "react";
import AddCommentContainer from "../AddComment/AddCommentContainer";

describe("CommentSection", () => {
    let wrapper;
    const onLike = jest.fn();

    beforeEach(() => {
        wrapper = shallow(<CommentSection onLike={onLike}/>);
    })

    describe("when the user presses the like button", () => {
        beforeEach(() => {
            wrapper.find("LikeCommentButton").at(0).simulate("click")
        })

        it("calls onLike", () => {
            expect(onLike.mock.calls.length).toEqual(1);
        })
    })

    describe("when there are no comments", () => {
        beforeEach(() => {
            wrapper = shallow(<CommentSection onLike={onLike} comments={[]}/>);
        })

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
})
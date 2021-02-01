import CommentSection from "./CommentSection";
import {shallow} from "enzyme";
import React from "react";
import CommentContainer from "../Comment/CommentContainer";
import AddComment from "../AddComment/AddComment";

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
            wrapper.find("PostActionButton").at(0).simulate("click")
        })

        it("calls onLike", () => {
            expect(onLike.mock.calls.length).toEqual(1);
        })
    })

    describe("the add comment section", () => {
        it("does not show the add a comment section", () => {
            expect(wrapper.find(AddComment).length).toEqual(0);
        })

        describe("when the user presses the comment button", () => {
            beforeEach(() => {
                wrapper.find("PostActionButton").at(1).simulate("click")
            })

            it("expands the comments section and allows the user to add a comment", () => {
                expect(wrapper.find(AddComment).length).toEqual(1);
            })
        })
    })

    describe("comments", () => {
        it("displays all the comments", () => {
            expect(wrapper.find(CommentContainer).length).toEqual(2);
            expect(wrapper.find(CommentContainer).at(0).props().comment).toEqual(comments[0]);
            expect(wrapper.find(CommentContainer).at(1).props().comment).toEqual(comments[1]);
        })
    });
})
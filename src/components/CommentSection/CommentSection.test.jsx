import CommentSection from "./CommentSection";
import { shallow } from "enzyme";
import React from "react";

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
})
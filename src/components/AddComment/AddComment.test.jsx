import AddComment from "./AddComment";
import React from "react";
import {shallow} from "enzyme";

describe("Add Comment", () => {
    let wrapper;
    const mockOnPostComment = jest.fn();

    beforeEach(() => {
        wrapper = shallow(<AddComment onPostComment={mockOnPostComment}/>)
        Date.now = jest.fn()
        Date.now.mockReturnValue(Date.parse("2021-01-01"))
    })

    describe("when the user enters text", () => {
        const postText = "hello world comment";

        beforeEach(() => {
            wrapper.find("input").simulate("change", {target: {value: postText}})
        })

        describe("when the user presses enter", () => {
            beforeEach(() => {
                wrapper.find("input").simulate("keypress", {keyCode: 13});
            })

            it("calls onPostComment with the text", () => {
                expect(mockOnPostComment.mock.calls.length).toEqual(1);
                expect(mockOnPostComment.mock.calls[0][0]).toEqual(postText)
            })

            it("calls onPostComment with the current time", () => {
                expect(mockOnPostComment.mock.calls[0][1]).toEqual("2021-01-01T00:00:00.000Z")
            })
        })
    })

    describe("when the user hasn't entered anything", () => {
        beforeEach(() => {
            wrapper.find("input").simulate("keyDown", {keyCode: 13});
        })

        describe("when the user clicks the post button", () => {
            it("does not call onPostComment", () => {
                expect(mockOnPostComment.mock.calls.length).toEqual(0);
            });
        })
    })
})
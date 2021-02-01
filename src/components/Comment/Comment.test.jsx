import React from 'react';
import {shallow} from "enzyme";
import Comment from "./Comment";
import {ENTER_KEY_CODE} from "../constants";

describe("Comment", () => {
    let wrapper;
    const comment = {
        content: "hello world",
        likes: 1,
        username: "Yasi",
        userAvatar: "somebody.png",
        occupation: "Software Dev",
        postedTime: "2021-01-01T00:00:00.000Z"
    }
    const mockOnLike = jest.fn();
    const mockOnEdit = jest.fn();
    const mockOnDelete = jest.fn();

    beforeEach(() => {
        wrapper = shallow(<Comment comment={comment} onLike={mockOnLike} onEdit={mockOnEdit} onDelete={mockOnDelete}/>)
    })

    it("renders the text", () => {
        expect(wrapper.text()).toContain(comment.content)
    })

    it("renders the username", () => {
        expect(wrapper.text()).toContain(comment.username)
    })

    it("renders the number of likes", () => {
        expect(wrapper.text()).toContain("1 Likes")
    })

    it("renders the occupation", () => {
        expect(wrapper.text()).toContain(comment.occupation)
    })

    describe("when the user presses the like button", () => {
        beforeEach(() => {
            wrapper.find("PostActionButton").at(0).simulate("click")
        })

        it("calls onLike", () => {
            expect(mockOnLike.mock.calls.length).toEqual(1);
        })
    })

    describe("when the user presses the delete button", () => {
        beforeEach(() => {
            wrapper.find("PostActionButton").at(2).simulate("click")
        })

        it("calls onDelete", () => {
            expect(mockOnDelete.mock.calls.length).toEqual(1);
        })
    })

    describe("when the user presses the edit button", () => {
        const newText = "new Text";

        beforeEach(() => {
            wrapper.find("PostActionButton").at(1).simulate("click")
        })

        it("makes the input editable", () => {
            expect(wrapper.find("EditCommentInput").length).toEqual(1)
        })

        describe("then the user edits their message", () => {
            beforeEach(() => {
                wrapper.find("EditCommentInput").simulate("change", {target: {value: newText}})
                wrapper.find("EditCommentInput").simulate("keypress", {charCode: ENTER_KEY_CODE});
            })

            it("calls edit with the new text", () => {
                expect(mockOnEdit.mock.calls.length).toEqual(1);
                expect(mockOnEdit.mock.calls[0][0]).toEqual(newText);
            })

            it("makes the input no longer editable", () => {
                expect(wrapper.find("EditCommentInput").length).toEqual(0)
            })
        })

        describe("then the user deletes all the content", () => {
            beforeEach(() => {
                wrapper.find("EditCommentInput").simulate("change", {target: {value: ""}})
                wrapper.find("EditCommentInput").simulate("keypress", {charCode: 13});
            })

            it("does not call edit", () => {
                expect(mockOnEdit.mock.calls.length).toEqual(0);
            });
        })

        describe("then the user presses the edit button again", () => {
            beforeEach(() => {
                wrapper.find("PostActionButton").at(1).simulate("click")
            })

            it("makes the input no longer editable", () => {
                expect(wrapper.find("EditCommentInput").length).toEqual(0)
            })
        })
    })
})
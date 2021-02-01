import React from 'react';
import {shallow} from "enzyme";
import PostForm from "./PostForm";

describe("PostForm", () => {
    let wrapper;
    const mockOnPost = jest.fn();

    beforeEach(() => {
        wrapper = shallow(<PostForm onPost={mockOnPost}/>)
        Date.now = jest.fn()
        Date.now.mockReturnValue(Date.parse("2021-01-01"))
    })

    describe("when the user enters text", () => {
        const postText = "hello world";

        beforeEach(() => {
            wrapper.find("TextArea").simulate("change", {target: {value: postText}})
        })

        describe("when the user clicks the post button", () => {
            beforeEach(() => {
                wrapper.find("PostButton").simulate("click");
            })

            it("calls onPost with the text", () => {
                expect(mockOnPost.mock.calls.length).toEqual(1);
                expect(mockOnPost.mock.calls[0][0]).toEqual(postText)
            })

            it("calls onPost with the current time", () => {
                expect(mockOnPost.mock.calls[0][1]).toEqual("2021-01-01T00:00:00.000Z")
            })
        })
    })

    describe("when the user hasn't entered anything", () => {
        beforeEach(() => {
            wrapper.find("PostButton").simulate("click");
        })

        describe("when the user clicks the post button", () => {
            it("does not call onPost", () => {
                expect(mockOnPost.mock.calls.length).toEqual(0);
            });
        })
    })
})
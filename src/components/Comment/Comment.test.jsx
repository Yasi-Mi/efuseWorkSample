import React from 'react';
import {shallow} from "enzyme";
import Comment from "./Comment";

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

    beforeEach(() => {
        wrapper = shallow(<Comment comment={comment} onLike={mockOnLike}/>)
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
})
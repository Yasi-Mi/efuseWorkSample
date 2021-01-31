import React from 'react';
import { shallow } from "enzyme";
import Post from "./Post";
import LikeCommentSection from "../LikeCommentSection/LikeCommentSection";

describe("Post", () => {
    let wrapper;
    const postText = "hello world"

    beforeEach(() => {
        wrapper = shallow(<Post postText={postText}/>)
    })

    it("renders the text", () => {
        expect(wrapper.text()).toContain(postText)
    })

    describe("when the user presses the like button", () => {
        beforeEach(() => {
            wrapper.find(LikeCommentSection).props().onLike();
        });

        it("increments the likes", () => {
            expect(wrapper.text()).toContain("1 Likes")
        });
    })
})
import React from 'react';
import { shallow } from "enzyme";
import Post from "./Post";

describe("Post", () => {
    let wrapper;
    const post = {
        content: "hello world",
        likes: 1
    }

    beforeEach(() => {
        wrapper = shallow(<Post post={post}/>)
    })

    it("renders the text", () => {
        expect(wrapper.text()).toContain(post.content)
    })

    it("renders the number of likes", () => {
        expect(wrapper.text()).toContain("1 Likes")
    })
})
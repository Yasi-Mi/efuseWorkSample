import React from 'react';
import { shallow } from "enzyme";
import Post from "./Post";
import {Avatar} from "../../sharedStyles/StyledComponents";

describe("Post", () => {
    let wrapper;
    const post = {
        content: "hello world",
        likes: 1,
        userAvatar: "somebody.png",
        location: "Antarctica"
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

    it("renders the avatar", () => {
        expect(wrapper.find(Avatar).props().src).toContain(post.userAvatar)
    })

    it("renders the location", () => {
        expect(wrapper.text()).toContain(post.location)
    })
})
import React from 'react';
import {shallow} from "enzyme";
import Post from "./Post";
import {Avatar} from "../../sharedComponents/StyledComponents";

describe("Post", () => {
    let wrapper;
    const post = {
        content: "hello world",
        likes: 1,
        username: "Yasi",
        userAvatar: "somebody.png",
        location: "Antarctica",
        postedTime: "2021-01-01T00:00:00.000Z",
        comments: [{}, {}]
    }

    beforeEach(() => {
        wrapper = shallow(<Post post={post}/>)
    })

    it("renders the text", () => {
        expect(wrapper.text()).toContain(post.content)
    })

    it("renders the username", () => {
        expect(wrapper.text()).toContain(post.username)
    })

    it("renders the number of likes", () => {
        expect(wrapper.text()).toContain("1 Likes")
    })

    it("renders the number of comments", () => {
        expect(wrapper.text()).toContain("2 Comments")
    })

    it("renders the location", () => {
        expect(wrapper.text()).toContain(post.location)
    })
})
import React from 'react';
import {shallow} from "enzyme";
import Post from "./Post";
import {Avatar} from "../../sharedStyles/StyledComponents";

describe("Post", () => {
    let wrapper;
    const post = {
        content: "hello world",
        likes: 1,
        userAvatar: "somebody.png",
        location: "Antarctica",
        postedTime: "2021-01-01T00:00:00.000Z"
    }

    beforeEach(() => {
        Date.now = jest.fn()
        Date.now.mockReturnValue(Date.parse("2021-01-01T00:03:00.000Z"))
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

    it("renders the difference in minutes between now and the post time", () => {
        expect(wrapper.text()).toContain("3 minutes ago");
    });

    describe("when the post was made 1 minute ago", () => {
        beforeEach(() => {
            Date.now = jest.fn()
            Date.now.mockReturnValue(Date.parse("2021-01-01T00:01:00.000Z"))
            wrapper = shallow(<Post post={post}/>)
        })

        it("renders minutes ago text as singular", () => {
            expect(wrapper.text()).toContain("1 minute ago");
        });
    })
})
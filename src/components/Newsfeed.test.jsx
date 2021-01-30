import React from 'react';
import { shallow } from "enzyme";
import Newsfeed from "./Newsfeed";
import PostForm from "./PostForm";

describe("Newsfeed", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Newsfeed/>)
    })

    describe("When a new post is made", () => {
        const postText = "hello world";

        beforeEach(() => {
            wrapper.find(PostForm).props().onPost(postText)
        })

        it("renders the post", () => {
            expect(wrapper.text()).toContain(postText);
        })
    })

    describe("When multiple posts are made", () => {
        const firstPost = "hello world";
        const secondPost = "goodnight world";

        beforeEach(async () => {
            wrapper.find(PostForm).props().onPost(firstPost);
            wrapper.find(PostForm).props().onPost(secondPost);
        })

        it("renders both posts", () => {
            expect(wrapper.text()).toContain(firstPost);
            expect(wrapper.text()).toContain(secondPost);
        });
    })
})
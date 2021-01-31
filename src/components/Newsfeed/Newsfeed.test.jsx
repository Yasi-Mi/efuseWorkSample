import React from 'react';
import { shallow } from "enzyme";
import Newsfeed from "./Newsfeed";
import PostForm from "../PostForm/PostForm";
import Post from "../Post/Post";

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
            expect(wrapper.find(Post).props().postText).toContain(postText);
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
            expect(wrapper.find(Post).at(0).props().postText).toEqual(firstPost);
            expect(wrapper.find(Post).at(1).props().postText).toContain(secondPost);
        });
    })
})
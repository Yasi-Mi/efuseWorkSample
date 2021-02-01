import React from 'react';
import {shallow} from "enzyme";
import Newsfeed from "./Newsfeed";
import Post from "../Post/Post";

describe("Newsfeed", () => {
    let wrapper;

    const posts = [
        {
            id: "A",
            content: "Hi",
            avatar: "thisguy.png"
        },
        {
            id: "B",
            content: "Bye",
        }
    ]

    beforeEach(() => {
        wrapper = shallow(<Newsfeed posts={posts}/>);
    })

    it("renders posts", () => {
        expect(wrapper.find(Post).length).toEqual(2);
        expect(wrapper.find(Post).at(0).props().post).toEqual(posts[0]);
        expect(wrapper.find(Post).at(1).props().post).toEqual(posts[1]);
    })
})
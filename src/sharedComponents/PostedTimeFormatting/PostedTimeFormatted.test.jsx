import {shallow} from "enzyme";
import PostedTimeFormatted from "./PostedTimeFormatted";
import React from "react";

describe("PostedTimeFormatted", () => {
    let wrapper;

    beforeEach(() => {
        Date.now = jest.fn()
        Date.now.mockReturnValue(Date.parse("2021-01-01T00:03:00.000Z"))
        wrapper = shallow(<PostedTimeFormatted postedTime={"2021-01-01T00:00:00.000Z"}/>)
    })

    it("renders the difference in minutes between now and the post time", () => {
        expect(wrapper.text()).toContain("3 minutes ago");
    });

    describe("when the post was made 1 minute ago", () => {
        beforeEach(() => {
            Date.now = jest.fn()
            Date.now.mockReturnValue(Date.parse("2021-01-01T00:01:00.000Z"))
            wrapper = shallow(<PostedTimeFormatted postedTime={"2021-01-01T00:00:00.000Z"}/>)
        })

        it("renders minutes ago text as singular", () => {
            expect(wrapper.text()).toContain("1 minute ago");
        });
    })
})

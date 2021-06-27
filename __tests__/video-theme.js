import React from "react"
import renderer from "react-test-renderer"

import videoTheme from "../src/components/video-theme"

describe("Layout", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<videoTheme />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

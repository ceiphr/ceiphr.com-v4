import React from "react"
import renderer from "react-test-renderer"

import imageTheme from "../src/components/image-theme"

describe("Layout", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<imageTheme />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
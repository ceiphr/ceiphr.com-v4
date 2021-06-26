import React from "react"
import renderer from "react-test-renderer"

import Layout from "../src/components/layout"

describe("Layout", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Layout children={<div>Hello World!</div>} location={__PATH_PREFIX__} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
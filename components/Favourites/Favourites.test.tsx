import React from "react"
import { render } from "../utils/test-utils"
import { Favourites, dataTestIds, Props } from "./Favourites"

const props: Props = {
  likedProducts: [{ id: "1", name: "Arch Blick" }],
}

it("should render the link container", async () => {
  const result = render(<Favourites {...props} />)
  expect(result.getByTestId(dataTestIds.link)).toBeInTheDocument()
})

it("should have linkto go to likes page", async () => {
  const result = render(<Favourites {...props} />)
  expect(result.queryByTestId(dataTestIds.link)?.getAttribute("href")).toBe("/likes")
})

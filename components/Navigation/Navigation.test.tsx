import React from "react"
import { render } from "../utils/test-utils"
import { Navigation, dataTestIds, Props } from "./Navigation"

const props: Props = {
  likedProducts: [
    { id: "1", name: "Arch Blick" },
    { id: "2", name: "Ms. Fiona Spencer" },
  ],
}

it("should render the brand logo ", () => {
  const result = render(<Navigation {...props} />)
  expect(result.getByTestId(dataTestIds.brandLogo)).toBeInTheDocument()
})

it("should render the likes section ", () => {
  const result = render(<Navigation {...props} />)
  expect(result.getByTestId(dataTestIds.likes)).toBeInTheDocument()
})

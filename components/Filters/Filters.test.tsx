import React from "react"
import { render, fireEvent, waitFor } from "../utils/test-utils"
import { Filters, dataTestIds, Props } from "./Filters"

const props: Props = {
  productList: [
    {
      id: "1",
      name: "Arch Blick",
      img: "https://placeimg.com/640/360/any",
      sold: true,
      price: "584.00",
      brand: "Practical Steel Cheese",
      size: "M",
    },
    {
      id: "2",
      name: "Ms. Fiona Spencer",
      img: "https://placeimg.com/640/360/any",
      sold: false,
      price: "412.00",
      brand: "Tasty Plastic Shoes",
      size: "S",
    },
  ],
  filteredProductList: [
    {
      id: "1",
      name: "Arch Blick",
      img: "https://placeimg.com/640/360/any",
      sold: true,
      price: "584.00",
      brand: "Practical Steel Cheese",
      size: "M",
    },
  ],
  setFilteredProductList: jest.fn(),
}

it("should render the filtered results and the container", () => {
  const result = render(<Filters {...props} />)
  expect(result.getByTestId(dataTestIds.container)).toBeInTheDocument()
  expect(result.getByTestId(dataTestIds.results)).toHaveTextContent(
    `${props.filteredProductList.length} Result(s)`
  )
})

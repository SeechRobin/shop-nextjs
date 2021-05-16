import React from "react"
import { render, fireEvent } from "../utils/test-utils"
import { ProductList, dataTestIds, Props } from "./ProductList"

const props: Props = {
  products: [
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
  likedProducts: [{ id: "1", name: "Arch Blick" }],
  setLikedProducts: jest.fn(),
}

it("should render the list container", () => {
  const result = render(<ProductList {...props} />)
  expect(result.getByTestId(dataTestIds.list)).toBeInTheDocument()
})

import React from "react"
import { render, fireEvent } from "../utils/test-utils"
import { ProductCard, dataTestIds, Props } from "./ProductCard"
import { dataTestIds as heartTestIds } from "../Icons/Heart"

const props: Props = {
  id: "1",
  name: "Arch Blick",
  img: "https://placeimg.com/640/360/any",
  sold: true,
  price: "584.00",
  brand: "Practical Steel Cheese",
  size: "M",
  likedProducts: [],
  setLikedProducts: jest.fn(),
}

it("should render the product card container", async () => {
  const result = render(<ProductCard {...props} />)
  expect(result.getByTestId(dataTestIds.container)).toBeInTheDocument()
})

it("should render the image", async () => {
  const result = render(<ProductCard {...props} />)
  expect(result.getByTestId(dataTestIds.image)).toBeInTheDocument()
})

it("should render the sold out message", async () => {
  const result = render(<ProductCard {...props} />)
  expect(result.getByTestId(dataTestIds.soldOut)).toBeInTheDocument()
})

it("should not render the sold out message", async () => {
  const notSoldOut = { ...props, sold: false }
  const result = render(<ProductCard {...notSoldOut} />)
  expect(result.queryByTestId(dataTestIds.soldOut)).toBeNull()
})

it("should render the brand", async () => {
  const result = render(<ProductCard {...props} />)
  expect(result.getByTestId(dataTestIds.brand)).toHaveTextContent("Practical Steel Cheese")
})

it("should render the size", async () => {
  const result = render(<ProductCard {...props} />)
  expect(result.getByTestId(dataTestIds.size)).toHaveTextContent("M")
})

it("should render the price", async () => {
  const result = render(<ProductCard {...props} />)
  expect(result.getByTestId(dataTestIds.price)).toHaveTextContent("£584")
})

it("should render the heart", async () => {
  const result = render(<ProductCard {...props} />)
  expect(result.getByTestId(dataTestIds.heart)).toBeInTheDocument()
})

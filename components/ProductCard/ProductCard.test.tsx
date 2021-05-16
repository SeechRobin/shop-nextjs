import React from "react"
import { render, fireEvent } from "../utils/test-utils"
import { ProductCard, dataTestIds, Props } from "./ProductCard"
import { dataTestIds as heartTestIds } from "../Icons/Heart"

const props: Props = {
  id: "1",
  title: "Arch Blick",
  image: "https://placeimg.com/640/360/any",
  price: "584.00",
  likedProducts: [],
  setLikedProducts: jest.fn(),
}

it("should render the product card container", async () => {
  const result = render(<ProductCard {...props} />)
  expect(result.getByTestId(dataTestIds.container)).toBeInTheDocument()
})

it("should render the product card title", async () => {
  const result = render(<ProductCard {...props} />)
  expect(result.getByTestId(dataTestIds.container)).toHaveTextContent("Arch Blick")
})

it("should render the image", async () => {
  const result = render(<ProductCard {...props} />)
  expect(result.getByTestId(dataTestIds.image)).toBeInTheDocument()
})

it("should render the price", async () => {
  const result = render(<ProductCard {...props} />)
  expect(result.getByTestId(dataTestIds.price)).toHaveTextContent("£584")
})

it("should render the heart", async () => {
  const result = render(<ProductCard {...props} />)
  expect(result.getByTestId(dataTestIds.heart)).toBeInTheDocument()
})

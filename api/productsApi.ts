import { nodejsFetch } from "./fetch"
import { Product } from "../types/index"

export type ProductsResponse = Product[]

const getProductList = async (): Promise<ProductsResponse> => {
  const url = `https://5c78274f6810ec00148d0ff1.mockapi.io/api/v1/products`
  // const url = `https://fakestoreapi.com/products`

  const result = await nodejsFetch(`${url}`, {
    headers: { Accept: "application/json" },
  }).then((response) => response.json())

  return result
}

export { getProductList }

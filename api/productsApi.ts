import { nodejsFetch } from "./fetch"
import { Product } from "../types/index"

export type ProductsResponse = Product[]

const getProductList = async (): Promise<ProductsResponse> => {
  const url = `https://fakestoreapi.com/products`

  const result = await nodejsFetch(`${url}`, {
    headers: { Accept: "application/json" },
  }).then((response) => response.json())

  return result
}

export { getProductList }

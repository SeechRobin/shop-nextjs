import React, { useState } from "react"
import { Grid } from "@chakra-ui/react"
import { ProductCard } from "../ProductCard/ProductCard"
import { Filters } from "../Filters/Filters"
import { Product, FavouriteProduct } from "../../types/index"
import { dataTestIdPrefix } from "../utils/dataTestIdPrefix"

export const testIdPrefix = dataTestIdPrefix("ProductList")

export const dataTestIds = {
  list: testIdPrefix("list"),
}

export type Props = {
  products: Product[]
  likedProducts: FavouriteProduct[]
  setLikedProducts: (likedProducts: FavouriteProduct[]) => void
}

export const ProductList: React.FC<Props> = ({ products, likedProducts, setLikedProducts }) => {
  const [productList] = useState<Product[]>(products)
  const [filteredProductList, setFilteredProductList] = useState<Product[]>(products)

  return (
    <>
      <Filters
        productList={productList}
        setFilteredProductList={setFilteredProductList}
        filteredProductList={filteredProductList}
      />
      <Grid
        data-testid={dataTestIds.list}
        gridTemplateColumns={["1fr", "1fr", "1fr 1fr", "1fr 1fr 1fr", "1fr 1fr 1fr 1fr"]}
        columnGap="1px"
        justifyContent="center"
        alignContent="center"
      >
        {filteredProductList?.map((product: any) => (
          <ProductCard
            key={product.id}
            {...product}
            likedProducts={likedProducts}
            setLikedProducts={setLikedProducts}
          />
        ))}
      </Grid>
    </>
  )
}

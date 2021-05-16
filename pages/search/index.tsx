import React, { useState } from "react"
import { NextPage } from "next"
import { WithUserAgentProps } from "next-useragent"
import { getInitialProps } from "../../utils/getInitialProps"
import { Navigation, ProductList } from "../../components"
import { SearchSEO } from "../../components/index"
import { Product, FavouriteProduct } from "../../types/index"

import favProducts from "../../api/likedProducts.json"

export type PageProps = WithUserAgentProps & {
  productsData: Product[]
  host: string
}

const Search: NextPage<PageProps> = ({ productsData, host }) => {
  const [likedProducts, setLikedProducts] = useState<FavouriteProduct[]>(favProducts.data)
  return (
    <>
      <SearchSEO host={host} />
      <Navigation likedProducts={likedProducts} />
      <ProductList
        products={productsData}
        likedProducts={likedProducts}
        setLikedProducts={setLikedProducts}
      />
    </>
  )
}

Search.getInitialProps = getInitialProps

export default Search

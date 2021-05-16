import React from "react"
import { Link } from "@chakra-ui/react"

import { dataTestIdPrefix } from "../utils/dataTestIdPrefix"
import { FavouriteProduct } from "../../types/index"

export const testIdPrefix = dataTestIdPrefix("Favourites")

export const dataTestIds = {
  link: testIdPrefix("link"),
}

export type Props = {
  likedProducts: FavouriteProduct[]
}

export const Favourites: React.FC<Props> = ({ likedProducts }) => {
  const textTypography = {
    fontFamily: `"GT America Extended", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif`,
    color: "rgb(38, 38, 38)",
    fontWeight: "900",
  }

  return (
    <Link data-testid={dataTestIds.link} href="/likes" {...textTypography}>
      {likedProducts.length} Likes
    </Link>
  )
}

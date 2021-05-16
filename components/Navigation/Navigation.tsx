import React from "react"
import { Flex, Box, Spacer } from "@chakra-ui/react"
import { Logo } from "../index"
import { Heart } from "../index"
import { Favourites } from "../Favourites/Favourites"
import { dataTestIdPrefix } from "../utils/dataTestIdPrefix"
import { FavouriteProduct } from "../../types/index"

export const testIdPrefix = dataTestIdPrefix("Header")

export const dataTestIds = {
  brandLogo: testIdPrefix("brandLogo"),
  likes: testIdPrefix("likes"),
}

export type Props = {
  likedProducts: FavouriteProduct[]
}

export const Navigation: React.FC<Props> = ({ likedProducts }) => {
  return (
    <>
      <Flex
        height="48px"
        paddingLeft="25px"
        paddingRight="25px"
        marginTop="25px"
        borderBottom="0.0625rem solid rgb(238, 238, 238)"
      >
        <Box
          data-testid={dataTestIds.brandLogo}
          width="5.625rem"
          height="1.4375rem"
          display="block"
        >
          <Logo />
        </Box>
        <Spacer />
        <Box data-testid={dataTestIds.likes}>
          <Favourites likedProducts={likedProducts} />
        </Box>
      </Flex>
    </>
  )
}

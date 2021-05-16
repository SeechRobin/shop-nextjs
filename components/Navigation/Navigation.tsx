import React from "react"
import { Flex, Box, Spacer, Input, useBreakpointValue } from "@chakra-ui/react"
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
  const isMobile = useBreakpointValue([true, true, false])
  return (
    <>
      <Flex
        height="48px"
        paddingLeft="25px"
        paddingRight="25px"
        marginTop="25px"
        borderBottom="0.0625rem solid rgb(238, 238, 238)"
        justifyContent="space-around"
      >
        <Box
          data-testid={dataTestIds.brandLogo}
          width="5.625rem"
          height="1.4375rem"
          display="block"
        >
          <Logo />
        </Box>
        {isMobile ? (
          <Spacer />
        ) : (
          <Input
            width={["0", "0", "500px", "700px"]}
            placeholder=" Seatch TVs, books, low prices, video games..."
            size="md"
            borderRadius="0"
          />
        )}
        <Box data-testid={dataTestIds.likes}>
          <Favourites likedProducts={likedProducts} />
        </Box>
      </Flex>
    </>
  )
}

import React, { useState } from "react"
import { Box, Image, Spacer, Stack, Text } from "@chakra-ui/react"
import { Heart } from "../index"
import { FavouriteProduct } from "../../types/index"
import { dataTestIdPrefix } from "../utils/dataTestIdPrefix"

export const testIdPrefix = dataTestIdPrefix("ProductCard")

export const dataTestIds = {
  container: testIdPrefix("container"),
  image: testIdPrefix("image"),
  soldOut: testIdPrefix("soldOut"),
  heart: testIdPrefix("heart"),
  name: testIdPrefix("name"),
  brand: testIdPrefix("brand"),
  size: testIdPrefix("size"),
  price: testIdPrefix("price"),
}

export type Props = {
  id: string
  img: string
  name: string
  brand: string
  size: string
  price: string
  sold: boolean
  likedProducts: FavouriteProduct[]
  setLikedProducts: (likedProducts: FavouriteProduct[]) => void
}

export const ProductCard: React.FC<Props> = ({
  id,
  img,
  name,
  brand,
  size,
  price,
  sold,
  likedProducts,
  setLikedProducts,
}) => {
  const [islikedProduct, setIsLikedProduct] = useState(
    likedProducts.filter((product) => product.id === id)?.length > 0
  )
  const textTypography = {
    fontFamily: `"GT America Extended", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif`,
    color: "rgb(38, 38, 38)",
  }

  const handleHeartClick = (id: string, name: string): void => {
    // simulating this with state but this will potentially be hanlded by an api to persit the change
    if (islikedProduct) {
      const removedLikedProducts = likedProducts.filter((product) => product.id !== id)
      setLikedProducts(removedLikedProducts)
      setIsLikedProduct(false)
    } else {
      const addedLikedProducts = [...likedProducts, { id: id, name: name }]
      console.log(addedLikedProducts)
      setLikedProducts(addedLikedProducts)
      setIsLikedProduct(true)
    }
  }

  return (
    <Stack
      data-testid={dataTestIds.container}
      position="relative"
      paddingBottom="25px"
      paddingTop="25px"
      width="100%"
      alignItems="center"
    >
      <Box position="relative">
        <Image
          data-testid={dataTestIds.image}
          width="17.5rem"
          height="17.5rem"
          objectFit="fill"
          src={img}
          opacity={sold ? 0.7 : 1}
          alt={name}
          fallback={<Box backgroundColor="gray.100" width="17.5rem" height="17.5rem"></Box>}
        />
        {sold && (
          <Text
            data-testid={dataTestIds.soldOut}
            position="absolute"
            color="rgb(255, 35, 0)"
            fontWeight="900"
            fontSize="1rem"
            top="130px"
            left="130px"
            transform="translate(-50%, -50%)"
          >
            Sold
          </Text>
        )}
        <Box
          data-testid={dataTestIds.heart}
          top="4px"
          right="2px"
          position="absolute"
          height="2rem"
          width="2rem"
          onClick={() => handleHeartClick(id, name)}
        >
          <Heart fill={islikedProduct} />
        </Box>
      </Box>

      <Box width="17.5rem">
        <Text
          data-testid={dataTestIds.brand}
          minHeight="1.8rem"
          width="18rem"
          fontWeight="900"
          fontSize="1rem"
          {...textTypography}
        >
          {brand}
        </Text>
        <Text
          data-testid={dataTestIds.name}
          minHeight="0.8rem"
          width="18rem"
          fontSize="0.8rem"
          lineHeight="0.3"
          {...textTypography}
        >
          {name}
        </Text>
        <Box>
          <Text
            data-testid={dataTestIds.size}
            minHeight="0.8rem"
            width="18rem"
            fontSize="0.8rem"
            lineHeight="0.3"
            {...textTypography}
          >
            {size.replace("size", "").trim()}
          </Text>
          <Text
            data-testid={dataTestIds.price}
            width="18rem"
            fontWeight="900"
            fontSize="0.9rem"
            {...textTypography}
          >
            £{price?.split(".")[0]}
          </Text>
        </Box>
        <Spacer />
      </Box>
    </Stack>
  )
}

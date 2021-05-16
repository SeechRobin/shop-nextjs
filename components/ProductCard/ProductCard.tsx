import React, { useState } from "react"
import { Box, Button, Image, Spacer, Stack, Text } from "@chakra-ui/react"
import { Heart } from "../index"
import { FavouriteProduct } from "../../types/index"
import { dataTestIdPrefix } from "../utils/dataTestIdPrefix"

export const testIdPrefix = dataTestIdPrefix("ProductCard")

export const dataTestIds = {
  container: testIdPrefix("container"),
  image: testIdPrefix("image"),
  heart: testIdPrefix("heart"),
  title: testIdPrefix("title"),
  price: testIdPrefix("price"),
}

export type Props = {
  id: string
  image: string
  title: string
  price: string
  likedProducts: FavouriteProduct[]
  setLikedProducts: (likedProducts: FavouriteProduct[]) => void
}

export const ProductCard: React.FC<Props> = ({
  id,
  image,
  title,
  price,
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

  const handleHeartClick = (id: string, title: string): void => {
    // simulating this with state but this will potentially be hanlded by an api to persit the change
    if (islikedProduct) {
      const removedLikedProducts = likedProducts.filter((product) => product.id !== id)
      setLikedProducts(removedLikedProducts)
      setIsLikedProduct(false)
    } else {
      const addedLikedProducts = [...likedProducts, { id: id, title: title }]
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
          src={image}
          alt={title}
          fallback={<Box backgroundColor="gray.100" width="17.5rem" height="17.5rem"></Box>}
        />
        <Box
          data-testid={dataTestIds.heart}
          top="4px"
          right="2px"
          position="absolute"
          height="2rem"
          width="2rem"
          onClick={() => handleHeartClick(id, title)}
        >
          <Heart fill={islikedProduct} />
        </Box>
      </Box>

      <Box width="17.5rem">
        <Text
          data-testid={dataTestIds.title}
          minHeight="0.8rem"
          width="18rem"
          fontSize="0.8rem"
          lineHeight="1.5"
          {...textTypography}
        >
          {title}
        </Text>
        <Box>
          <Text
            data-testid={dataTestIds.price}
            width="18rem"
            fontWeight="900"
            fontSize="0.9rem"
            {...textTypography}
            paddingBottom="10px"
          >
            £{price}
          </Text>
          <Button
            width="100%"
            backgroundColor="black"
            textColor="#fff"
            borderRadius="0"
            textTransform="uppercase"
            _hover={{ backgroundColor: "white", textColor: "black", border: "1px solid black" }}
          >
            Add to Bag
          </Button>
        </Box>
        <Spacer />
      </Box>
    </Stack>
  )
}

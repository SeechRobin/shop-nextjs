import React, { useState } from "react"
import { Flex, Stack, Switch, Text } from "@chakra-ui/react"
import { dataTestIdPrefix } from "../utils/dataTestIdPrefix"
import { Product } from "../../types/index"

export const testIdPrefix = dataTestIdPrefix("Filters")

export const dataTestIds = {
  container: testIdPrefix("container"),
  results: testIdPrefix("results"),
  toggleContainer: testIdPrefix("toggleContainer"),
  toggle: testIdPrefix("toggle"),
}

export type Props = {
  productList: Product[]
  filteredProductList: Product[]
  setFilteredProductList: (productList?: Product[]) => void
}

export const Filters: React.FC<Props> = ({
  filteredProductList,
  productList,
  setFilteredProductList,
}) => {
  const [isChecked, setIsChecked] = useState(false)

  const textTypography = {
    fontFamily: `"GT America Extended", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif`,
    color: "rgb(38, 38, 38)",
  }

  return (
    <Flex
      data-testid={dataTestIds.container}
      justifyContent="space-between"
      marginLeft={["21px", "30px", "30px", "40px"]}
      marginRight={["21px", "30px", "30px", "40px"]}
      height="75px"
      alignItems="center"
      {...textTypography}
    >
      <Text data-testid={dataTestIds.results}> {filteredProductList?.length} Result(s)</Text>
      <Stack data-testid={dataTestIds.toggleContainer} direction="row">
        <Text> Hide Sold Out</Text>
        <Switch
          data-testid={dataTestIds.toggle}
          isChecked={isChecked}
          aria-label="Toggle Sold Out Items"
          onChange={(): void => {
            setIsChecked(!isChecked)
            if (!isChecked) {
              setFilteredProductList(productList?.filter((product) => !product.sold))
            } else {
              setFilteredProductList(productList)
            }
          }}
          colorScheme="red"
        />
      </Stack>
    </Flex>
  )
}

import { NextPageContext } from "next"
import { useUserAgent } from "next-useragent"
import { getProductList } from "../api/productsApi"
import { PageProps } from "../pages/search/index"
import { Product } from "../types/index"

export const getInitialProps = async (ctx: NextPageContext): Promise<PageProps> => {
  const { req } = ctx
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const ua = useUserAgent(req?.headers["user-agent"] || "")
  let productsData: Product[]
  try {
    productsData = await getProductList()
  } catch (e) {}

  return {
    ua,
    productsData,
    host: req?.headers?.host,
  }
}

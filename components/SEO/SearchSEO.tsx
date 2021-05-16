import React from "react"
import { NextSeo } from "next-seo"

export type Props = {
  host: string
}

export const SearchSEO: React.FC<Props> = ({ host }) => {
  return (
    <>
      <NextSeo
        title={"Ecost - Low price in electronics, clothes, video games...."}
        description={
          "digital camera, LCD TV, books, DVD, low prices, video games, pc games, software, electronics, home, garden, video"
        }
        canonical={`https://${host}/search`}
        twitter={{ cardType: "summary", site: "@ecost", handle: "@ecost" }}
      />
    </>
  )
}

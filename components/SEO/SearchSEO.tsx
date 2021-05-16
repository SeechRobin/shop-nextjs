import React from "react"
import { NextSeo } from "next-seo"

export type Props = {
  host: string
}

export const SearchSEO: React.FC<Props> = ({ host }) => {
  return (
    <>
      <NextSeo
        title={"Depop - buy, sell, discover unique fashion"}
        description={
          "Designer. Preloved. Vintage. Streetwear. Sneakers. Whatever your style. Find it on Depop."
        }
        canonical={`https://${host}/search`}
        twitter={{ cardType: "summary", site: "@depop", handle: "@depop" }}
      />
    </>
  )
}

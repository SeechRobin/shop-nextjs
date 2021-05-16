import React from "react"
export type Props = {
  fill?: boolean
}

import { dataTestIdPrefix } from "../utils/dataTestIdPrefix"

export const testIdPrefix = dataTestIdPrefix("Heart")

export const dataTestIds = {
  icon: testIdPrefix("icon"),
}

export const Heart: React.FC<Props> = ({ fill }) => {
  return (
    <svg data-testid={dataTestIds.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
      <title>Heart</title>
      <path
        fillRule="evenodd"
        strokeWidth="1.5"
        fill={fill ? "black" : "white"}
        stroke="black"
        d="M24.278 15.963L15 25.267l-9.278-9.304c-2.563-2.569-2.563-6.734 0-9.303 2.562-2.569 6.716-2.569 9.278 0 2.562-2.569 6.716-2.569 9.278 0 2.563 2.57 2.563 6.734 0 9.303z"
      ></path>
    </svg>
  )
}

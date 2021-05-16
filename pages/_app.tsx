import React from "react"
import App, { AppProps } from "next/app"
import { ChakraProvider } from "@chakra-ui/react"
import { PageProps } from "./search/index"

export default class MyApp extends App<AppProps<PageProps>> {
  state = {
    componentKey: 0,
  }

  render(): React.ReactElement {
    const { Component, pageProps } = this.props

    return (
      <ChakraProvider>
        <Component key={this.state.componentKey} {...pageProps} />
      </ChakraProvider>
    )
  }
}

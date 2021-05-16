import React from "react"
import Document, { Html, Head, Main, NextScript, DocumentInitialProps } from "next/document"

const APP_NAME = "DEPOP"

type DocumentProps = {
  lang: string
} & DocumentInitialProps
export default class extends Document<DocumentProps> {
  render(): any {
    return (
      <Html lang="en" dir="ltr">
        <Head>
          <meta name="application-name" content={APP_NAME} />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />
          <meta name="apple-mobile-web-app-title" content={APP_NAME} />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="viewport" content="width=device-width" />
          <meta charSet="utf-8" />
          <link rel="preconnect" href="placeimg.com" />
          <link rel="dns-prefetch" href="placeimg.com" />
          <link rel="preconnect" href="lorempixel.com" />
          <link rel="dns-prefetch" href="lorempixel.com" />
          <link
            rel="preload"
            href="https://d3170a3msf25m.cloudfront.net/assets/GT-America-Extended-Bold.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />

          <style>{`
            html, body, #__next {
              height: 100%;
              width: 100%
            }
            #__next {
              margin: 0 auto;
            }
            `}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

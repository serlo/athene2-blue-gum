import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <html>
        <head>
          <meta charSet="utf-8" class="next-head" />
          <meta
            name="viewport"
            content="width=device-width,minimum-scale=1,initial-scale=1"
            class="next-head"
          />
        </head>
        <body>
          <MyScripts />
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

class MyScripts extends Head {
  render() {
    return (
      <>
        {this.props.children}
        {this.getCssLinks()}
        {this.context._documentProps.styles || null}
      </>
    )
  }
}

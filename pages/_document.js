import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta property="og:title" content="AI Tweeter" key="title"/>
        <meta property="og:description" content="Generate Viral Tweet Threads With AI" key="description"/>
        <meta
          property="og:image"
          content="../assets/twitter-pineapple.jpg"
        />
        <meta name="twitter:card" content="summary_large_image"></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

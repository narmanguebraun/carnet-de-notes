import Head from 'next/head'
import { TITLE, URL, CMS_NAME, HOME_OG_IMAGE_URL } from '../lib/constants'

export default function Meta() {
  return (
    <Head>
      <title>{TITLE}</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#000000" />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta name="title" content={TITLE} />
      <meta name="description" content={`A simple static blog using Next.js and ${CMS_NAME}.`} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={URL} />
      <meta property="og:title" content={TITLE} />
      <meta property="og:description" content={`A simple static blog using Next.js and ${CMS_NAME}.`} />
      <meta property="og:image" content={HOME_OG_IMAGE_URL} />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={URL} />
      <meta property="twitter:title" content={TITLE} />
      <meta property="twitter:description" content={`A simple static blog using Next.js and ${CMS_NAME}.`} />
      <meta property="twitter:image" content={HOME_OG_IMAGE_URL} />
    </Head>
  )
}
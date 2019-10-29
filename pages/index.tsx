import React from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import GHCorner from 'react-gh-corner'

const DynamicComponent = dynamic(
  () => import('../components/Photo'),
  { loading: () => <p>...</p>, ssr: false }
)

const DynamicGithubCorner = dynamic(
  () => Promise.resolve(GHCorner),
  { loading: () => <p>...</p>, ssr: false }
)

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel='icon' href='/favicon.ico' />
      <meta property="og:site_name" content="Pretty Text Generator"/>
      <meta property="og:title" content="Create images of pretty letters!"/>
      <meta property="og:image" content="https://repository-images.githubusercontent.com/217741173/15ca9080-f9e3-11e9-94ef-4aa7a1f08a46"/>
    </Head>

    <DynamicGithubCorner
      href="https://github.com/aluc-io/pretty-text-generator"
      position="top-right"
      bgColor="black"
      size={128}
      ariaLabel="Check my project"
      openInNewTab={true}
    />


    <div className='main'>
      <div className='title'>Pretty Text Generator</div>
      <DynamicComponent />
    </div>

    <style jsx global>{`
      body {
        padding: 0px;
        margin: 0px;
      }
    `}</style>
    <style jsx>{`
      .title {
        text-align: center;
        font-size: 48px;
        font-family: sans-serif;
        font-weight: 700;
        margin: 40px auto 40px auto;
      }
      .main {
        padding: 0px;
        width: 512px;
        margin: 0px auto 100px auto;
      }
    `}</style>
  </div>
)

export default Home

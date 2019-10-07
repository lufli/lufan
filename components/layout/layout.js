import React from 'react'
import Head from 'next/head'
import Nav from '../nav'

const Layout = (props) => {
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel='icon' href='/static/favicon.ico' importance='low' />
        <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
      </Head>
      <Nav />
      <div className="content">
        {props.children}
      </div>
      <style jsx>{`
        .content {
          max-width: 700px;
          margin: auto;
        }
      `}</style>
    </div>
  )
}

export default Layout

import React from 'react'
import Head from 'next/head'
import Nav from '../nav'
import { Segment } from 'semantic-ui-react'

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
      <Segment inverted vertical textAlign='center'>
        <span>*************************</span>
      </Segment>
      <style jsx>{`
        .content {
          width: 700px;
          margin: 0 auto;
          min-height: calc(100vh - 88px) !important;
          padding: 15px;
          overflow-y: hidden;
        }
      `}</style>
    </div>
  )
}

export default Layout

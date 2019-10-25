import React from 'react'
import App from 'next/app'

import Layout from '../components/Layout';

import '../css/global/styles.scss'
import '../css/global/flex.scss'

class MyApp extends App {
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  static async getInitialProps(appContext) {
    // calls page's `getInitialProps` and fills `appProps.pageProps`
    const appProps = await App.getInitialProps(appContext);

    return { ...appProps }
  }

  render() {
    const { Component, pageProps } = this.props
    const title = Component.displayName && Component.displayName.includes('withApollo') ? (Component.displayName.replace('withApollo(', '')).replace(')', '') : Component.name;
    console.log(this.props)
    return (
      <Layout title={title}>
        <Component {...pageProps} />
      </Layout>
    )
  }
}

export default MyApp
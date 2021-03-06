import App from 'next/app';
import { Provider } from 'react-redux';
import React from 'react';
import store from '../redux/store';

class MyApp extends App {
  static async getStaticProps({ Component, ctx }: any) {
    // TODO: remove that any
    const pageProps = Component.getStaticProps
      ? await Component.getStaticProps(ctx)
      : {};

    //Anything returned here can be access by the client
    return { pageProps: pageProps };
  }

  render() {
    //Information that was returned  from 'getInitialProps' are stored in the props i.e. pageProps
    const { Component, pageProps } = this.props;

    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

export default MyApp;

import Head from 'next/head'
import Nav from '../Nav';

const Layout = ({ title, children }) => (
  <>
    <Head>
      <title>{title} | Next Apollo Example</title>
    </Head>
    <Nav />
    <div className="content">
      {children}
    </div>
  </>
);

export default Layout;
import { Fragment } from 'react';
import Navbar from './Navbar';
import './layout.css';

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Navbar />
      <main>{children}</main>
    </Fragment>
  );
};

export default Layout;

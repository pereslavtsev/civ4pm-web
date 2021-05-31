import React from 'react';
import Head from 'next/head';
import { Navbar } from 'react-bootstrap';

const Header: React.FC = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title>Civ4 package manager</title>
      </Head>
      <Navbar staticTop>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">Civ4 package manager</a>
          </Navbar.Brand>
        </Navbar.Header>
      </Navbar>
    </>
  );
};

export default Header;

import { NextPage } from 'next';
import Header from '../components/Header';
import React from 'react';
import { Grid, PageHeader } from 'react-bootstrap';
import SubmitForm from '../components/SubmitForm';

const Submit: NextPage = () => {
  return (
    <>
      <Header />
      <Grid fluid={false}>
        <PageHeader>Submit a new package</PageHeader>
        <SubmitForm />
      </Grid>
    </>
  );
};

export default Submit;

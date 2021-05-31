import React from 'react';
import {
  Alert,
  Button,
  Col,
  ControlLabel,
  Form,
  FormControl,
  FormGroup,
  InputGroup,
} from 'react-bootstrap';
import { useFormik } from 'formik';
import { gql, GraphQLClient } from 'graphql-request';

const endpoint = 'http://localhost:3000/graphql';
const client = new GraphQLClient(endpoint);

const query = gql`
  mutation submitPackage($input: SubmitPackageInput!) {
    submitPackage(input: $input) {
      id
      name
      game
      civFanaticsID
      gitRepo
    }
  }
`;

const requestHeaders = {
  authorization: 'Bearer MY_TOKEN',
};

const SubmitForm: React.FC = () => {
  const {
    values,
    handleChange,
    handleSubmit,
    status,
    setStatus,
    isSubmitting,
    setSubmitting,
  } = useFormik({
    initialValues: {
      name: '',
      version: '0.1.0',
      civFanaticsID: '',
      gitRepo: '',
    },
    async onSubmit(values) {
      try {
        setSubmitting(true);
        const data = await client.request(
          query,
          {
            input: values,
          },
          requestHeaders
        );
        console.log('data', data);
      } catch (e) {
        setStatus(e);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <>
      {status && <Alert bsStyle="danger">{status.toString()}</Alert>}
      <Form
        horizontal
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit();
        }}
      >
        <FormGroup controlId="package.name">
          <Col componentClass={ControlLabel} sm={2}>
            Name
          </Col>
          <Col sm={8}>
            <FormControl
              type="text"
              label="package.name"
              placeholder="Enter a unique package name"
              value={values.name}
              name="name"
              onChange={handleChange}
              disabled={isSubmitting}
            />
          </Col>
        </FormGroup>
        <FormGroup controlId="package.version">
          <Col componentClass={ControlLabel} sm={2}>
            Version
          </Col>
          <Col sm={4}>
            <FormControl
              type="text"
              label="package.version"
              placeholder="Enter a initial package version"
              value={values.version}
              name="version"
              onChange={handleChange}
              disabled={isSubmitting}
            />
          </Col>
        </FormGroup>
        <FormGroup controlId="package.civfanatics">
          <Col componentClass={ControlLabel} sm={2}>
            CivFanatics file ID
          </Col>
          <Col sm={8}>
            <InputGroup>
              <InputGroup.Addon>
                https://forums.civfanatics.com/resources/
              </InputGroup.Addon>
              <FormControl
                type="text"
                label="package.civfanatics"
                name="civFanaticsID"
                onChange={handleChange}
                value={values.civFanaticsID}
                placeholder="Enter a file ID from CivFanatics Downloads"
                disabled={isSubmitting}
              />
            </InputGroup>
          </Col>
        </FormGroup>
        <FormGroup controlId="package.git">
          <Col componentClass={ControlLabel} sm={2}>
            Git repository
          </Col>
          <Col sm={8}>
            <InputGroup>
              <FormControl
                type="text"
                label="package.git"
                placeholder="Enter a git repository url"
                value={values.gitRepo}
                name="gitRepo"
                onChange={handleChange}
                disabled={isSubmitting}
              />
              <InputGroup.Addon>.git</InputGroup.Addon>
            </InputGroup>
          </Col>
        </FormGroup>
        <FormGroup>
          <Col smOffset={2} sm={8}>
            <Button type="submit" disabled={isSubmitting}>
              Submit
            </Button>
          </Col>
        </FormGroup>
      </Form>
    </>
  );
};

export default SubmitForm;

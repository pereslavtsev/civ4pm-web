import { NextPage } from 'next';
import Header from '../../components/Header';
import { Button, Col, Grid, Label, ListGroup, ListGroupItem, PageHeader, Panel, Row, Tab, Tabs } from 'react-bootstrap';
import React from 'react';

const Package: NextPage = () => {
  return (
    <>
      <Header />
      <Grid fluid={false}>
        <PageHeader>
          k-mod <small>0.1.3</small>
        </PageHeader>
        <Row>
          <Col md={8}>
            <Tabs
              defaultActiveKey={1}
              animation={false}
              id="noanim-tab-example"
            >
              <Tab eventKey={1} title="Overview">
                <div style={{ margin: '1em' }}> Overview</div>
              </Tab>
              <Tab eventKey={2} title="Tab 2">
                Tab 2 content
              </Tab>
              <Tab eventKey={3} title="Tab 3" disabled>
                Tab 3 content
              </Tab>
            </Tabs>
          </Col>
          <Col md={4}>
            <Button bsStyle="primary" bsSize="large" block>
              Install
            </Button>
            <Button bsSize="large" block>
              Download manually
            </Button>
            Install
            <div className="well">
              <code>civ4pm bts install k-mod</code>
            </div>
            <Panel bsStyle="primary">
              <Panel.Heading>
                <Panel.Title componentClass="h3">Statistics</Panel.Title>
              </Panel.Heading>
              <ListGroup>
                <ListGroupItem>  <span class="badge">14</span>
                  Cras justo odio</ListGroupItem>
                <ListGroupItem>Item 2</ListGroupItem>
                <ListGroupItem>&hellip;</ListGroupItem>
              </ListGroup>
            </Panel>
          </Col>
        </Row>
      </Grid>
    </>
  );
};

export default Package;

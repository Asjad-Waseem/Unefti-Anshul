import React from "react";
import "./TabProfile.css";
import { Tabs, Tab, Form, Row, Col, } from "react-bootstrap";
import Card from '../../Components/Card/Card'
import ActivityCard from '../../Components/Card/ActivityCard'
import Personal from './Setting/Personal'
import Password from './Setting/Password'

export default function TabProfile() {
  const [key, setKey] = React.useState('Sale');
  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
    >
      <Tab eventKey="Sale" title="On Sale">
        <Row style={{ marginTop: 50 }}>
          <Col md={4}>
            <Card />
          </Col>
          <Col md={4}>
            <Card />
          </Col>
          <Col md={4}>
            <Card />
          </Col>
          <Col md={4}>
            <Card />
          </Col>
          <Col md={4}>
            <Card />
          </Col>
          <Col md={4}>
            <Card />
          </Col>

        </Row>
      </Tab>
      <Tab eventKey="Created" title="Created">
        <Row style={{ marginTop: 50 }}>
          <Col md={4}>
            <Card />
          </Col>
          <Col md={4}>
            <Card />
          </Col>
          <Col md={4}>
            <Card />
          </Col>
          <Col md={4}>
            <Card />
          </Col>
          <Col md={4}>
            <Card />
          </Col>
          <Col md={4}>
            <Card />
          </Col>

        </Row>
      </Tab>
      <Tab eventKey="Activity" title="My Activity" >
        <Row>
          <Col md={8}>
            <ActivityCard />
            <ActivityCard />
            <ActivityCard />

          </Col>
          <Col md={4}>
            <div className="clear-all">
              <h6 className="walking-on-air">Filters</h6>
              <p className="clearr">Clear all</p>

            </div>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Listings" className="color-checkbox"/>
    <Form.Check type="checkbox" label="Purchases" className="color-checkbox"/>
    <Form.Check type="checkbox" label="Sales" className="color-checkbox"/>
    <Form.Check type="checkbox" label="Transfers" className="color-checkbox"/>
    <Form.Check type="checkbox" label="Bids" className="color-checkbox"/>
    <Form.Check type="checkbox" label="Likes" className="color-checkbox"/>
    <Form.Check type="checkbox" label="Followings" className="color-checkbox"/>


  </Form.Group>
          </Col>
        </Row>

      </Tab>
      <Tab eventKey="Setting" title="Settings" >
        <Row>
      <Col md = {6}>
      <Personal/>
      </Col>
      <Col md = {6}>
        <Password/>
      </Col>
      </Row>
      </Tab>
    </Tabs>
  );
}


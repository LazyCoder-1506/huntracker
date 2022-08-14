import { Col, Row, Space } from "antd";
import { useEffect, useState } from "react";
import ContactCard from "./contacts/ContactCard";
import ContactDetail from "./contacts/ContactDetail";

const BEARER_TOKEN = process.env.REACT_APP_BEARER_TOKEN;
const BASE_ID = process.env.REACT_APP_BASE_ID;
const CONTACTS_TABLE = process.env.REACT_APP_CONTACTS_TABLE_ID;

const PageLayout = () => {
  const [contacts, setContacts] = useState([])

  useEffect(() => {
    var axios = require('axios');

    var config = {
      method: 'GET',
      url: `https://api.airtable.com/v0/${BASE_ID}/${CONTACTS_TABLE}`,
      headers: { 
        'Authorization': `Bearer ${BEARER_TOKEN}`
      }
    };

    axios(config)
    .then(function (response) {
      // console.log(response.data);
      setContacts(response.data.records);
    })
    .catch(function (error) {
      console.log(error);
    });
  }, [])

  return (
    <>
      <Row gutter={0}>
        <Col xs={1}></Col>
        <Col xs={22}>
          <Row gutter={8}>
            <Col xs={24} lg={10}></Col>
            <Col xs={24} md={8} lg={6}>
              <Space direction="vertical" size={8} style={{display: 'flex'}}>
                {contacts.map(contact => (
                  <ContactCard key={contact.id} data={contact}></ContactCard>
                ))}
              </Space>
            </Col>
            <Col xs={24} md={16} lg={8}>
              <ContactDetail></ContactDetail>
            </Col>
          </Row>
        </Col>
        <Col xs={1}></Col>
      </Row>
    </>
  )
}

export default PageLayout;
import { Col, Row } from "antd";
import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { fetchAsyncContacts } from "../../features/contacts/contactSlice";
import ContactDetail from "../ContactDetail/ContactDetail";
import ContactListing from "../ContactListing/ContactListing";

const ContactPanel = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncContacts());
  }, [dispatch])

  return (
    <>
      <Row gutter={16}>
        <Col xs={24} md={10}>
          <ContactListing />
        </Col>
        <Col xs={24} md={14}>
          <ContactDetail />
        </Col>
      </Row>
    </>
  )
}

export default ContactPanel;
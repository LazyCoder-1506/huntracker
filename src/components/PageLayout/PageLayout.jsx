import { Col, Row } from "antd";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAsyncContacts } from "../../features/contacts/contactSlice";
import ContactPanel from "../ContactPanel/ContactPanel";

const PageLayout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncContacts());
  }, [dispatch])

  return (
    <>
      <Row gutter={0}>
        <Col xs={1}></Col>
        <Col xs={22}>
          <Row gutter={8}>
            <Col xs={24} md={10}></Col>
            <Col xs={24} md={14}>
              <ContactPanel />
            </Col>
          </Row>
        </Col>
        <Col xs={1}></Col>
      </Row>
    </>
  )
}

export default PageLayout;
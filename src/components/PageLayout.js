import { Col, Row, Space } from "antd";
import ContactCard from "./contacts/ContactCard";

const PageLayout = () => (
  <>
    <Row gutter={0}>
      <Col xs={1}></Col>
      <Col xs={22}>
        <Row gutter={8}>
          <Col xs={24} md={16} lg={10}></Col>
          <Col xs={24} md={12} lg={6}>
            <Space direction="vertical" size={8} style={{display: 'flex'}}>
              <ContactCard></ContactCard>
              <ContactCard></ContactCard>
              <ContactCard></ContactCard>
              <ContactCard></ContactCard>
            </Space>
          </Col>
        </Row>
      </Col>
      <Col xs={1}></Col>
    </Row>
    
  </>
)

export default PageLayout;
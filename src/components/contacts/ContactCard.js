import { Badge, Card, Col, Row } from "antd";
import React from "react";

const ContactCard = () => (
  <>
    <Badge.Ribbon text="Hello">
      <Card size="small" hoverable style={{width:"100%", marginBottom:"8px", border:"1px solid lightgrey"}}>
        <p style={{"margin-bottom":0}}><b>John Doe</b></p>
        <Row justify="space-between">
          <Col span={12}>
            <p><small>Google London</small></p>
          </Col>
          <Col span={12} style={{textAlign: "right"}}>
            <p><small>CS Dual (2014 - 2019)</small></p>
          </Col>
        </Row>
      </Card>
    </Badge.Ribbon>
  </>
)

export default ContactCard;
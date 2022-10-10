import { Badge, Card, Col, Row } from "antd";
import React from "react";
import "./ContactCard.scss"

function handleClick(id) {
  console.log("Clicked " + id);
}

const ContactCard = (props) => (
  //TODO : this is bad method of implementing onclick, causes multiple unnecessary re-renders. improve
  <div onClick={() => handleClick(props.data.fields.Name)}>
    <Badge.Ribbon text={props.data.fields['Network level']}>
      <Card size="small" hoverable className="contact-card">
        <p><b>{props.data.fields.Name}</b></p>
        <Row justify="space-between">
          <Col span={12}>
            <p><small>{props.data.fields.Company} {props.data.fields.Location}</small></p>
          </Col>
          <Col span={12} className="text-right">
            <p><small>{props.data.fields.Degree} ({props.data.fields['Admission Year']} - {props.data.fields['Graduating Year']})</small></p>
          </Col>
        </Row>
      </Card>
    </Badge.Ribbon>
  </div>
)

export default ContactCard;
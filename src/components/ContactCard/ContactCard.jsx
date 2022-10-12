import { Badge, Card, Col, Row } from "antd";
import React from "react";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { selectContact } from "../../features/contacts/contactSlice";
import "./ContactCard.scss"

// function handleClick(id) {
//   const dispatch = useDispatch();
//   dispatch(selectContact(id));
//   console.log("Clicked " + id);
// }

const ContactCard = (props) => {
  //TODO : this is bad method of implementing onclick, causes multiple unnecessary re-renders. improve
  const dispatch = useDispatch();

  const handleContactClick = useCallback((contactId) => {
    console.log("Clicked contact : " + contactId);
    dispatch(selectContact(contactId));
  }, [])
  
  const {data} = props;
  
  return (
    <div onClick={() => handleContactClick(data.id)}>
      <Badge.Ribbon text={data.fields['Network level']}>
        <Card size="small" hoverable className="contact-card">
          <p><b>{data.fields.Name}</b></p>
          <Row justify="space-between">
            <Col span={12}>
              <p><small>{data.fields.Company} {data.fields.Location}</small></p>
            </Col>
            <Col span={12} className="text-right">
              <p><small>{data.fields.Degree} ({data.fields['Admission Year']} - {data.fields['Graduating Year']})</small></p>
            </Col>
          </Row>
        </Card>
      </Badge.Ribbon>
    </div>
  )
}

export default ContactCard;
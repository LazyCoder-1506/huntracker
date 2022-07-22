import { Badge, Card } from "antd";
import React from "react";

const ContactCard = () => (
  <>
    <Badge.Ribbon
      text="Hello"
    >
      <Card
        size="small"
        hoverable
        style={{width:300}}
      >
        <p style={{"margin-bottom":0}}><b>John Doe</b></p>
        <p><small>Google London</small></p>
      </Card>
    </Badge.Ribbon>
  </>
)

export default ContactCard;
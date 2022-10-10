import { Empty, Space, Spin } from "antd";
import { useSelector } from "react-redux"
import { getAllContacts } from "../../features/contacts/contactSlice"
import ContactCard from "../ContactCard/ContactCard";

const ContactListing = () => {
  const contacts = useSelector(getAllContacts);

  let renderContacts = ''

  renderContacts = contacts.length > 0 ? (
    contacts.map(contact => (
      <ContactCard key={contact.id} data={contact} />
    ))
  ) : (
    <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
  )

  return (
    <Space direction="vertical" size={8} style={{display: 'flex'}}>
      {renderContacts.length > 0 ? renderContacts : (
        <Spin tip="Loading..."></Spin>
      )}
    </Space>
  );
};

export default ContactListing;
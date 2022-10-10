import { Space } from "antd";
import { useSelector } from "react-redux"
import { getAllContacts } from "../../features/contacts/contactSlice"
import ContactCard from "../ContactCard/ContactCard";

const ContactListing = () => {
  const contacts = useSelector(getAllContacts);

  let renderContacts = '';

  renderContacts = contacts.length > 0 ? (
    contacts.map(contact => (
      <ContactCard key={contact.id} data={contact} />
    ))
  ) : (
    <div className="contacts_empty">No Contacts</div>
  )

  return (
    <Space direction="vertical" size={8} style={{display: 'flex'}}>
      {renderContacts}
    </Space>
  );
};

export default ContactListing;
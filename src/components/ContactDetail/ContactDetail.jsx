import { Button, Card, Col, Dropdown, Row, Menu, Space, Typography, Empty } from "antd"
import { EllipsisOutlined, MailOutlined, LinkedinFilled, PhoneFilled } from '@ant-design/icons';
import { useSelector } from "react-redux";
import { getSelectedContactDetails } from "../../features/contacts/contactSlice";

const ContactDetail = () => {
  const data = useSelector(getSelectedContactDetails);

  const menu = (
    <Menu
      items={[
        {
          label: <a href="https://www.antgroup.com">Edit</a>,
          key: '0',
        },
        {
          label: <a href="https://www.aliyun.com">Delete</a>,
          key: '1',
        },
      ]}
    />
  );

  let renderContactDetails = data ? (
    <Card className="contact-detail-parent">
      <Space direction="vertical" size={16} className="d-flex">
        <section>
          <Row justify="space-between" className="mb-4">
            <Col span={20}>
              <Typography.Title level={4} style={{marginBottom:"0"}}>{data.fields.Name}</Typography.Title>
            </Col>
            <Col span={4} className="text-right">
              <Dropdown overlay={menu} trigger={['click']}>
                <Button shape="circle" size="small" icon={<EllipsisOutlined />} />
              </Dropdown>
            </Col>
          </Row>
          <Row className="mb-2">
            <Col span={24}>
              <p>{data.fields.Designation} - {data.fields.Company}, {data.fields.Location}</p>
            </Col>
          </Row>
          <Row className="mb-16">
            <Col span={24}>
              <p>{data.fields.Degree} ({data.fields['Admission Year']} - {data.fields['Graduating Year']})</p>
            </Col>
          </Row>
          <Row gutter={8}>
            <Col span={8}>
              <Button size="small" shape="round" block icon={<MailOutlined />} />
            </Col>
            <Col span={8}>
              <a href={data.fields.Linkedin ? data.fields.Linkedin : '#'} target="_blank" rel="noopener noreferrer">
                <Button size="small" shape="round" block icon={<LinkedinFilled />} />
              </a>
            </Col>
            <Col span={8}>
              <Button size="small" shape="round" block icon={<PhoneFilled />} />
            </Col>
          </Row>
        </section>
        
      </Space>
    </Card>
  ) : (
    <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
  )

  return (
    <>
      {renderContactDetails}
    </>
  )
}

export default ContactDetail
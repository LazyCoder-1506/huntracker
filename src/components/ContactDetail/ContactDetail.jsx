import { Button, Card, Col, Dropdown, Row, Menu, Space, Typography } from "antd"
import { EllipsisOutlined, MailOutlined, LinkedinFilled, PhoneFilled } from '@ant-design/icons';

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

const ContactDetail = () => (
  <>
    <Card style={{width:"100%", border:"1px solid lightgrey"}}>
      <Space direction="vertical" size={16} style={{display:"flex"}}>
        <section>
          <Row justify="space-between" style={{marginBottom:"4px"}}>
            <Col span={20}>
              <Typography.Title level={4} style={{marginBottom:"0"}}>Firstname Lastname</Typography.Title>
            </Col>
            <Col span={4} style={{textAlign:"right"}}>
              <Dropdown overlay={menu} trigger={['click']}>
                <Button shape="circle" size="small" icon={<EllipsisOutlined />} />
              </Dropdown>
            </Col>
          </Row>
          <Row style={{marginBottom:"2px"}}>
            <Col span={24}>
              <p>Designation - Company, Location</p>
            </Col>
          </Row>
          <Row style={{marginBottom:"16px"}}>
            <Col span={24}>
              <p>Degree (Admission Year - Graduation Year)</p>
            </Col>
          </Row>
          <Row gutter={8}>
            <Col span={8}>
              <Button size="small" shape="round" block icon={<MailOutlined />} />
            </Col>
            <Col span={8}>
              <Button size="small" shape="round" block icon={<LinkedinFilled />} />
            </Col>
            <Col span={8}>
              <Button size="small" shape="round" block icon={<PhoneFilled />} />
            </Col>
          </Row>
        </section>
        
      </Space>
    </Card>
  </>
)

export default ContactDetail
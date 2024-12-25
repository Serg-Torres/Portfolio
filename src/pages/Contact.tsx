import React from 'react';
import { Row, Col, Form, Input, Button, Typography, Space, Card, Image } from 'antd';
import { PhoneOutlined, MailOutlined } from '@ant-design/icons';
import emailjs from 'emailjs-com';
import '../styles/Contact.css'


const { Title, Text } = Typography;

const Contact = () => {
    const handleFormSubmit = (values: any) => {
        const serviceID = 'service_qml3von';
        const templateID = 'template_9seu6cj';
        const userID = 'EMg1BA_f_Wy8wox4f';


        if (!serviceID || !templateID || !userID) {
            console.error('Missing emailJS configuration in file');
            alert('configuration error. Please contact support');
            return;
        }

        const templateParams = {
            from_name: values.name,
            from_email: values.email,
            company: values.company,
            phone: values.phone,
            message: values.message
        }

        emailjs.send(serviceID, templateID, templateParams, userID)
            .then((response) => {
                console.log('SUCCESS', response.status, response.text);
                alert('Message has been sucessfully sent');
            })
            .catch((error) => {
                console.error("FAILED", error);
                alert('Failed to send message. Please try again.')
            })
    };

    return (
        <div style={{ padding: '50px 20px' }} className='wrapper'>
            <Image
                preview={false}
                src='https://www.shutterstock.com/image-photo/white-popular-contact-web-icons-600nw-1617540217.jpg'
                className='landingImage'
            />
            <div style={{ textAlign: 'center', marginBottom: '50px', color: 'white' }} className="heading">
                <Title level={2} style={{ color: "white" }}>Contact Us</Title>
                <Text style={{ color: "white" }}>If you have any questions, feel free to reach out!</Text>
            </div>

            {/* Centered Contact Form */}
            <div className="formContent">
                <Col xs={24} md={12}>
                    <Card bordered={false} className='formBox'>
                        <Form
                            layout="vertical"
                            onFinish={handleFormSubmit}
                            style={{ maxWidth: '100%' }}
                        >
                            <Form.Item
                                label="Your Name"
                                name="name"
                                rules={[{ required: true, message: 'Please enter your name!' }]}
                            >
                                <Input placeholder="John Doe" className='inputForm' />
                            </Form.Item>

                            <Form.Item
                                label="Email"
                                name="email"
                                rules={[
                                    { required: true, message: 'Please enter your email!' },
                                    { type: 'email', message: 'Please enter a valid email!' },
                                ]}
                            >
                                <Input placeholder="john.doe@example.com" className='inputForm' />
                            </Form.Item>

                            <Form.Item
                                label="Phone"
                                name="phone"
                                rules={[
                                    { required: true, message: 'Please enter your phone!' },
                                ]}
                            >
                                <Input placeholder="xxx-xxx-xxxx" className='inputForm' />
                            </Form.Item>

                            <Form.Item
                                label="Company"
                                name="company"
                                rules={[{ message: 'Please enter company name' }]}
                            >
                                <Input placeholder="Company" className='inputForm' />
                            </Form.Item>

                            <Form.Item
                                label="Message"
                                name="message"
                                rules={[{ required: true, message: 'Please enter your message!' }]}
                            >
                                <Input.TextArea rows={4} placeholder="Write your message here..." className='inputForm' />
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" block>
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    </Card>
                </Col>
            </div>

            {/* Contact Details */}
            <footer>
                <Row gutter={[32, 32]} className='footer-row'>
                    <Col xs={24} md={8} className='footer-col'>
                        <Space direction="vertical" size='middle'>
                            <PhoneOutlined className='antIcon' />
                            <Title className='footerText' level={5}>Phone</Title>
                            <Text className='footerText'>(407) 718-2397</Text>
                        </Space>
                    </Col>

                    <Col xs={24} md={8}>
                    </Col>

                    <Col xs={24} md={8} className='footer-col'>
                        <Space direction="vertical" size='middle'>
                            <MailOutlined className='antIcon' />
                            <Title className='footerText' level={5}>Email</Title>
                            <Text className='footerText'>sergiotorres.devop@gmail.com</Text>
                        </Space>
                    </Col>
                </Row>
            </footer>
        </div>
    );
};

export default Contact;

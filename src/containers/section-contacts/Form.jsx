import React from 'react';
import { Form, Input } from 'antd';
import 'antd/dist/antd.css';

const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not validate email!',
    },
};

const FormContact = () => {
    const onFinish = values => {
        console.log(values)
    };
    return (
        <Form name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
            <Form.Item name={['user', 'name']} label="Full Name" rules={[{ required: true }]}>
                <Input placeholder='Your Name' />
            </Form.Item>
            <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email', required: true }]}>
                <Input placeholder='Your Email' />
            </Form.Item>
            <Form.Item name={['user', 'Message']} label="Message" >
                <Input.TextArea rows={4} placeholder='Your Message'/>
            </Form.Item>
            <Form.Item>
                <button type="submit" className='btn-main w-100 text-uppercase'>
                    Submit
                </button>
            </Form.Item>
        </Form>
    );
};

export default FormContact

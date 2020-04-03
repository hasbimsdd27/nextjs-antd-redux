import React, { useState } from "react";
import { Modal, Button, Form, Input } from "antd";
import { EditOutlined } from "@ant-design/icons";

const updateClassModal = () => {
    const [modal, showModal] = useState(false);
    const handleOk = e => {
        showModal(false);
    };

    const handleCancel = e => {
        showModal(false);
    };
    const onFinish = values => {
        // console.log("Success:", values);
        showModal(false);
    };

    const CloseModal = () => {
        showModal(true);
    };

    const onFinishFailed = errorInfo => {
        // console.log("Failed:", errorInfo);
    };
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 }
    };
    const tailLayout = {
        wrapperCol: { offset: 8, span: 16 }
    };
    return (
        <div>
            <Button
                type="primary"
                style={{
                    marginBottom: 16
                }}
                onClick={CloseModal}
            >
                <EditOutlined />
            </Button>
            <Modal
                title="Basic Modal"
                visible={modal}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={null}
            >
                <Form
                    {...layout}
                    name="basic"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        label="Name"
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: "Please input class name!"
                            }
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            Add Class
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};

export default updateClassModal;

import React, { useState, useEffect } from "react";
import { withRedux } from "../../../lib/redux";
import { useSelector } from "react-redux";
import Classes from "../../../_actions/Class";
import { Modal, Button, Form, Input, Select } from "antd";

import { EditOutlined } from "@ant-design/icons";

const addClassModal = () => {
    const { addClass: AddClassStatus, classes, classesSelect } = useSelector(
        state => state.classes
    );
    const { GetClasses, AddClass } = Classes();
    const [modal, showModal] = useState(false);

    useEffect(() => {}, []);
    //Function Modal
    const handleOk = e => {
        showModal(false);
    };

    //Function Form
    const handleCancel = e => {
        showModal(false);
    };
    const onFinish = values => {
        console.log("Success:", AddClassStatus);
        AddClass({
            id_parent: values.parent.value,
            name: values.name
        });
        if (AddClassStatus) {
            GetClasses();
            console.log(classes);
            showModal(false);
        }
    };

    const CloseModal = () => {
        showModal(true);
    };

    const onFinishFailed = errorInfo => {
        console.log("Failed:", errorInfo);
    };

    //Function Select
    const onChange = value => {
        console.log(`selected`, value);
    };

    const onBlur = () => {
        console.log("blur");
    };

    const onFocus = () => {
        console.log("focus");
    };

    const onSearch = val => {
        console.log("search:", val);
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
                <EditOutlined /> Add a Class
            </Button>
            <Modal
                title="Add a Class"
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

                    <Form.Item
                        label="Parent"
                        name="parent"
                        rules={[
                            {
                                required: true,
                                message: "Please input Parent!"
                            }
                        ]}
                    >
                        <Select
                            labelInValue
                            options={classesSelect.results}
                            style={{ width: 200 }}
                            placeholder="Select a parent"
                            optionFilterProp="parent"
                            onChange={onChange}
                            onFocus={onFocus}
                            onBlur={onBlur}
                        />
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

export default withRedux(addClassModal);

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 }
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 }
};

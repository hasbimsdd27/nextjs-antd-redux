import React, { useState, useEffect } from "react";
import { withRedux } from "../../../lib/redux";
import { useSelector } from "react-redux";
import Classes from "../../../_actions/Class";
import { Modal, Button, Form, Input, Select, Checkbox } from "antd";

import { EditOutlined } from "@ant-design/icons";

const updateClassModal = ({ data }) => {
    const { GetClasses, AddClass, GetDetailsClass } = Classes();
    const [modal, showModal] = useState(false);
    const [checked, setChecked] = useState(false);
    const [name, setName] = useState([
        {
            name: ["name"],
            value: "Value"
        },
        {
            name: ["parent"],
            value: 1
        }
    ]);

    useEffect(() => {
        if (modal) {
            async function fetchData() {
                await GetDetailsClass(data.id);
            }
            fetchData();
        }
    }, [modal]);

    const {
        addClass: AddClassStatus,
        classes,
        classesSelect,
        detailsClass
    } = useSelector(state => state.classes);

    //Function Modal
    const handleOk = e => {
        showModal(false);
    };

    //Function Form
    const handleCancel = e => {
        showModal(false);
    };
    const onFinish = values => {
        // AddClass({
        //     id_parent: values.parent.value,
        //     name: values.name
        // });
        // if (AddClassStatus) {
        //     GetClasses();
        //     console.log(classes);
        //     showModal(false);
        // }
        console.log(values);
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
                <EditOutlined />
            </Button>
            <Modal
                title="Update a Class"
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
                    fields={name}
                    initialValues={{
                        parent: ["1"]
                    }}
                >
                    <Form.Item label="Name" name="name">
                        <Input />
                    </Form.Item>

                    <Form.Item label="Parent" name="parent">
                        {/* <Checkbox
                            defaultChecked={checked}
                            onClick={() => setChecked(!checked)}
                        />
                        {"   "}
                        {checked ? (
                            <Select
                                labelInValue
                                name="parent"
                                options={classesSelect.results}
                                style={{ width: 200 }}
                                placeholder="Select a parent"
                                optionFilterProp="parent"
                                onChange={onChange}
                                onFocus={onFocus}
                                onBlur={onBlur}
                            />
                        ) : (
                            <Input type="hidden" name="parent" />
                        )} */}
                        <Select
                            labelInValue
                            name="parent"
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
                            Update a Class
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};

export default withRedux(updateClassModal);

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 }
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 }
};

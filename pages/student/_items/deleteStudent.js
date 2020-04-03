import React from "react";
import { Modal, Button } from "antd";
import { DeleteOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
const { confirm } = Modal;
const deleteClassModal = props => {
    const showDeleteConfirm = () => {
        const { nameData } = props;
        confirm({
            title: `Are you sure delete ${nameData} class?`,
            icon: <ExclamationCircleOutlined />,
            content:
                "If this class is deleted, then the data associated with this class will be lost.",
            okText: "Yes",
            okType: "danger",
            cancelText: "No",
            onOk() {
                console.log("OK");
            },
            onCancel() {
                console.log("Cancel");
            }
        });
    };
    return (
        <Button type="danger" onClick={showDeleteConfirm}>
            <DeleteOutlined />
        </Button>
    );
};

export default deleteClassModal;

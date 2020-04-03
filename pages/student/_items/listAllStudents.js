import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "antd";

import UpdateStudent from "./updateStudent";
import DeleteStudent from "./deleteStudent";

const columns = [
    {
        title: "Name",
        dataIndex: "first_name",
        sorter: true,
        render: first_name => `${first_name}`,
        width: "20%"
    },
    {
        title: "Action",
        dataIndex: "first_name",
        key: "operation",
        fixed: "right",
        width: 100,
        render: first_name => {
            return (
                <>
                    {" "}
                    <UpdateStudent nameData={first_name} />
                    <DeleteStudent nameData={first_name} />
                </>
            );
        }
    }
];

const listClass = () => {
    const [classData, setClassData] = useState([]);
    const [pagination, setPagination] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetch();
    }, []);

    const handleTableChange = (pagination, filters, sorter) => {
        const pager = { ...pagination };
        pager.current = pagination.current;
        setPagination(pager);
        fetch({
            results: pagination.pageSize,
            page: pagination.current,
            sortField: sorter.field,
            sortOrder: sorter.order,
            ...filters
        });
    };

    const fetch = (params = {}) => {
        // console.log("params:", params);
        setLoading(true);
        const config = {
            method: "get",
            url: "http://localhost:5000/api/v1/students",
            params: {
                results: 10,
                ...params
            }
        };
        axios(config).then(data => {
            const pagination = { ...pagination };
            // Read total count from server
            pagination.total = data.data.counts;
            setLoading(false);
            setClassData(data.data.results);
            setPagination(pagination);
            console.log(data);
        });
    };
    return (
        <Table
            columns={columns}
            rowKey={id => id}
            dataSource={classData}
            pagination={pagination}
            loading={loading}
            onChange={handleTableChange}
        />
    );
};

export default listClass;

import React, { useState, useEffect } from "react";
import { withRedux } from "../../../lib/redux";
import { useSelector } from "react-redux";
import Classes from "../../../_actions/Class";
// import axios from "axios";
import { Table } from "antd";

import UpdateClass from "./updateClass";
import DeleteClass from "./deleteClass";

const columns = [
    {
        title: "Name",
        dataIndex: "name",
        sorter: true,
        render: name => `${name}`,
        width: "20%"
    },
    {
        title: "Action",
        dataIndex: ["id", "name"],
        key: "operation",
        fixed: "right",
        width: 100,
        render: (id, name) => {
            return (
                <>
                    {" "}
                    <UpdateClass data={name} />
                    <DeleteClass data={name} />
                </>
            );
        }
    }
];

const listClass = () => {
    const { GetClasses, GetClassAllSelect, results } = Classes();
    const [classData, setClassData] = useState([]);
    const [pagination, setPagination] = useState({});
    const [loading, setLoading] = useState(false);

    async function fetchData() {
        await GetClasses();
        await GetClassAllSelect();
        // await console.log("halo", results);
    }

    useEffect(() => {
        fetchData();
        // setClassData(dataClasses.results);
    }, []);

    const { classes: dataClasses } = useSelector(state => state.classes);

    useEffect(() => {
        setPagination({ total: dataClasses.counts });
    }, [dataClasses]);

    const handleTableChange = (pagination, filters, sorter) => {
        const pager = { ...pagination };
        pager.current = pagination.current;
        setPagination(pager);

        GetClasses({
            results: pagination.pageSize,
            page: pagination.current,
            sortField: sorter.field,
            sortOrder: sorter.order,
            ...filters
        });
    };

    return (
        <Table
            columns={columns}
            rowKey={id => id}
            dataSource={dataClasses.results}
            pagination={pagination}
            loading={loading}
            onChange={handleTableChange}
        />
    );
};

export default withRedux(listClass);

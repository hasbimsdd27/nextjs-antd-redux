import React, { useEffect } from "react";
import { Layout, Breadcrumb, PageHeader } from "antd";
import { PieChartOutlined } from "@ant-design/icons";
const { Header, Content } = Layout;

import useCounter from "../_actions/Class";

import MainLayout from "../_components/MainLayout";

const detailPage = {
    title: "Dashboard",
    navSelected: {
        main: "dashboard",
        sub: ""
    }
};

const Main = () => {
    useEffect(() => {}, []);
    return (
        <MainLayout
            navSelected={detailPage.navSelected}
            pageTitle={detailPage.title}
        >
            <Header className="site-layout-background" style={Style.Header}>
                <PageHeader
                    className="site-page-header"
                    title={detailPage.title}
                />
            </Header>
            <Content style={{ margin: "0 16px" }}>
                <Breadcrumb style={{ margin: "16px 0" }}>
                    <Breadcrumb.Item>
                        <PieChartOutlined /> Dashboard
                    </Breadcrumb.Item>
                </Breadcrumb>
                <div className="site-layout-background" style={Style.Content}>
                    <h1>{detailPage.title}</h1>
                </div>
            </Content>
        </MainLayout>
    );
};

export default Main;
const Style = {
    Header: {
        background: "#fff",
        padding: 0
    },
    Content: {
        background: "#fff",
        padding: 24,
        minHeight: 360
    }
};

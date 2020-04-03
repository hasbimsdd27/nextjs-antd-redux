import React from "react";
import { Layout, Breadcrumb, PageHeader } from "antd";
import { PieChartOutlined } from "@ant-design/icons";
const { Header, Content } = Layout;

import MainLayout from "../../_components/MainLayout";
import AddClassModal from "./_items/addClass";
import ListClassSection from "./_items/listClass";

const detailPage = {
    title: "Class",
    navSelected: {
        main: "class",
        sub: ""
    }
};

const ClassPage = () => {
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
                    <Breadcrumb.Item>{detailPage.title}</Breadcrumb.Item>
                </Breadcrumb>
                <div className="site-layout-background" style={Style.Content}>
                    <AddClassModal />
                    <ListClassSection />
                </div>
            </Content>
        </MainLayout>
    );
};
export default ClassPage;

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

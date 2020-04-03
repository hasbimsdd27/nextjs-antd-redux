import { Layout, Breadcrumb, PageHeader } from "antd";
import { PieChartOutlined } from "@ant-design/icons";
const { Header, Content } = Layout;

import MainLayout from "../_components/MainLayout";

const detailPage = {
    title: "Room",
    navSelected: {
        main: "room",
        sub: ""
    }
};

const RoomPage = () => {
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
                    <h1>{detailPage.title}</h1>
                </div>
            </Content>
        </MainLayout>
    );
};
export default RoomPage;
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

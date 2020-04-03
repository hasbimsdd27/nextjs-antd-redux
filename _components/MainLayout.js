import { Layout } from "antd";
import Head from "next/head";
import SideNav from "./SideNavLayout";
import Footer from "./FooterLayout";

const MainLayout = ({ children, navSelected, pageTitle }) => {
    return (
        <>
            <Head>
                <title>KBL - {pageTitle}</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                    key="viewport"
                />
            </Head>
            <Head>
                <meta
                    name="viewport"
                    content="initial-scale=1.2, width=device-width"
                    key="viewport"
                />
            </Head>
            <Layout style={{ minHeight: "100vh" }}>
                <SideNav navSelected={navSelected} />
                <Layout className="site-layout">
                    {children}
                    <Footer />
                </Layout>
            </Layout>
        </>
    );
};

export default MainLayout;

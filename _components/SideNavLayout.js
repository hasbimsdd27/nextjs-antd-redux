import React, { useState } from "react";
import Link from "next/link";
import { Layout, Menu } from "antd";
import {
    SettingOutlined,
    PieChartOutlined,
    TeamOutlined,
    BankOutlined,
    TagsOutlined,
    GoldOutlined,
    CalendarOutlined,
    MailOutlined,
    CarryOutOutlined,
    ReconciliationOutlined,
    TransactionOutlined
} from "@ant-design/icons";
const { Sider } = Layout;
const { SubMenu } = Menu;

const SideNavLayout = ({ navSelected }) => {
    const { sub: navSelectedSub, main: navSelectedMain } = navSelected;
    const [collapsed, setCollapsed] = useState(0);
    return (
        <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
            <div className="logo" style={Style.logo} />
            <Menu
                theme="dark"
                mode="inline"
                defaultOpenKeys={[navSelectedSub]}
                defaultSelectedKeys={[navSelectedMain]}
            >
                <Menu.Item key="dashboard">
                    <Link href="/">
                        <a>
                            <PieChartOutlined />
                            <span>Dashboard</span>
                        </a>
                    </Link>
                </Menu.Item>
                <Menu.Item key="class">
                    <Link href="/class">
                        <a>
                            <TeamOutlined />
                            <span>Class</span>
                        </a>
                    </Link>
                </Menu.Item>
                <Menu.Item key="room">
                    <Link href="/room">
                        <a>
                            <BankOutlined />
                            <span>Room</span>
                        </a>
                    </Link>
                </Menu.Item>
                <Menu.Item key="branch">
                    <Link href="/branch">
                        <a>
                            <TagsOutlined />
                            <span>Branch</span>
                        </a>
                    </Link>
                </Menu.Item>
                <Menu.Item key="student-class">
                    <Link href="/student-class">
                        <a>
                            <GoldOutlined />
                            <span>Student - Class</span>
                        </a>
                    </Link>
                </Menu.Item>
                <SubMenu
                    key="email"
                    title={
                        <span>
                            <MailOutlined />
                            <span>Email</span>
                        </span>
                    }
                >
                    <Menu.Item key="email-send">Send Form</Menu.Item>
                    <Menu.Item key="email-groups">Groups</Menu.Item>
                    <Menu.Item key="email-history">History</Menu.Item>
                </SubMenu>
                <SubMenu
                    key="user"
                    title={
                        <span>
                            <TeamOutlined />
                            <span>User</span>
                        </span>
                    }
                >
                    <Menu.Item key="user">
                        <Link href="/user">
                            <a>All</a>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="instructors">
                        <Link href="/user/instructor">
                            <a>Instructor</a>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="employees">
                        <Link href="/user/employee">
                            <a>Employee</a>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="admin">
                        <Link href="/user/admin">
                            <a>Admin</a>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="branch_admin">
                        <Link href="/user/branch_admin">
                            <a>Branch Admin</a>
                        </Link>
                    </Menu.Item>
                </SubMenu>
                <SubMenu
                    key="student"
                    title={
                        <span>
                            <TeamOutlined />
                            <span>Student</span>
                        </span>
                    }
                >
                    <Menu.Item key="studentAll">
                        <Link href="/student">
                            <a>All</a>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="student-paid">
                        <Link href="/students/paid">
                            <a>Paid</a>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="student-unpaid">
                        <Link href="/students/unpaid">
                            <a>Unpaid</a>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="student-trial">
                        <Link href="/students/trial">
                            <a>Trial</a>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="student-pending">
                        <Link href="/students/pending">
                            <a>Pending</a>
                        </Link>
                    </Menu.Item>
                </SubMenu>
                <Menu.Item key="schedule">
                    <Link href="/schedule">
                        <a>
                            <CalendarOutlined />
                            <span>Schedule</span>
                        </a>
                    </Link>
                </Menu.Item>
                <Menu.Item key="attendance">
                    <Link href="/attendance">
                        <a>
                            <CarryOutOutlined />
                            <span>Attendance</span>
                        </a>
                    </Link>
                </Menu.Item>

                <Menu.Item key="transaction">
                    <Link href="/transaction">
                        <a>
                            <ReconciliationOutlined />
                            <span>Transaction</span>
                        </a>
                    </Link>
                </Menu.Item>
                <Menu.Item key="payroll">
                    <Link href="/payroll">
                        <a>
                            <TransactionOutlined />
                            <span>Payroll</span>
                        </a>
                    </Link>
                </Menu.Item>
                <SubMenu
                    key="settings"
                    title={
                        <span>
                            <SettingOutlined />
                            <span>Settings</span>
                        </span>
                    }
                >
                    <Menu.Item key="23">Student Level</Menu.Item>
                    <Menu.Item key="24">Instructor Level</Menu.Item>
                    <Menu.Item key="25">Participant Type</Menu.Item>
                    <Menu.Item key="26">Access Log</Menu.Item>
                </SubMenu>
            </Menu>
        </Sider>
    );
};

export default SideNavLayout;

const Style = {
    logo: {
        height: "32px",
        background: "rgba(255, 255, 255, 0.2)",
        margin: "16px"
    }
};

import React, { useEffect } from "react";
import { Form, Input, Button } from "antd";
import Router from "next/router";
import axios from "axios";
import { API } from "../../global/Api";
const LoginPage = () => {
    useEffect(() => {
        const status = localStorage.getItem("appState");
        if (status) {
            Router.push("/");
        }
    }, []);
    const onFinish = values => {
        const obj = {
            username: values.username,
            password: values.password
        };
        axios
            .post("http://localhost:8000/api/user/login", obj)
            .then(response => {
                return response;
            })
            .then(json => {
                if (json.data.success) {
                    let userData = {
                        username: json.data.data.username,
                        id: json.data.data.id,
                        email: json.data.data.email,
                        auth_token: json.data.data.auth_token,
                        branchId: json.data.data.branch_id,
                        branchName: json.data.data.branch_name,
                        roleId: json.data.data.role_id,
                        timestamp: new Date().toString()
                    };
                    let appState = {
                        isLoggedIn: true,
                        isLogout: false,
                        user: userData
                    };
                    // save app state with user date in local storage
                    localStorage["appState"] = JSON.stringify(appState);
                    Router.push("/");
                } else alert("Login Failed!");
            })
            .catch(error => {
                alert(`An Error Occured! ${error}`);
            });
    };

    const onFinishFailed = errorInfo => {
        console.log("Failed:", errorInfo);
    };

    return (
        <div style={Style.Wrap}>
            <Form
                name="basic"
                style={Style.LoginForm}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <div style={Style.FormHeader}>
                    <h3>Login Form</h3>
                    <p>Login to access your dashboard</p>
                </div>

                <Form.Item
                    style={Style.FormGroup}
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: "Please input your username!"
                        }
                    ]}
                >
                    <Input
                        type="text"
                        style={Style.FormInput}
                        placeholder="Username"
                    />
                </Form.Item>
                <Form.Item
                    style={Style.FormGroup}
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: "Please input your password!"
                        }
                    ]}
                >
                    <Input
                        type="password"
                        style={Style.FormInput}
                        placeholder="password"
                    />
                </Form.Item>
                <Form.Item style={Style.FormGroup}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default LoginPage;

const Style = {
    Wrap: {
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#fafafa"
    },
    LoginForm: {
        width: "350px",
        margin: "0 auto",
        border: "1px solid #ddd",
        padding: "2rem",
        background: "#ffffff",
        padding: "20px"
    },
    FormInput: {
        background: "#fafafa",
        border: "1px solid #eeeeee",
        padding: "12px",
        width: "100%"
    },
    FormGroup: {
        marginBottom: "1rem"
    },
    FormHeader: {
        textAlign: "center",
        marginBottom: "2rem"
    }
};

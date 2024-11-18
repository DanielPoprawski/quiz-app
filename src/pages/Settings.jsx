import { useState } from "react";
import { setTitle } from "../index.jsx";
import { Flex, Layout } from "antd";
import Sidebar from "./components/Sidebar.jsx";
const { Sider, Content } = Layout;

export default function Settings() {
        setTitle("Settings");

        return (
                <Flex>
                        <Layout>
                                <Sider width="120px">
                                        <Sidebar />
                                </Sider>
                                <Content>
                                        <h2>Settings</h2>
                                </Content>
                        </Layout>
                </Flex>
        );
}

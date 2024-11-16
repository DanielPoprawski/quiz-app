import { useState } from "react";
import { setTitle } from "../index.jsx";
import { Flex, Layout } from "antd";
import Sidebar from "./components/Sidebar.jsx";
const { Sider, Content } = Layout;

export default function Home() {
        const [data, setData] = useState();
        const directory = "./assets/directory/";
        setTitle("Home");

        return (
                <Flex>
                        <Layout>
                                <Sider>
                                        <Sidebar />
                                </Sider>
                                <Content>
                                        <h1> React quiz app</h1>
                                        <h4> By Daniel Poprawski</h4>
                                        <br /> <br />
                                        <h2>Available quizzes</h2>
                                        <table>
                                                <thead>
                                                        <tr>
                                                                <th>Name</th>
                                                                <th>Questions</th>
                                                        </tr>
                                                </thead>
                                                <tbody>
                                                        <tr>
                                                                <td>
                                                                        <a href="/learn/0">MQF 2024 Fort Sill</a>
                                                                </td>
                                                                <td>4</td>
                                                        </tr>
                                                        <tr>
                                                                <td>
                                                                        <a href="/learn/1">Skill Level 1 MQF</a>
                                                                </td>
                                                                <td>4</td>
                                                        </tr>
                                                </tbody>
                                        </table>
                                </Content>
                        </Layout>
                </Flex>
        );
}

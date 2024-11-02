import { useState } from "react";

export default function Home() {
        const [data, setData] = useState();
        const directory = "./assets/directory/";

        return (
                <div className="content">
                        <h1> React quiz app</h1>
                        <h4> By Daniel Poprawski</h4>
                        <br /> <br />
                        <h2>Available quizzes</h2>
                        <table>
                                <tr>
                                        <th>Name</th>
                                        <th>Questions</th>
                                </tr>
                                <tr>
                                        <td>
                                                <a href="/learn">MQF 2024 Fort Sill</a>
                                        </td>
                                        <td>4</td>
                                </tr>
                                <tr>
                                        <td>
                                                <a href="/learn">Skill Level 1 MQF</a>
                                        </td>
                                        <td>4</td>
                                </tr>
                        </table>
                </div>
        );
}

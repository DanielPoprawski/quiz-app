import { useState } from "react";

export default function Hub() {
        const [data, setData] = useState();

        return (
                <div className="content">
                        <h1> React quiz app</h1>
                        <h4> By Daniel Poprawski</h4>
                        <br /> <br />
                        <h2>Quiz Directory</h2>
                        <table>
                                <tr>
                                        <th>Name</th>
                                        <th>Last Modified</th>
                                        <th>Size</th>
                                </tr>
                                <tr>
                                        <td>
                                                <a>questions.json</a>
                                        </td>
                                        <td>10/27/2024 8:35 PM</td>
                                        <td>1KB</td>
                                </tr>
                        </table>
                </div>
        );
}

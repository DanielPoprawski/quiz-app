import { setTitle } from "../main.jsx";
import Sidebar from "./components/Sidebar.jsx";

export default function NotFound() {
      setTitle("404 Not Found");
      return (
            <Flex>
                  <Layout>
                        <Sider width="120px">
                              <Sidebar />
                        </Sider>
                  </Layout>
                  <Content>
                        <h1> Error 404</h1>
                        <h3> Page not found :( </h3>
                  </Content>
            </Flex>
      );
}

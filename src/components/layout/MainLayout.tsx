import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import SiteBar from "./sitebar";

const { Header, Content } = Layout;

const MainLayout = () => (
  <>
    <Layout style={{ height: "100vh" }}>
      <SiteBar />
      <Layout>
        <Header style={{ padding: 0 }} />
        <Content style={{ margin: "24px 16px 0" }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  </>
);

export default MainLayout;

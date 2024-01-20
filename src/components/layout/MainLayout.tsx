import { Button, Layout } from "antd";
import { Outlet } from "react-router-dom";
import SiteBar from "./sitebar";
import { useAppDispatch } from "../../redux/hooks";
import { logout } from "../../redux/features/auth/authSlice";

const { Header, Content } = Layout;

const MainLayout = () => {
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <>
      <Layout style={{ height: "100vh" }}>
        <SiteBar />
        <Layout>
          <Header style={{ padding: 0 }}>
            <Button onClick={handleLogout}>Logout</Button>
          </Header>
          <Content style={{ margin: "24px 16px 0" }}>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default MainLayout;

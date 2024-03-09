import {Layout, Menu, MenuProps, theme} from "antd";
import styles from "@/pages/home/home.module.scss"
import {Outlet, useNavigate} from "react-router-dom";
import useMenuItem from "@/hooks/useMenuItem.tsx";

function Home() {
    const {Header, Content, Footer} = Layout;
    const {
        token: {colorBgContainer, borderRadiusLG},
    } = theme.useToken();
    const navigate = useNavigate();

    const {items} = useMenuItem()

    const onClick: MenuProps['onClick'] = (e) => {
        const {key: url} = e
        navigate(url)
    };

    return (
        <Layout className={styles.wrap}>
            <Header style={{display: 'flex', alignItems: 'center'}}>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['/']}
                      style={{flex: 1, minWidth: 0}}
                      items={items}
                      onClick={onClick}
                />
            </Header>
            <Content className={"contentWrap"}>
                <div
                    className={"content"}
                    style={{
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    <Outlet></Outlet>
                </div>
            </Content>
            <Footer className={"footer"}>
                Ant Design ©{new Date().getFullYear()} Created by Ant UED
            </Footer>
        </Layout>
    )
}

export default Home

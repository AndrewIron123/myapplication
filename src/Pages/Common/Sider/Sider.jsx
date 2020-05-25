
import React, { Component } from 'react';
import { Menu, Layout } from 'antd';
import { PlayCircleOutlined, LaptopOutlined, NotificationOutlined, BookOutlined, RiseOutlined } from '@ant-design/icons';
import {
    Link
} from 'react-router-dom';

const LayoutSider = Layout.Sider;
const { SubMenu } = Menu;
import "./style.scss";

class Sider extends Component {
    state = {
        theme: 'dark',
        current: '1',
    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };

    render() {
        return (
            <LayoutSider width={200} className="site-layout-background">
                <Menu
                    mode="inline"
                    defaultOpenKeys={['sub1']}
                    style={{ height: '100%', borderRight: 0 }}
                >
                    <SubMenu key="sub1" icon={<PlayCircleOutlined />} title="Praca z API">
                        <Menu.Item key="1"><Link to="/posts">Posty</Link></Menu.Item>
                        <Menu.Item key="2"><Link to="/comments">Komentarze</Link></Menu.Item>
                    </SubMenu>
                </Menu>
            </LayoutSider>
        );
    }
}

export default Sider;
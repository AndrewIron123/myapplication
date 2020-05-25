
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
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{ height: '100%', borderRight: 0 }}
                >
                    <SubMenu key="sub1" icon={<PlayCircleOutlined />} title="Dane z API">
                        <Menu.Item key="1"><Link to="/posts">Posty</Link></Menu.Item>
                        <Menu.Item key="2"><Link to="/comments">Komentarze</Link></Menu.Item>
                        <Menu.Item key="3"><Link to="/albums">Albumy</Link></Menu.Item>
                        <Menu.Item key="4"><Link to="/photos">Zdjecia</Link></Menu.Item>
                        <Menu.Item key="5"><Link to="/tasks">Zadania</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" icon={<LaptopOutlined />} title="Biznes">
                        <Menu.Item key="6">Oszczedzanie</Menu.Item>
                        <Menu.Item key="7">Inwestycje</Menu.Item>
                        <Menu.Item key="8">Prawo</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub3" icon={<NotificationOutlined />} title="Polityka">
                        <Menu.Item key="9">Wybory</Menu.Item>
                        <Menu.Item key="10">Obrady</Menu.Item>
                        <Menu.Item key="11">Prawo</Menu.Item>
                        <Menu.Item key="12">Informacje</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub4" icon={<BookOutlined />} title="Nauka">
                        <Menu.Item key="13">Zwierzeta</Menu.Item>
                        <Menu.Item key="14">Matematyka</Menu.Item>
                        <Menu.Item key="15">Fizyka</Menu.Item>
                        <Menu.Item key="16">Historia</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub5" icon={<RiseOutlined />} title="Na czasie">
                        <Menu.Item key="17">TOP1</Menu.Item>
                        <Menu.Item key="18">TOP2</Menu.Item>
                        <Menu.Item key="19">TOP3</Menu.Item>
                        <Menu.Item key="20">TOP4</Menu.Item>
                    </SubMenu>
                </Menu>
            </LayoutSider>
        );
    }
}

export default Sider;
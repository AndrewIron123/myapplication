import React, { Component } from 'react';
import "./style.scss";

import { Layout as AntLayout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import Header from "./../Header/Header";
import Sider from "./../Sider/Sider";
import { withRouter } from "react-router";
import { connect } from 'react-redux';
const { SubMenu } = Menu;
const { Content } = AntLayout;

class Layout extends Component {
    state = {}
    render() {
        return <AntLayout>
            <Header className="header" />
            <AntLayout>
                <Sider />
                <AntLayout style={{ padding: '0 24px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>{this.props.location && this.props.location.pathname ? this.props.location.pathname.replace('/', '') : ""}</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                        }}
                    >
                        {this.props.children}
                    </Content>
                </AntLayout>
            </AntLayout>
        </AntLayout>
            ;
    }
}

const mapStateToProps = (state) => ({
    theme: state.theme
});

const LayoutWithRouter = withRouter(connect(mapStateToProps)(Layout));
export { LayoutWithRouter as Layout };
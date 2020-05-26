
import React, { Component } from 'react';
import { Menu, Layout } from 'antd';
import { PlayCircleOutlined, LaptopOutlined, NotificationOutlined, BookOutlined, RiseOutlined } from '@ant-design/icons';
import {
    Link
} from 'react-router-dom';
import { connect } from 'react-redux';

const LayoutSider = Layout.Sider;
const { SubMenu } = Menu;
import "./style.scss";

class Sider extends Component {
    state = {
        theme: 'dark',
        current: '1',
    };

    componentDidMount() {
        if (this.props.theme) {
            this.setState({ theme: 'light' })
        } else {
            this.setState({ theme: 'dark' })
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.theme !== this.props.theme) {
            if (this.props.theme === true) {
                this.setState({ theme: 'light' })
            } else if (this.props.theme === false) {
                this.setState({ theme: 'dark' })
            }
        }
    }




    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };

    render() {
        console.log(this.state.theme);
        return (
            <LayoutSider width={200}>
                <Menu
                    mode="inline"
                    defaultOpenKeys={['sub1']}
                    style={{ height: '100%', borderRight: 0 }}
                    theme={this.state.theme}
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

const mapStateToProps = (state) => ({
    theme: state.theme
});

export default connect(mapStateToProps)(Sider);
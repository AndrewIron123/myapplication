import React, { Component } from 'react';
import Sider from "./../Common/Sider/Sider";
import { postService } from "../../Services/postsService";
import laptop from './../../Styles/Photos/Laptop.jpg';
class Home extends Component {
    state = {};
    render() {
        return <div className="pages__home">
            <img src={laptop} alt={"homepage"} style={{ width: '100%', height: '100%' }} />
        </div>;
    }
}

export default Home;
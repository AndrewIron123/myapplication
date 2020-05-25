import React, { Component } from 'react';
import Sider from "./../Common/Sider/Sider";
import { postService } from "../../Services/postsService";
class Home extends Component {
    state = {};
    render() {
        return <div className="pages__home">
            Strona domowa
            </div>;
    }
}

export default Home;
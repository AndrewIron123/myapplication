import React, { Component } from 'react';
import "./style.scss";
import { Menu } from 'antd';
import { AutoComplete } from 'antd';
import { postsService } from './../../../Services/postsService';

class Header extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        postsService.getPosts()
            .then(payload => {
                if (payload.data && Array.isArray(payload.data)) {
                    this.setState({
                        posts: payload.data.map((item) => {
                            return { value: item.title }
                        })
                    });
                }
            })
    }

    render() {
        const { posts } = this.state;
        return (
            <>
                <div className="layout__header">
                    <AutoComplete
                        className="layout__header--search-post"
                        options={posts}
                        placeholder="Wyszukaj post"
                        filterOption={(inputValue, option) =>
                            option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                        }
                    />
                </div>
            </>
        );
    }
}

export { Header };
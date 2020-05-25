import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { postsService } from './../../Services/postsService';
import { Table } from 'antd';

class Posts extends Component {
    state = {
        posts: []
    }
    componentDidMount() {
        postsService.getPosts()
            .then(payload => {
                if (payload.data && Array.isArray(payload.data)) {
                    this.setState({ posts: payload.data });
                }
            })
    }

    render() {
        const { posts } = this.state;
        const columns = [
            {
                title: 'ID',
                dataIndex: 'id',
                key: 'id'
            },
            {
                title: 'Tytuł',
                dataIndex: 'title',
                key: 'title',
            },
            {
                title: 'Treść',
                dataIndex: 'body',
                key: 'body',
            },
        ];
        return (
            <div className="pages__posts">
                <Table columns={columns} dataSource={posts} />
            </div>
        );
    }
}

Posts.propTypes = {

};

export default Posts;
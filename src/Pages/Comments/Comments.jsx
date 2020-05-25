import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { commentsService } from './../../Services/commentsService';
import { Comment, List } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import queryString from 'query-string';
import { withRouter } from "react-router";

class Comments extends Component {
    state = {
        comments: []
    }

    componentDidMount() {
        let params = queryString.parse(this.props.location.search)
        commentsService.getComments(params)
            .then(payload => {
                console.log(payload);
                if (payload.data && Array.isArray(payload.data)) {
                    this.setState({ comments: payload.data });
                }
            })
    }
    render() {
        const { comments } = this.state;
        return (
            <div>
                <List
                    className="comment-list"
                    header={`${comments.length} komentarzy`}
                    itemLayout="horizontal"
                    dataSource={comments}
                    renderItem={item => (
                        <li>
                            <Comment
                                author={item.name}
                                avatar={<UserOutlined />}
                                content={item.body}
                                datetime={item.datetime}
                            />
                        </li>
                    )}
                />
            </div>
        );
    }
}

Comments.propTypes = {

};

const CommentsWithRouter = withRouter(Comments);
export { CommentsWithRouter as Comments };
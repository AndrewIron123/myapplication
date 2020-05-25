import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { postsService } from './../../Services/postsService';
import { Modal, Button, Form, Table, Input, message } from 'antd';

class Posts extends Component {
    state = {
        posts: [],
        visible: false
    }
    componentDidMount() {
        postsService.getPosts()
            .then(payload => {
                if (payload.data && Array.isArray(payload.data)) {
                    this.setState({ posts: payload.data });
                }
            })
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = () => {
        this.setState({
            visible: false,
        });
    };

    handleCancel = () => {
        this.setState({
            visible: false,
        });
    };

    onFinish = values => {
        values.userId = 1;
        postsService.createPost(values).then(() => {
            message.info("Formularz został poprawnie zapisany");
            this.handleCancel();
        });
    };

    onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    render() {
        const layout = {
            labelCol: {
                span: 4,
            },
            wrapperCol: {
                span: 20,
            },
        };
        const tailLayout = {
            wrapperCol: {
                offset: 8,
                span: 16,
            },
        };
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
            {
                title: 'Action',
                key: 'action',
                render: (text, record, index) => {
                    return <span>
                        <a href={"/comments?postId=" + record.id}>Zobacz komentarze</a>
                    </span>
                },
            },
        ];
        return (
            <div className="pages__posts">
                <Button type="primary" onClick={this.showModal}>
                    Napisz post
                </Button>
                <Modal
                    title="Nowy post"
                    visible={this.state.visible}
                    footer={null}
                    onCancel={this.handleCancel}
                >
                    <Form
                        className="post__modal--form"
                        {...layout}
                        name="basic"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={this.onFinish}
                        onFinishFailed={this.onFinishFailed}
                    >
                        <Form.Item
                            label="Tytuł"
                            name="title"
                            rules={[
                                {
                                    required: true,
                                    message: 'Proszę wpisać tytuł',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Treść"
                            name="body"
                            rules={[
                                {
                                    required: true,
                                    message: 'Proszę wpisać treść!',
                                },
                            ]}
                        >
                            <Input.TextArea />
                        </Form.Item>
                        <Form.Item {...tailLayout}>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </Modal>
                <Table columns={columns} dataSource={posts} />
            </div>
        );
    }
}

Posts.propTypes = {

};

export default Posts;
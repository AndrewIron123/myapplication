import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { usersService } from './../../Services/usersService';
import { Table } from 'antd';

class Users extends Component {

    state = {
        users: []
    }
    componentDidMount() {
        usersService.getUsers()
            .then(payload => {
                if (payload.data) {
                    this.setState({ users: payload.data });
                }
            })
    }

    render() {
        console.log(this.state.users);
        const columns = [
            {
                title: 'ID',
                dataIndex: 'id',
                key: 'id'
            },
            {
                title: 'Imię',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: 'Nazwisko',
                dataIndex: 'surname',
                key: 'surname',
            },
            // {
            //     title: 'Action',
            //     key: 'action',
            //     render: (text, record, index) => {
            //         return <span>
            //             <Button className="posts__button--see"><a href={"/comments?postId=" + record.id}>Zobacz komentarze</a></Button>
            //             <Button className="posts__button--delete" onClick={() => { this.handleOnClickDelete(record.id) }}>Usuń post</Button>
            //         </span>
            //     },
            // },
        ];
        return (
            <div>
                <Table columns={columns} dataSource={this.state.users} />
            </div>
        );
    }
}

Users.propTypes = {

};

export default Users;
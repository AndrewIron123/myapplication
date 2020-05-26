import React, { Component } from 'react';
import "./style.scss";
import { Menu } from 'antd';
import { AutoComplete } from 'antd';
import { postsService } from './../../../Services/postsService';
import { Switch } from 'antd';
import { connect } from 'react-redux';

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

    handleOnChangeTheme = () => {
        this.props.dispatch({ type: "CHANGE" });
    }

    render() {
        const { posts } = this.state;
        console.log(this.props);
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
                    <span className="layout__header--theme-changer">
                        Zmień motyw(redux) - {this.props.theme ? "jasny" : "ciemny"}
                        <Switch className="layout__header--theme-changer-switch" onChange={this.handleOnChangeTheme} />
                    </span>
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    theme: state.theme
});

export default connect(mapStateToProps)(Header);
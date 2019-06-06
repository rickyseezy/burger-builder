import React, { Component } from 'react';
import * as action from '../../../store/actions';

class Logout extends Component {

    componentDidMount() {
        this.props.onLogout()
    }

    render () {
        return ();
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => {dispatch(action.logout())}
    };
};
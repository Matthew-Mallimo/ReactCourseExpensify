import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

class LoginForm extends React.Component{
    onSubmit = (e) => {
        e.preventDefault();
        this.props.startLogin();
    };
    render(){
        return(
            <div>
                <form onSubmit={this.onSubmit}>
                    <button>Login</button>
                </form>
            </div>
        )
    }
};

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined,mapDispatchToProps)(LoginForm);
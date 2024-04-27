import { connect } from 'react-redux';
import React from 'react';
// import axios from 'axios';
import Header from './Header';
import { setAuthUserData, toggleIsFetching } from '../../Redux/authReducer';
import PreLoader from '../AllComponents/PreLoader/PreLoader';
// import { usersAPI } from '../../api/api';

class HeaderContainer extends React.Component {

    componentDidMount() {
        // this.props.toggleIsFetching(true);
        // usersAPI.getAuht()
        //     .then(response => {
        //         this.props.toggleIsFetching(false);
        //         if (response.data.resultCode === 0) {
        //             let { id, email, login } = response.data.data;
        //             this.props.setAuthUserData(id, email, login);
        //         }
        //     });
        // axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, { withCredentials: true })
    }

    render() {
        return (<>

            <Header {...this.props}>
                <div style={{ backgroundColor: 'white' }}>
                    {this.props.isFetching ? <PreLoader /> : null}
                </div>
            </Header>
        </>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect(mapStateToProps, {
    setAuthUserData,
    toggleIsFetching
})(HeaderContainer);

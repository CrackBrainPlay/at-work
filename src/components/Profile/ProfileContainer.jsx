import React from 'react';
import { connect } from 'react-redux';
// import axios from 'axios';
import Profile from './Profile';
import PreLoader from '../AllComponents/PreLoader/PreLoader';
import { setUserProfile } from '../../Redux/profileReducer';
import { useParams } from "react-router-dom";
import { usersAPI } from '../../api/api';

export function withRouter(Children) {

    return (props) => {
        const match = { params: useParams() };
        return <Children {...props} match={match} />
    }

}

class ProfileContainer extends React.Component {

    componentDidMount() {
        // debugger;
        // this.props.toggleIsFetching(true);
        // if (this.props.users.length === 0) {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        usersAPI.getProfile(userId)
            // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                // this.props.toggleIsFetching(false);
                this.props.setUserProfile(response.data);
                // this.props.setTotalUsersCount(response.data.totalCount);
            });
        // }
    }

    // onPageChanged = (pageNumber) => {
    //     this.props.setCurrentPage(pageNumber);
    //     this.props.toggleIsFetching(true);
    //     axios.get(`https://social-network.samuraijs.com/api/1.0/${pageNumber}&count=${this.props.pageSize}`)
    //         .then(response => {
    //             this.props.toggleIsFetching(false);
    //             this.props.setUsers(response.data.items)
    //         });
    // }

    render() {
        return (<>
            <div style={{ backgroundColor: 'white' }}>
                {this.props.isFetching ? <PreLoader /> : null}
            </div>
            <Profile {...this.props} profile={this.props.profile} />
        </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}

const WhitsUrlContainerComponent = withRouter(ProfileContainer)


const ProfilesContainer = connect(mapStateToProps, {
    setUserProfile
})(WhitsUrlContainerComponent);

export default ProfilesContainer;

import { connect } from 'react-redux';
import React from 'react';
import {
    toHide,
    toArchive,
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingInProgress,
    getUsers
} from '../../Redux/usersReducer';
import User from './User';
import PreLoader from '../AllComponents/PreLoader/PreLoader';


class UserContainer extends React.Component {

    componentDidMount() {
        // this.props.getUsers(this.props.currentPage, this.props.pageSize);
        this.props.getUsers();
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return (<>
            <div style={{ backgroundColor: 'white' }}>
                {this.props.isFetching ? <PreLoader /> : null}
            </div>

            <User totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                // follow={this.props.follow}
                // unfollow={this.props.unfollow}
                toHide={this.props.toHide}
                toArchive={this.props.toArchive}
                toggleFollowingInProgress={this.props.toggleFollowingInProgress}
                followingInProgress={this.props.followingInProgress}
            />
        </>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        // pageSize: state.usersPage.pageSize,
        // totalUsersCount: state.usersPage.totalUsersCount,
        // currentPage: state.usersPage.currentPage,
        followingInProgress: state.usersPage.followingInProgress
    }
}

const UsersContainer = connect(mapStateToProps,
    {
        follow, unfollow,
        toHide, toArchive,
        // setUsers,
        setCurrentPage,
        // setTotalUsersCount, toggleIsFetching,
        toggleFollowingInProgress, getUsers
    }
)(UserContainer);

export default UsersContainer;

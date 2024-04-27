import React from 'react';
import style from './Users.module.css'
import { NavLink } from 'react-router-dom';
import { usersAPI } from '../../api/api';
import DropDownNav from './DropDownNav/DropDownNav';

const UserFunction = (props) => {
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }


    // const usersColumns = [];
    // for (let i = 0; i < props.users.length; i += 3) {
    //     usersColumns.push(props.users.slice(i, i + 3));
    // }
    const usersColumns = [];
    for (let i = 0; i < 6; i += 3) {
        usersColumns.push(props.users.slice(i, i + 3));
    }
    return (
        <div>
            <div className={style.user}>
                {usersColumns.map((row, index) => (
                    <div key={index} className={style.userRow}>
                        {row.map(user => (
                            <div key={user.id} className={style.userCard}>
                                <NavLink to={'/Profile/' + user.id}>
                                    <img className={style.img} src='avatar_3.jpg' alt='' />
                                </NavLink>
                                {/* <div>
                                    {user.followed ?
                                        (<button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                                            props.toggleFollowingInProgress(true, user.id);
                                            usersAPI.getFollow(user.id)
                                                .then(response => {
                                                    if (response.data.resultCode === 0) {
                                                        props.unfollow(user.id);
                                                    }
                                                    props.toggleFollowingInProgress(false, user.id);
                                                })
                                        }}>Unfollow</button>)
                                        : (<button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                                            props.toggleFollowingInProgress(true, user.id)
                                            usersAPI.getUnfollow(user.id)
                                                .then(response => {
                                                    if (response.data.resultCode === 0) {
                                                        props.follow(user.id);
                                                    }
                                                    props.toggleFollowingInProgress(false, user.id);
                                                })
                                        }}>Follow</button>)}
                                </div> */}
                                <div className={style.userData}>
                                    <div className={style.userInfo}>
                                        <div className={style.userNameCase}>
                                            <div className={style.userName}>{user.username}</div>
                                            <div className={style.userNameBtn}><DropDownNav /></div>
                                        </div>
                                        <div>{user.company.name}</div>
                                    </div>
                                    {/* <div> */}
                                    {/* <div>{"user.location.country"}</div> */}
                                    <div className={style.userLocation}>{
                                        user.address.city}
                                    </div>
                                    {/* </div> */}
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default UserFunction;

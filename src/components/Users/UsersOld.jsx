import React from 'react';
import style from './Users.module.css'
import axios from 'axios';

const UsersOld = (props) => {

    const getUsers = () => {
        if (props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {
                    // debugger;
                    props.setUsers(response.data.items)
                });
        }
    }

    const usersFrame = props.users

        .map(u =>
            <div key={u.id}>
                <span>
                    <div className={style.box}>
                        <img src={u.photos.small || u.photos.large === null ? 'img/avatar.png' : u.photos.small} alt='' />
                    </div>
                    <div>
                        {u.followed
                            ? (<button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>)
                            : (<button onClick={() => { props.follow(u.id) }}>Follow</button>)}
                    </div>
                </span>
                <span>
                    <span>
                        {/* <div>{u.firstName}&nbsp;{u.lastName}</div> */}
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
            </div>
        )

    return (
        <div>
            <button onClick={getUsers}>Get users</button>
            {usersFrame}
        </div>
    );

};

export default UsersOld;

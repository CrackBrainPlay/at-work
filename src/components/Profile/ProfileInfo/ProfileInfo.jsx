import React from 'react';
import style from './ProfileInfo.module.css';
import PreLoader from '../../AllComponents/PreLoader/PreLoader';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <PreLoader />
    }
    // debugger;
    return (
        <div className={style.content}>
            {/* <img className={style.img} src={(props.profile.photos.large === null) ? 'img/avatar.png' : props.profile.photo.large} alt='' /> */}
            <img className={style.img} src={props.profile.photos.large} alt='' />
            <div className={style.boxInfo}>
                <ul>
                    <li>
                        Имя: {props.profile.fullName}
                    </li>
                    <li>
                        Обо мне: {props.profile.aboutMe}
                    </li>
                    <li>
                        Статус поиска: {props.profile.lookingForAJob}
                    </li>
                    <li>
                        Точно ли ищу: {props.profile.lookingForAJobDescription}
                    </li>
                    <li>
                        id пользователя: {props.profile.userId}
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default ProfileInfo;
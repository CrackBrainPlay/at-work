import { usersAPI } from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

const TRANSFER_USER_TO_HIDE = 'TRANSFER_USER_TO_HIDE';
const TRANSFER_USER_TO_ARCHIVE = 'TRANSFER_USER_TO_ARCHIVE';


let initialState = {
    users: [],
    // pageSize: 5,
    // totalUsersCount: 0,
    // currentPage: 1,
    isFetching: false,
    isHide: false,
    isArchive: false,
    followingInProgress: []
};


const usersReducer = (state = initialState, action) => {

    switch (action.type) {

        case TRANSFER_USER_TO_HIDE:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, isHide: true }
                    }
                    return user;
                })
            };

        case TRANSFER_USER_TO_ARCHIVE:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, isArchive: true }
                    }
                    return user;
                })
            };

        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: true }
                    }
                    return user;
                })
            };

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: false }
                    }
                    return user;
                })
            };

        case SET_USERS: {
            // return { ...state, users: [...state.users, ...action.users] }
            return { ...state, users: action.users }
        }

        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage }
        }

        case SET_TOTAL_USERS_COUNT: {
            return { ...state, totalUsersCount: action.count }
        }

        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching }
        }

        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state, followingInProgress: action.isFollowingInProgress ?
                    [...state.followingInProgress, action.userId] :
                    state.followingInProgress.filter(id => id !== action.userId)
            }
        }


        default:
            return state;
    }
}

export const toHide = (userId) => ({ type: TRANSFER_USER_TO_HIDE, userId })

export const toArchive = (userId) => ({ type: TRANSFER_USER_TO_ARCHIVE, userId })

export const follow = (userId) => ({ type: FOLLOW, userId })

export const unfollow = (userId) => ({ type: UNFOLLOW, userId })

export const setUsers = (users) => ({ type: SET_USERS, users })

export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })

export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount })

export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })

export const toggleFollowingInProgress = (isFollowingInProgress, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFollowingInProgress, userId })

export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));

        // usersAPI.getUsers(currentPage, pageSize).then(response => {
        usersAPI.getUsers().then(response => {
            // debugger;
            dispatch(toggleIsFetching(false));
            // dispatch(setUsers(response.items));
            dispatch(setUsers(response));
            // dispatch(setTotalUsersCount(response.totalCount));
        });

    }
}


export default usersReducer;



// const addPostThunkCreator = (message) => (dispatch) => {

//     dispatch(onLoading())

//     axios.post({ message }).then(() => {

//         dispatch(addPost(message))

//         dispatch(offLoading())
//     })
// }
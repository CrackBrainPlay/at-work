import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://jsonplaceholder.typicode.com/',
    // headers: {
    //     "API-KEY": "b18f6605-dd13-4632-8e4c-c90af1ba115e"
    // }
})


export const usersAPI = {

    // getUsers(currentPage = 1, pageSize = 10) {
    getUsers() {
        // return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
        return instance.get(`users`).then(response => response.data)
    },

    getProfile(userId) {
        return instance.get(`profile/${userId}`)
    },

    getAuht() {
        return instance.get(`auth/me`)
    },

    getFollow(id) {
        return instance.delete(`follow/${id}`)
    },

    getUnfollow(id) {
        return instance.post(`follow/${id}`, {})
    }

}

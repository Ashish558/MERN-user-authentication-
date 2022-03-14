import axios from 'axios'
import { domain } from './constants'


export const registerUser = (data, cb) => {
    axios.post(`${domain}/register`, data)
        .then(res => cb(null, res))
        .catch(err => cb(err, null))
}

export const loginUser = (data, cb) => {
    axios.post(`${domain}/login`, data)
        .then(res => cb(null, res))
        .catch(err => cb(err, null))
}

export const sendResetLink = (data, cb) => {
    axios.post(`${domain}/password-reset`, data)
        .then(res => cb(null, res))
        .catch(err => cb(err, null))
}

export const resetPassword = (userId, token, password, cb) => {
    axios.post(`${domain}/password-reset/${userId}/${token}`, {password})
        .then(res => cb(null, res))
        .catch(err => cb(err, null))
}



import Axios from "axios"

const baseURL = "http://localhost:7000"


export const execLogin = async (payload) => {
    //payload = {email, password}
    try {
        const res = await Axios.post(baseURL + "/login", payload)
        return res.data
    } catch (error) {
        throw error.response
    }

}

export const execRegister = async (payload) => {
    //payload = {email, password}
    try {
        const res = await Axios.post(baseURL + "/register", payload)
        return res.data
    } catch (error) {
        throw error.response
    }

}
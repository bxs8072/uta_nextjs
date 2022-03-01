import Axios from "axios"

export const axiosInstance = Axios.create({ timeout: 10000 })

axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem("token")

    config.headers.Authorization = "Bearer " + token
    return config
})

axiosInstance.interceptors.response.use((response, error) => {
    if (error) {
        return Promise.reject(error.response.data)
    } else if (!error) {
        return response.data || null
    } else {
        return Promise.reject({
            error: "Some unusual error occured, Please try again later"
        })
    }
})


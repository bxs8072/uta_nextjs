import Axios from "axios"

export const axiosInstanceSSR = Axios.create({ timeout: 10000 })

axiosInstanceSSR.interceptors.response.use((response, error) => {
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
import axios from "axios"

export const apiFetch = async(method, endPoint, object = null) => {
    let methodType = method.toLowerCase()
    try {
        if(methodType === "get"){
            const response = axios.get(endPoint)
            return response.data
        }
        if(methodType === "post"){
            axios.post(endPoint, object)
        }
    } catch (error) {
        console.log(error)
    }
}
import axios from "axios"

let BASEURL="http://localhost:5000/api/user"
let axiosInstace= axios.create({
    baseURL: BASEURL
})
export default axiosInstace
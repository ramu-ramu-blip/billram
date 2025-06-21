import axios from "axios"

let BASEURL=" http://localhost:5000/api/user"
let axiosInstace=axios.create({
    baseurl:BASEURL
})
export default axiosInstace
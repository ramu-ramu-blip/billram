import axios from "axios"
import axiosInstace from "../components/AxiosInstance/Instance";

let empService={
    regUser:async (payload)=>{
         try {
        let data=await axiosInstace.post("/register",payload)
    //   console.log(data);
    return data
        }
        catch (error) {
            console.log(error);
            return error
        }
        
    }
}
export default empService


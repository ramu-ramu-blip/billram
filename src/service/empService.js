import axios from "axios"
import axiosInstace from "../components/AxiosInstance/Instance";

let empService={
    regiUser: async (payload)=>{
        
       try{
        let data =await axiosInstace.post("/register",payload)
        return data
       }
       catch{
            console.log(error)
            return error
            
       }

       
    }
}
export default empService


import axios from "axios"
import axiosInstace from "../components/AxiosInstance/Instance";

let empService={
    regiUser: async (payload)=>{
        
       try{
        let data =await axiosInstace.post("/register",payload)
        return data
       }
       catch(error){
            console.log(error)
            return error
            
       }

       
    },

    loginUser: async (payload)=>{
        
       try{
        let data =await axiosInstace.post("/login",payload)
        return data
       }
       catch(error){
            console.log(error)
            return error  
       }
       
    }
}
export default empService


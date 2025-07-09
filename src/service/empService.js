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
       
    },
    addBills:async (payload,token)=>{
        console.log(payload);
        
        try {
            let data=await axiosInstace.post("/add-bill",payload,{
                headers:{
                    "Authorization":`Bearer ${token}`
                }
            })

            // console.log(data);
            return data
            
        } catch (error) {
            // console.log(error);
            return error
        }
    },
    allBills:async(token)=>{
        // console.log(token);
        
        try {
            let data=await axiosInstace.get("/get-bill-by-user",{
                headers:{
                    "Authorization":`Bearer ${token}`
                }
            })
            // console.log(data);
            return data
            
        } catch (error) {
           console.log(error);
           return error 
        }
    }
}
export default empService


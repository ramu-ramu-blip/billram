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
    },
    updateBills:async (payload,token,id)=>{
        console.log(payload);
        
        try {
            let data=await axiosInstace.put(`/update-bill/${id}`,payload,{
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
     deleteBills:async (token,id)=>{
        console.log(token);
        
        try {
            let data=await axiosInstance.delete(`/delete-bill/${id}`,{
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
    companyName:async (token)=>{
        console.log(token);
        
        try {
            let data=await axiosInstance.get("get-company-names",{
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
    },     filteredBills:async (token,query)=>{
        console.log(token);
        
        try {
            let data=await axiosInstance.get(`/filter-bills?${query}`,{
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
    
    
}
export default empService


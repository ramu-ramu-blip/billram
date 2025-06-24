import React, { useState } from 'react'
import { validatePassword } from 'val-pass'
import { CiMail } from "react-icons/ci";
import { TbPassword } from "react-icons/tb";
import toast from 'react-hot-toast';
import empService from '../../service/empService';
import { Link, useNavigate } from 'react-router';




const Login = () => {

  let navigate=useNavigate()
    let [state,setState]=useState({
  
  email:"",
  password:""
})


  

let handleChange=(e)=>{
  let{name,value}=e.target
  setState((preval)=>({...preval,[name]:value})) 

}
let handleSumbit=(e)=>{
  e.preventDefault()
   let {password,email}=state
console.log(state);

    if(!password||!email){
      toast.error("All feilds are mandatory")
      return
    }
  
(
      async()=>{
        let data=await empService.loginUser(state)
      try{
          if(data.status==200)
          {
            toast.success("login sucessfully")
            navigate("/home")
           
          }
          else{
           
            toast.error(`${data.response.data.message}`)
          }
      }
      catch(error){
        toast.error("something went wrong")
      }
        
      })()
     
   
     }

  return (
        <div  className='  bg-[#bfb4b46f] bg-[url()] size-full  flex justify-center items-center'  >
            <form action="" onSubmit={handleSumbit} className='bg-white max-sm:w-[90%] max-sm:h-[40%] overflow-scroll rounded-bl-lg shadow-2xl w-[35%] flex  items-center flex-col gap-6 py-8  ' >
    
              <div className='w-[80%]  py-3 bg-white flex justify-center items-center rounded-sm'>
                <h1  className='text-[28px] max-sm:text-sm '>login form</h1>
              </div>

    
    
             <div  className='w-[80%] bg-white flex justify-center items-center border-1  rounded-sm   px-5  py-3' >
                <input type="email" name="email" placeholder='Enter your email'  className='  w-[100%] outline-0 text-[18px]'onChange={handleChange} />
                <span><CiMail /></span>
              </div>      
    
    
    
               <div  className='w-[80%] bg-white flex justify-center items-center border-1  rounded-sm   px-5  py-3' >
                <input type="password" name="password" placeholder='Enter your password'  className='  w-[100%] outline-0 text-[18px]'onChange={handleChange} />
                <span><TbPassword /></span>
              </div>
    
             <div className='w-[80%] bg-amber-200 flex justify-center items-center border-0 rounded-sm  tracking-[0.5px] text-[19px] py-3 hover:bg-amber-400  active:bg-green-300 active:scale-[0.9]'>
            <button className='w-full'>click</button>
            </div>

            <div className='hover:underline'><Link to ="/register">click to here register</Link></div>
              
            </form>
        </div>
  )
}

export default Login
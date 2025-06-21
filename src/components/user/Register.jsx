import React, { useState } from 'react'
import { CgNametag } from "react-icons/cg";
import { FaUserNurse } from "react-icons/fa6";
import { TbPassword } from "react-icons/tb";
import { FaRepeat } from "react-icons/fa6";
import {validatePassword} from "val-pass"
import toast from 'react-hot-toast';
import { CiMail } from "react-icons/ci";
import empService from '../../service/empService';
import { useNavigate } from 'react-router';



const Register = () => {
  let navigate=useNavigate()
let [state,setState]=useState({
  name:"",
  userName:"", 
  email:"",
  password:""
})
let[match,setMatched]=useState(true)
let [errormessage,setErrormessage]=useState("")
  
let handlePassword =(e)=>{
  let {value}=e.target
  state.password!=value?setMatched(false):setMatched(true)
value=="" && setMatched(true)
  
}

let handleChange=(e)=>{
  let{name,value}=e.target
  setState((preval)=>({...preval,[name]:value})) 
  if(name=="password")
  {
    let {validateAll,getAllValidationErrorMessage}=validatePassword(value,8)
    validateAll()?setErrormessage(""):setErrormessage(getAllValidationErrorMessage())
    value=="" && setErrormessage("")
  }
}
let handleSumbit=(e)=>{
  e.preventDefault()
 
  let {name,userName,password,email}=state
    if(!name||!userName||!password||!email){
      toast.error("All feilds are mandatory")
      return
    }

   let {validateAll,getAllValidationErrorMessage}=validatePassword(password)
  if(!validateAll()){
      toast.error(`${getAllValidationErrorMessage()}`)
    }
    if(!match){
      toast.error("passsword and confirm password did not match")
  return
    }
    toast.success("Successfully sumbited")
empService.regUser(state)

  
}



  return (
    <div  className='  bg-[#bfb4b46f] bg-[url()] size-full  flex justify-center items-center'  >
        <form action="" onSubmit={handleSumbit} className='bg-white h-[90%] max-sm:w-[90%]  overflow-scroll rounded-bl-lg shadow-2xl w-[35%] flex  items-center flex-col gap-6 py-14  ' >

          <div className='w-[80%]  py-3 bg-white flex justify-center items-center rounded-sm'>
            <h1  className='text-[28px] max-sm:text-sm '>Registration form</h1>
          </div>

          <div  className='w-[80%] bg-white flex justify-center items-center border-1  rounded-sm   px-5  py-3'>
            <input  type="text" name="name" placeholder='Enter your name' className='  w-[100%] outline-0 text-[18px]' onChange={handleChange} />
            <span><CgNametag /></span>
          </div>

           <div className='w-[80%] bg-white flex justify-center items-center border-1  rounded-sm   px-5  py-3'>
            <input type="text" name="userName" placeholder='Enter your Username'   className='  w-[100%] outline-0 text-[18px]' onChange={handleChange}/>
            <span><FaUserNurse /></span>
          </div>



         <div  className='w-[80%] bg-white flex justify-center items-center border-1  rounded-sm   px-5  py-3' >
            <input type="email" name="email" placeholder='Enter your email'  className='  w-[100%] outline-0 text-[18px]'onChange={handleChange} />
            <span><CiMail /></span>
          </div>      



           <div  className='w-[80%] bg-white flex justify-center items-center border-1  rounded-sm   px-5  py-3' >
            <input type="password" name="password" placeholder='Enter your password'  className='  w-[100%] outline-0 text-[18px]'onChange={handleChange} />
            <span><TbPassword /></span>
          </div>

          <div className={ errormessage?'w-[80%] bg-white flex justify-center items-center text-red-400  rounded-sm   px-5  py-3  ':'hidden'}>
            <span>{errormessage}</span>
          </div>
 
           <div  className={`w-[80%] bg-white flex justify-center items-center border-1  rounded-sm   px-5  py-3 ${!match?'border-red-600':'border-l-black'}`}>
            <input  type="password" name="repeatpassword" placeholder=' Repeat password'   className='  w-[100%] outline-0 text-[18px]' onChange={handlePassword}/>
            <span><FaRepeat /></span>
          </div>

          <div className='w-[80%] bg-amber-200 flex justify-center items-center border-0 rounded-sm  tracking-[0.5px] text-[19px] py-3 hover:bg-amber-400  active:bg-green-300 active:scale-[0.9]'>
            <button className='w-full'>click</button>
            </div>
        </form>
    </div>
  )
}

export default Register   
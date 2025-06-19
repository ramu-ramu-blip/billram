import React, { useState } from 'react'
import { CgNametag } from "react-icons/cg";
import { FaUserNurse } from "react-icons/fa6";
import { TbPassword } from "react-icons/tb";
import { FaRepeat } from "react-icons/fa6";


const Register = () => {
let [state,setState]=useState({})
let[repeatpas,setPassword]=useState()

let handlePassword =()=>{
  
}

let handleChange=(e)=>{
  let{name,value}=e.target
  setState((preval)=>({...preval,[name]:value})) 
}
let handleSumbit=(e)=>{
  e.preventDefault()
  console.log(state);
  
}


  return (
    <div  className='  bg-[#bfb4b46f] bg-[url()] size-full flex justify-center items-center'  >
        <form action="" onSubmit={handleSumbit} className='bg-white h-[90%] max-sm:w-[90%]  rounded-bl-lg shadow-2xl w-[35%] flex justify-center items-center flex-col gap-6 py-10  ' >

          <div className='w-[80%]  py-3 bg-white flex justify-center items-center rounded-sm'>
            <h1  className='text-[28px] max-sm:text-sm '>Registration form</h1>
          </div>

          <div  className='w-[80%] bg-white flex justify-center items-center border-1  rounded-sm   px-5  py-3'>
            <input  type="text" name="name" placeholder='Enter your name' className='  w-[100%] outline-0 text-[18px]' onChange={handleChange} />
            <span><CgNametag /></span>
          </div>

           <div className='w-[80%] bg-white flex justify-center items-center border-1  rounded-sm   px-5  py-3'>
            <input type="text" name="username" placeholder='Enter your Username'   className='  w-[100%] outline-0 text-[18px]' onChange={handleChange}/>
            <span><FaUserNurse /></span>
          </div>



         <div  className='w-[80%] bg-white flex justify-center items-center border-1  rounded-sm   px-5  py-3' >
            <input type="email" name="email" placeholder='Enter your email'  className='  w-[100%] outline-0 text-[18px]'onChange={handleChange} />
            <span><CgNametag /></span>
          </div>      

           <div  className='w-[80%] bg-white flex justify-center items-center border-1  rounded-sm   px-5  py-3' >
            <input type="password" name="password" placeholder='Enter your password'  className='  w-[100%] outline-0 text-[18px]'onChange={handleChange} />
            <span><CgNametag /></span>
          </div>

           <div  className='w-[80%] bg-white flex justify-center items-center border-1  rounded-sm   px-5  py-3'>
            <input type="password" name="repeatpassword" placeholder=' Repeat password'   className='  w-[100%] outline-0 text-[18px]' onClick={handleChange}/>
            <span><FaRepeat /></span>
          </div>

          <div className='w-[80%] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... flex justify-center items-center border-0 rounded-sm  tracking-[0.5px] text-[19px] py-3'>
            <button>click</button>
            </div>
        </form>
    </div>
  )
}

export default Register  
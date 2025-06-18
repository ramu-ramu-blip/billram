import React from 'react'
import { CgNametag } from "react-icons/cg";
import { FaUserNurse } from "react-icons/fa6";
import { TbPassword } from "react-icons/tb";
import { FaRepeat } from "react-icons/fa6";


const Register = () => {
  return (
    <div  className=' bg-[#efefef] size-full flex justify-center items-center'  >
        <form action="" className='bg-white  rounded-bl-lg shadow-2xl w-[40%] flex justify-center items-center flex-col gap-6 py-10  ' >

          <div className='w-[80%]  py-3 bg-white flex justify-center items-center rounded-sm'>
            <h1  className='text-[24px]'>Registration form</h1>
          </div>

          <div  className='w-[80%] bg-white flex justify-center items-center border-1  rounded-sm   px-5  py-3'>
            <input type="text" name="" placeholder='enter your name' className='  w-[100%] outline-0 text-[18px]' />
            <span><CgNametag /></span>
          </div>

           <div className='w-[80%] bg-white flex justify-center items-center border-1  rounded-sm   px-5  py-3'>
            <input type="text" name="" placeholder='enter your Username'   className='  w-[100%] outline-0 text-[18px]'/>
            <span><FaUserNurse /></span>
          </div>

           

           <div  className='w-[80%] bg-white flex justify-center items-center border-1  rounded-sm   px-5  py-3' >
            <input type="password" name="" placeholder='enter your password'  className='  w-[100%] outline-0 text-[18px]' />
            <span><CgNametag /></span>
          </div>

           <div  className='w-[80%] bg-white flex justify-center items-center border-1  rounded-sm   px-5  py-3'>
            <input type="password" name="" placeholder=' repeat password'   className='  w-[100%] outline-0 text-[18px]'/>
            <span><FaRepeat /></span>
          </div>

          <div className='w-[80%] bg-amber-200 flex justify-center items-center border-0 rounded-sm  tracking-[0.5px] text-[19px] py-3'>
            <button>click</button>
            </div>
        </form>
    </div>
  )
}

export default Register
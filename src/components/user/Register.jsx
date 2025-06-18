import React from 'react'


const Register = () => {
  return (
    <div  className='bg-[#efefefe]  size-full flex justify-center items-center'  >
        <form action="" className='bg-amber-100 w-[40%] flex justify-center items-center flex-col gap-4 py-10  ' >

          <div className='w-[100%] bg-amber-400 flex justify-center items-center '>
            <h1>Registration form</h1>
          </div>

          <div  className='w-[100%] bg-amber-400 flex justify-center items-center '>
            <input type="text" name="" placeholder='enter your name' className=' bg-amber-50 w-[80%]' />
            <span></span>
          </div>

           <div className='w-[100%] bg-amber-400 flex justify-center items-center '>
            <input type="text" name="" placeholder='enter your Username' />
          </div>

           <div className='w-[100%] bg-amber-400 flex justify-center items-center '>
            <input type="email" name="" placeholder='enter your name' />
          </div>

           <div className='w-[100%] bg-amber-400 flex justify-center items-center '>
            <input type="password" name="" placeholder='enter your password' />
          </div>

           <div className='w-[100%] bg-amber-400 flex justify-center items-center '>
            <input type="password" name="" placeholder=' repeat password' />
          </div>

          <div className='w-[100%] bg-amber-400 flex justify-center items-center '><button>click</button></div>
        </form>
    </div>
  )
}

export default Register
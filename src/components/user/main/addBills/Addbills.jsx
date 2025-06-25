import React, { useState } from 'react'
import { data, useNavigate } from 'react-router'

const Addbills = () => {
  let navigation=useNavigate()
  let [btnclick,setBtn]=useState(false)

  let handleBtn=()=>{
    setBtn(!btnclick)
    
    
  }
  console.log(btnclick);

  const render=()=>{
    navigation("/additem")
  }

  const [bill,setBill]=useState(
    {
    companyName:"",
    PoNo:"",
    invoiceDate:"",
    workCompletionDate:"",
    address:"",
    PAN:"",
    GSTNo:"",
    clientBankName:""
    }
  )

  const handleChange =(e)=>{
    let{name,value}=e.target
    setBill((preVal)=>({...preVal,[name]:value}))
  }

  const handleSumbit=(e)=>{
    e.preventDefault()
 console.log(bill);
 
  }

  return (
     <div  className='  bg-[#bfb4b46f] bg-[url()] size-full  flex justify-center items-center'  >
            <form action="" onSubmit={handleSumbit} className='bg-white h-[90%] max-sm:w-[90%]  overflow-scroll rounded-bl-lg shadow-2xl w-[35%] flex  items-center flex-col gap-6 py-14  ' >
    
              <div className='w-[80%]  py-3 bg-white flex justify-center items-center rounded-sm'>
                <h1  className='text-[28px] max-sm:text-sm '>Add Bill form</h1>
              </div>
    
              <div  className='w-[80%] bg-white flex justify-center items-center border-1  rounded-sm   px-5  py-3'>
                <input  type="text" name="companyName" placeholder='Enter your companyName' className='  w-[100%] outline-0 text-[18px]' onChange={handleChange} />
               
              </div>
    
               <div className='w-[80%] bg-white flex justify-center items-center border-1  rounded-sm   px-5  py-3'>
                <input type="text" name="PoNo" placeholder='Enter your PoNo' value={data}   className='  w-[100%] outline-0 text-[18px]' onChange={handleChange}/>
              
              </div>

              
               <div className='w-[80%] bg-white flex justify-center items-center border-1  rounded-sm   px-5  py-3'>
                <input type="date" name="workCompletionDate" placeholder='Enter your work Completion Date'   className='  w-[100%] outline-0 text-[18px]' onChange={handleChange}/>
                
              </div>

              
               <div className='w-[80%] bg-white flex justify-center items-center border-1  rounded-sm   px-5  py-3'>
                <input type="text" name="address" placeholder='Enter your address'   className='  w-[100%] outline-0 text-[18px]' onChange={handleChange}/>
               
              </div>
              
               <div className='w-[80%] bg-white flex justify-center items-center border-1  rounded-sm   px-5  py-3'>
                <input type="text" name="PAN" placeholder='Enter your PAN'   className='  w-[100%] outline-0 text-[18px]' onChange={handleChange}/>
              
              </div>

              <div className='w-[80%] bg-white flex justify-center items-center border-1  rounded-sm   px-5  py-3'>
                <input type="text" name="GSTNo" placeholder='Enter your GSTNo'   className='  w-[100%] outline-0 text-[18px]' onChange={handleChange}/>
                
              </div>

              <div className='w-[80%] bg-white flex justify-center items-center border-1  rounded-sm   px-5  py-3'>
                <input type="text" name="clientBankName" placeholder='Enter your clientBankName'   className='  w-[100%] outline-0 text-[18px]' onChange={handleChange}/>
               
              </div>
 

              <div   onChange={handleBtn} className='w-[80%] bg-amber-200 flex justify-center items-center border-0 rounded-sm  tracking-[0.5px] text-[19px] py-3 hover:bg-amber-400  active:bg-green-300 active:scale-[0.9]'>
                <button onClick={render}  className={`'w-full '`} >AddItem   </button>
              
                </div>

    
              
    
              <div className='w-[80%] bg-amber-200 flex justify-center items-center border-0 rounded-sm  tracking-[0.5px] text-[19px] py-3 hover:bg-amber-400  active:bg-green-300 active:scale-[0.9]'>
                <button className='w-full'>click</button>
                </div>
            </form>
        </div>
  )
}

export default Addbills
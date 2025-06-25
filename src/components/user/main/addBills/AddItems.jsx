import React, { useState } from 'react'

const AddItems = () => {
     const [bill,setBill]=useState(
        {
        description:"",
        quantity:"",
        rate:"",
        amount:"",
        cgstPercent:"",
        sgstPercent:"",
      
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
                <h1  className='text-[28px] max-sm:text-sm '>Add items form</h1>
              </div>
    
              <div  className=' w-[80%] bg-white flex justify-center items-center border-1  rounded-sm   px-5  py-3'>
                <input  type="text" name="description" placeholder='Enter your description' className='  w-[100%] outline-0 text-[18px]' onChange={handleChange} />
               
              </div>
    
               <div className=' w-[80%] bg-white flex justify-center items-center border-1  rounded-sm   px-5  py-3'>
                <input type="number" name="quantity" placeholder='Enter your quantity'   className='  w-[100%] outline-0 text-[18px]' onChange={handleChange}/>
              
              </div>

              
               <div className=' w-[80%] bg-white flex justify-center items-center border-1  rounded-sm   px-5  py-3'>
                <input type="number" name="rate" placeholder='Enter your rate'   className='  w-[100%] outline-0 text-[18px]' onChange={handleChange}/>
                
              </div>

              
               <div className=' w-[80%] bg-white flex justify-center items-center border-1  rounded-sm   px-5  py-3'>
                <input type="number" name="amount" placeholder='Enter your amount'   className='  w-[100%] outline-0 text-[18px]' onChange={handleChange}/>
               
              </div>
              
               <div className=' w-[80%] bg-white flex justify-center items-center border-1  rounded-sm   px-5  py-3'>
                <input type="number" name="cgstPercent" placeholder='Enter your cgstPercent'   className='  w-[100%] outline-0 text-[18px]' onChange={handleChange}/>
              
              </div>

              <div className=' w-[80%] bg-white flex justify-center items-center border-1  rounded-sm   px-5  py-3'>
                <input type="number" name="sgstPercent" placeholder='Enter your sgstPercent'   className='  w-[100%] outline-0 text-[18px]' onChange={handleChange}/>
                
              </div>

             
    
              <div className='  max-sm:text-[25px]  w-[80%] bg-amber-200 flex justify-center items-center border-0 rounded-sm  tracking-[0.5px] text-[19px] py-3 hover:bg-amber-400  active:bg-green-300 active:scale-[0.9]'>
                <button className='w-full'>Click</button>
                </div>
            </form>
        </div>
  )
}

export default AddItems
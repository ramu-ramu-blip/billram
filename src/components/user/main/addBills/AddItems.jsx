import React, { useState } from 'react'

const AddItems = ({removeItem,val,updateElements}) => {
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
       // setBill((preVal)=>({...preVal,[name]:value}))
       updateElements(val.id,name,value)
      }
    
      const handleSumbit=(e)=>{
        e.preventDefault()
     console.log(bill);
     
      }




      
  return (
     <div  className='  bg-[#bfb4b46f] bg-[url()] size-full  flex justify-center items-center  w-full '  >

      
            <div action="" onSubmit={handleSumbit} className='bg-white  h-[90%] max-sm:w-[90%]  overflow-scroll rounded-bl-lg shadow-2xl w-[80%] flex  items-center flex-col gap-6 py-14  ' >
    
        <div  className='flex items-center gap-2 bg-red-400 px-4 py-1 rounded-xl hover:bg-red-600 text-amber-200 hover:text-amber-100 hover:font-medium cursor-pointer' 
         onClick={()=>{
            removeItem(val.id)
          }}   >
            <div    >Remove Items</div>
        </div>

          
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

             
    
              
            </div>
        </div>
  )
}

export default AddItems
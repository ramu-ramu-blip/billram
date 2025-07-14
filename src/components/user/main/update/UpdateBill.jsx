import React, { useContext, useState } from 'react'
import { useLocation, useNavigate } from 'react-router';
import empService from '../../../../service/empService';
import AddItems from '../addBills/AddItems';
import { contextApi } from '../../../context/Context ';
import toast from 'react-hot-toast';

const UpdateBill = () => {


   const navigate=useNavigate()
    let {state}=useLocation()
   console.log(state);
    
    
  const [bill,setBill]=useState(
    {
    companyName:state.companyName,
    PoNo:state.PoNo,
    invoiceDate:new Date().toISOString().split("T")[0],
    workCompletionDate:state.workCompletionDate,
    address:state.address,
    PAN:state.PAN,
    GSTNo:state.GSTNo,
    clientBankName:state.clientBankName
    }
  )
  const [item,setItem]=useState(state.items)
  const {globalState}=useContext(contextApi)

  const handleClick=(e)=>{
     let newObj={
      id:Date.now(),
      description:"",
      quantity:"",
      rate:"",
      cgstPercent:"",
      sgstPercent:""
    }
   setItem((preVal)=>([...preVal,newObj])) 
     
     
    
  }

  const handleChange =(e)=>{
    let{name,value}=e.target
    setBill((preVal)=>({...preVal,[name]:value}))
  }

  const handleSumbit=(e)=>{
    e.preventDefault()
 console.log(bill);
  let {companyName,workCompletionDate,PoNo,address,PAN,GSTNo,clientBankName}=bill
    let totalAmount=item.reduce((acc,val)=>{
      const base=parseInt(val.amount)
      const cgst=base*parseInt(val.cgstPercent)/100
      const sgst=base*parseInt(val.sgstPercent)/100

      // console.log(base,cgst,sgst,acc);
      
      return acc+base+cgst+sgst
    },0)
    let payload={
      companyName,
      workCompletionDate,
      PoNo,
      address,
      PAN,
      GSTNo,
      clientBankName,
      items:item,
      invoiceDate:new Date().toISOString().split("T")[0],
      totalAmount
    }
    console.log(payload);
    (async()=>{
try {
        let data=await empService.updateBills(payload,globalState.token,state._id)
      if(data.status==200){
        toast.success("Bills added successfully")
       navigate("/home")
      }else{
        toast.error("Something went wrong")
      }
} catch (error) {
  toast.error("Something went wrong")
}
    })();
 
  }
  


  const removeElement=(id)=>{
           setItem(item.filter((val)=>val.id!=id))
      }
     const updateElements=(id,name,value)=>{
    // console.log(id,name,value);
    
    setItem((preVal)=>{
     return preVal.map((val)=>{
        if(val.id==id){
      
          
          const updateItems={
            ...val,[name]:value
          }
          updateItems.amount=val.rate * val.quantity
          return updateItems
        }

        return val
      })

    })
  }
let {PAN,companyName,GSTNo,workCompletionDate,clientBankName,address,PoNo} =bill

  return (
 <div  className='  bg-[#bfb4b46f] bg-[url()] size-full  flex justify-center items-center'  >
            <form action="" onSubmit={handleSumbit} className='bg-white h-[90%] max-sm:w-[90%]  overflow-scroll rounded-bl-lg shadow-2xl w-[35%] flex  items-center flex-col gap-6 py-14  ' >
    
             

              <div className='w-[80%]  py-3 bg-white flex justify-center items-center rounded-sm'>
                <h1  className='text-[28px] max-sm:text-sm '>update Bill form</h1>
              </div>
    
              <div  className='w-[80%] bg-white flex justify-center items-center border-1  rounded-sm   px-5  py-3'>
                <input  type="text" name="companyName" placeholder='Enter your companyName' className='  w-[100%] outline-0 text-[18px]' onChange={handleChange} value={companyName} />
               c
              </div>
    
               <div className='w-[80%] bg-white flex justify-center items-center border-1  rounded-sm   px-5  py-3'>
                <input type="text" name="PoNo" placeholder='Enter your PoNo'    className='  w-[100%] outline-0 text-[18px]' onChange={handleChange} value={PoNo}/>
              =
              </div>

              
               <div className='w-[80%] bg-white flex justify-center items-center border-1  rounded-sm   px-5  py-3'>
                <input type="date" name="workCompletionDate" placeholder='Enter your work Completion Date'   className='  w-[100%] outline-0 text-[18px]' onChange={handleChange} max={new Date().toISOString().split("T")[0]} value={workCompletionDate}/>
                
              </div>

              
               <div className='w-[80%] bg-white flex justify-center items-center border-1  rounded-sm   px-5  py-3'>
                <input type="text" name="address" placeholder='Enter your address'   className='  w-[100%] outline-0 text-[18px]' onChange={handleChange} value={address}/>
               
              </div>
              
               <div className='w-[80%] bg-white flex justify-center items-center border-1  rounded-sm   px-5  py-3'>
                <input type="text" name="PAN" placeholder='Enter your PAN'   className='  w-[100%] outline-0 text-[18px]' onChange={handleChange} value={PAN}/>
              
              </div>

              <div className='w-[80%] bg-white flex justify-center items-center border-1  rounded-sm   px-5  py-3'>
                <input type="text" name="GSTNo" placeholder='Enter your GSTNo'   className='  w-[100%] outline-0 text-[18px]' onChange={handleChange} value={GSTNo}/>
                
              </div>

              <div className='w-[80%] bg-white flex justify-center items-center border-1  rounded-sm   px-5  py-3'>
                <input type="text" name="clientBankName" placeholder='Enter your clientBankName'   className='  w-[100%] outline-0 text-[18px]' onChange={handleChange} value={clientBankName}/>
               
              </div>
 
            {
                item.map((val)=><AddItems key={val.id} 
                removeElement={removeElement} 
                val={val}
                 updateElements={updateElements}>

                </AddItems>)
            }

              <div    className='w-[80%] bg-amber-200 flex justify-center items-center border-0 rounded-sm  tracking-[0.5px] text-[19px] py-3 hover:bg-amber-400  active:bg-green-300 active:scale-[0.9]'>
                <button  type='button' onClick={handleClick}  className={`'w-full '`} >AddItem   </button>
              
                </div>

    
              
    
              <div className='w-[80%] bg-amber-200 flex justify-center items-center border-0 rounded-sm  tracking-[0.5px] text-[19px] py-3 hover:bg-amber-400  active:bg-green-300 active:scale-[0.9]'>
                <button className='w-full'>click</button>
                </div>
            </form>
        </div>
    
    
  )
}

export default UpdateBill
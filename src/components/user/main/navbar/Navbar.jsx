import React, { useState } from 'react'
import { Link, NavLink } from 'react-router'
import { TfiMenuAlt } from "react-icons/tfi";
import { IoIosCloseCircle } from "react-icons/io";


const Navbar = () => {

  let [show,setShow]=useState(false)
  
  const hadleShow=()=>{
    setShow(!show)
  }
  
  
  return (
     
   <div className={`     ' bg-amber-300 w-full h-[80px] flex justify-around items-center
     text-xl ${show?'flex flex-col justify-around gap-2 items-start px-7 py-6 h-[250px]':""} 
     sm:flex-row sm:h-[80px] sm:justify-around sm:items-center  `}>
         

        <div className={`hidden max-sm:flex  `}>  
         {
           show ? <IoIosCloseCircle onClick={hadleShow}  className='text-4xl justify-start items-start'/>: <TfiMenuAlt onClick={hadleShow}/>
         }
        </div>

         <div   className={`max-sm:hidden ${show?'block':""}`}>
          <NavLink    className={({isActive})=>isActive?"bg-amber-100 p-2 rounded-sm ":""} end  to="/home">Home</NavLink>
          </div>
 
        <div    className={`max-sm:hidden${show?'block':""}`}>   
          <NavLink  className={({isActive})=>isActive?"bg-amber-100 p-2 rounded-sm ":""}  to="addBills" >AddBills</NavLink>
          </div>

        <div   className={`max-sm:hidden${show?'block':""}`}>
          <NavLink className={({isActive})=>isActive?"bg-amber-100 p-2 rounded-sm ":""}  to="filterBills">FilterBills</NavLink>
        </div>

        <div    className={`max-sm:hidden${show?'block':""}`}>
          <NavLink className={({isActive})=>isActive?"bg-amber-100 p-2 rounded-sm ":""}   to="about">About</NavLink>
        </div>

         
       
   </div>
        
     
  )
}

export default Navbar
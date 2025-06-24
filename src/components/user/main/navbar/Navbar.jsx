import React, { useState } from 'react'
import { Link } from 'react-router'
import { TfiMenuAlt } from "react-icons/tfi";
import { IoIosCloseCircle } from "react-icons/io";


const Navbar = () => {

  let [show,setShow]=useState(false)
  
  const hadleShow=()=>{
    setShow(!show)
  }
  console.log(show);
  
  return (
    
   <div className={` '   bg-amber-300 w-full h-[80px] flex justify-around items-center text-xl ${show?'flex flex-col justify-around gap-2 items-start px-7 py-6 h-[250px]':""} sm:flex-row sm:h-[80px] sm:justify-around sm:items-center  `}>
         

        <div className={`hidden  max-sm:flex  `}> 
         {
           show ? <IoIosCloseCircle onClick={hadleShow}  className='text-4xl justify-start items-start'/>: <TfiMenuAlt onClick={hadleShow}/>
         }
        </div>

         <div   className={`max-sm:hidden${show?'block':""}`}>
          <Link to="/home">Home</Link>
          </div>

        <div    className={`max-sm:hidden${show?'block':""}`}>
          <Link to="addBills" >AddBills</Link>
          </div>

        <div   className={`max-sm:hidden${show?'block':""}`}>
          <Link to="filterBills">FilterBills</Link>
        </div>

        <div    className={`max-sm:hidden${show?'block':""}`}>
          <Link to="about">About</Link>
        </div>
               
       
       
   </div>
        
     
  )
}

export default Navbar
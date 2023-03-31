import React from 'react'
import {data} from '../../Mock_datas/deal_data'

export default function Deal() {
  return (
    <div className="w-full h-72 ml-5 object-cover border-2 border-slate-200 shadow-sm rounded-xl ">
        <h1 className="font-bold text-lg mx-5 mt-4 tracking-widest">DEAL OF THE DAY</h1>
        <div className='relative flex items-center  '>
        <div className="container items-center">
            <div className="flex justify-center items-center ">
                <div className="h-40 w-60 mx-5">
                    <img src="https://source.unsplash.com/120x120/?formal" alt="" className = "rounded-md shadow-lg h-44 w-60"/>
                    <div className="">
                                           
                    </div>
                </div>

                <div className="h-40 w-60 m-5">
                    <img src="https://source.unsplash.com/120x120/?inner" alt="" className = "rounded-md shadow-lg h-44 w-60"/>
                    <div className="">
                         
                    </div>
                </div>

                <div className="h-40 w-60 m-5">
                    <img src="https://source.unsplash.com/120x120/?white" alt="" className = "rounded-md shadow-lg h-44 w-60"/>
                    <div className="">
                        
                    </div>
                </div>

                <div className="h-40 w-60 m-5">
                    <img src="https://source.unsplash.com/120x120/?shirt" alt="" className = "rounded-md shadow-lg h-44 w-60"/>
                    <div className="">
                       
                    </div>
                </div>

                <div className="h-40 w-60 m-5">
                    <img src="https://source.unsplash.com/120x120/?tshirt" alt="" className = "rounded-md shadow-lg h-44 w-60"/>
                    <div className="">
                        
                    </div>
                </div>

                <div className="h-40 w-60 m-5">
                    <img src="https://source.unsplash.com/120x120/?formal" alt="" className = "rounded-md shadow-lg h-44 w-60"/>
                    <div className="">
                        
                    </div>
                </div>
                
            </div>
           </div> 
            
        </div>
    </div>
  )
}

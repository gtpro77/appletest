import Link from "next/link";


export default function loading(){
    return(
       
<div className="flex justify-center items-center h-screen">
  
  <div className="animate-spin ease-linear rounded-full w-10 h-10 border-t-2 border-b-2 border-blue-500 ml-3"></div>
</div>

    )
}
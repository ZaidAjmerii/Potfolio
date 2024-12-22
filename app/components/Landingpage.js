import React from 'react'
import { Exo_2 } from 'next/font/google'
import './navbar.css'

export const exo = Exo_2({
  subsets: ["cyrillic"],
  weight: ["100" , "200" , "300" , "400" , "500" , "600" , "700" , "800" , "900"]
});



export const Navbar = () => {
  return (
    <div className={` mx-[2vw] h-[15vh] flex items-center justify-between ${exo.className} `}>
      <div className={`logo text-white font-bold text-4xl `} >
        Luke
      </div>

      <div className="">
{/* Empty at the mvment, Still in production */}
      </div>


      







    </div>
  )
}

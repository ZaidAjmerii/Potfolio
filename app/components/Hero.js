import React from 'react'
import './hero.css'
import { exo } from './Landingpage'


export const Hero = () => {
  return (
    <div className={`h-[80vh] mx-[2vw]  flex items-center justify-center text-white ${exo.className}`}>
 
      <div className="right-side w-[90%] sm:w-[55%] flex flex-col items-center text-center gap-6">
        <div>

{/* This div was created to prevent gap between the two div of subject line */}
        <div className="sl block text-xl sm:text-5xl font-bold text-[#1EEB7A]">Luke Kamado</div>
        <div className="sl block text-xl sm:text-5xl font-bold">Digital Marketer</div>
        </div>
        <div className="randomText text-sm sm:text-base text-slate-300 sm:w-[90%]">I’m a digital marketer specializing in crafting <span className='text-[#1EEB7A]'>high-converting</span> Facebook ads that's increase you <span className='text-[#1EEB7A]'>ROAS</span>. By using the art of persuasive copywriting with the psychology of human behavior, I create campaigns that don’t just grab user attention—they inspire action. Whether it’s <span className='text-[#1EEB7A]'>boosting sales, generating leads, or growing brand awareness,</span> I know how to guide your audience to take the exact steps you need.</div>
      <button>
        <a href='mailto:zaidsajmeri@email.com'>
       Let's Connect
       </a>
      </button>
      </div>  
    </div>
  )
}

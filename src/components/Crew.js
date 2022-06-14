import React from 'react'
import Header from './Header'
import CrewCommander from "../assets/crew/image-douglas-hurley.png"


export default function Crew() {
   return (
      <>      
         <main id="main" className='bg-container-crew'>
         <Header />
            <div className="container destination-container ">
               <h2 className="destination-title fs-500 ff-sans-cond uppercase"><span>02</span> Meet your crew</h2>
            </div>
            
            
            <div className="crew-container container flex">
            
               <div className="crew-text">
                  <h2 className="uppercase ff-serif fs-500">Commander</h2>
                  <h3 className="uppercase ff-serif fs-700">Douglas Hurley</h3>
                  <p className="ff-sans-normal text-accent fs-400">
                     Douglas Gerald Hurley is an American engineer, former Marine Corps pilot
                     and former NASA astronaut. He launched into space for the third time as
                     commander of Crew Dragon Demo-2.
                  </p>
                  <div className="flex dot-indicators crew" >
                     <a href="./crew"  id="commander" className="current"><span className="sr-only">Commander</span></a>
                     <a href="./crewEngineer" id="engineer" className=""><span className="sr-only">Flight Engineer</span></a>
                     <a href="./crewPilot" id="pilot" className=""><span className="sr-only">Pilot</span></a>
                     <a href="./crewSpecialist" id="Specialist" className=""><span className="sr-only">Specialist</span></a>
                  </div>
               </div>
            <div className="crew-img-container">
            <img className="crew-img" src={CrewCommander} alt="Crew Commander Douglas Hurley" />
            </div>
         </div>
    </main>
      </>
   )
}
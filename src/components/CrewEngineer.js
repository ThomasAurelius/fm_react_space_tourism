import React from 'react'
import Header from './Header'
import CrewEngineerImg from "../assets/crew/image-anousheh-ansari.png"


export default function CrewEngineer() {
   return (
      <>
        <main id="main" className='bg-container-crew'>
         <Header />
          <div className="container destination-container ">
            <h2 className="destination-title fs-500 ff-sans-cond uppercase"><span>02</span> Meet your crew</h2>
          </div>
          <div className="crew-container container flex">
          
            <div className="crew-text">
              <h2 className="uppercase ff-serif fs-500">Flight Engineer</h2>
              <h3 className="uppercase ff-serif fs-700">Anousheh Ansari</h3>
              <p className="ff-sans-normal text-accent fs-400">
                Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems.
                Ansari was the fourth self-funded space tourist, the first self-funded woman to
                fly to the ISS, and the first Iranian in space.
              </p>
              <div className="flex dot-indicators crew">
                <a href="./crew"  className=""><span className="sr-only">Commander</span></a>
                <a href="./crewEngineer" className="current"><span className="sr-only">Flight Engineer</span></a>
                <a href="./crewPilot"  className=""><span className="sr-only">Pilot</span></a>
                <a href="./crewSpecialist"  className=""><span className="sr-only">Specialist</span></a>
              </div>
            </div>
            <div className="crew-img-container">
              <img className="crew-img" src={CrewEngineerImg} alt="Crew Engineer Anousheh Ansari" />
            </div>
            </div>
        </main>
      </>
   )
}
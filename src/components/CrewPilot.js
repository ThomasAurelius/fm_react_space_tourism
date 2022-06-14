import React from 'react'
import Header from './Header'
import CrewPilotImg from "../assets/crew/image-victor-glover.png"


export default function CrewPilot() {
   return (
      <>
      
          <main id="main" className='bg-container-crew'>
          <Header />
            <div className="container destination-container ">
              <h2 className="destination-title fs-500 ff-sans-cond uppercase"><span>02</span> Meet your crew</h2>
            </div>
            <div className="crew-container container flex">
              <div className="crew-text">
                <h2 className="uppercase ff-serif fs-500">Pilot</h2>
                <h3 className="uppercase ff-serif fs-700">Victor Glover</h3>
                <p className="ff-sans-normal text-accent fs-400">
                  Pilot on the first operational flight of the SpaceX Crew Dragon to the
                  International Space Station. Glover is a commander in the U.S. Navy where
                  he pilots an F/A-18. He was a crew member of Expedition 64, and served as a
                  station systems flight engineer.
                </p>
            
                <div className="flex dot-indicators crew" >
                  <a href="./crew"  className=""><span className="sr-only">Commander</span></a>
                  <a href="./crewEngineer" className=""><span className="sr-only">Flight Engineer</span></a>
                  <a href="./crewPilot" className="current"><span className="sr-only">Pilot</span></a>
                  <a href="./crewSpecialist" className=""><span className="sr-only">Specialist</span></a>
                </div>
              </div>
              <div className="crew-img-container">
                <img className="crew-img" src={CrewPilotImg} alt="Crew Pilot Victor Glover" />
              </div>
            </div>
          </main>
      </>
   )
}
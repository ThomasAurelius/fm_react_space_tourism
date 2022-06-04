import React from 'react'
import Header from './Header'
import CrewSpecialistImg from "../assets/crew/image-mark-shuttleworth.png"


export default function CrewSpecialist() {
   return (
      <>
      
        <main id="main" className='bg-container-crew'>
        <Header />
          <div className="container destination-container ">
            <h2 className="destination-title fs-500 ff-sans-cond uppercase"><span>02</span> Meet your crew</h2>
          </div>
          <div className="crew-container container flex">
          
            <div className="crew-text">
              <h2 className="uppercase ff-serif fs-500">Mission Specialist</h2>
              <h3 className="uppercase ff-serif fs-700">Mark Shuttleworth</h3>
              <p className="ff-sans-normal text-accent fs-400">
                Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind
                the Linux-based Ubuntu operating system. Shuttleworth became the first South
                African to travel to space as a space tourist.
              </p>
          
              <div className="flex dot-indicators crew" >
                <a href="./crew" className=""><span className="sr-only">Commander</span></a>
                <a href="./crewEngineer" className=""><span className="sr-only">Flight Engineer</span></a>
                <a href="./crewPilot" className=""><span className="sr-only">Pilot</span></a>
                <a href="./crewSpecialist" className=""><span className="sr-only">Specialist</span></a>
              </div>
            </div>
            <div className="crew-img-container">
            <img className="crew-img" src={CrewSpecialistImg} alt="Crew Specialist Mark Shuttleworth" />
            </div>
            </div>
        </main>
      </>
   )
}
import React from 'react'
import Header from './Header'
import VehicleLandscape from "../assets/technology/image-launch-vehicle-landscape.jpg"
import VehiclePortrait from "../assets/technology/image-launch-vehicle-portrait.jpg"

export default function TechnologyVehicle() {
   return (
      <>
      
      <main id="main" className="bg-tech-container">
      <Header />
         <div className="container destination-container ">
            <h2 className="destination-title fs-500 ff-sans-cond uppercase"><span>03</span> Space launch 101</h2>
         </div>
         <div className="tech-container flex">
            <div className="flex numbered-indicators" >
            <button className='current' ><a href="./technologyVehicle">1</a></button>
            <button ><a href="./technologySpaceport">2</a></button>
            <button  ><a href="./technology">3</a></button>
            </div>
            <div className="tech-text">
            <h2 className="uppercase fs-400 ff-sans-cond">The terminology...</h2>
            <h3 className="uppercase fs-700 ff-serif">Launch vehicle</h3>
            <p>
               A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a
               payload from Earth's surface to space, usually to Earth orbit or beyond. Our
               WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall,
               it's quite an awe-inspiring sight on the launch pad!
            </p>
            </div>
            <div className="tech-img ">
            <img className="landscape" src={VehicleLandscape} alt="Launch Vehicle" />
            <img className="portrait" src={VehiclePortrait} alt="Launch Vehicle" />
            </div>
         </div>
      </main>
      </>
   )
}
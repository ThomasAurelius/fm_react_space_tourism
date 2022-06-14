import React from 'react'
import Header from './Header'
import SpaceportLandscape from "../assets/technology/image-spaceport-landscape.jpg"
import SpaceportPortrait from "../assets/technology/image-spaceport-portrait.jpg"

export default function TechnologySpaceport() {
   return (
      <>
      
     <main id="main" className="bg-tech-container">
     <Header />
      <div className="container destination-container ">
         <h2 className="destination-title fs-500 ff-sans-cond uppercase"><span>03</span> Space launch 101</h2>
      </div>
      <div className="tech-container flex">
         <div className="flex numbered-indicators" >
         <button ><a href="./technologyVehicle">1</a></button>
         <button className='current'><a href="./technologySpaceport">2</a></button>
         <button ><a href="./technology">3</a></button>
         </div>
         <div className="tech-text">
         <h2 className="uppercase fs-400 ff-sans-cond">The terminology...</h2>
         <h3 className="uppercase fs-700 ff-serif">Spaceport</h3>
         <p>
            A spaceport or cosmodrome is a site for launching (or receiving) spacecraft,
            by analogy to the seaport for ships or airport for aircraft. Based in the
            famous Cape Canaveral, our spaceport is ideally situated to take advantage
            of the Earth’s rotation for launch.
         </p>
         </div>
         <div className="tech-img ">
         <img className="landscape" src={SpaceportLandscape} alt="Spaceport"/>
         <img className="portrait" src={SpaceportPortrait} alt="Spaceport"/>
         </div>
      </div>
   </main>
      </>
   )
}
import React from 'react'
import Header from './Header'
import CapsuleLandscape from "../assets/technology/image-space-capsule-landscape.jpg"
import CapsulePortrait from "../assets/technology/image-space-capsule-portrait.jpg"

export default function Technology() {
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
               <button ><a href="./technologySpaceport">2</a></button>
               <button ><a href="./technology">3</a></button>
            </div>
            <div className="tech-text">
               <h2 className="uppercase fs-400 ff-sans-cond">The terminology...</h2>
               <h3 className="uppercase fs-700 ff-serif">Space capsule</h3>
               <p>
               A space capsule is an often-crewed spacecraft that uses a blunt-body reentry
               capsule to reenter the Earth's atmosphere without wings. Our capsule is where
               you'll spend your time during the flight. It includes a space gym, cinema,
               and plenty of other activities to keep you entertained.
               </p>
            </div>
            <div className="tech-img ">
               <img className="landscape" src={CapsuleLandscape} alt="Space Capsule" />
               <img className="portrait" src={CapsulePortrait} alt="Space Capsule" />
            </div>
         </div>
      </main>
      </>
   )
}
import React from 'react'
import Header from './Header'

export default function DestinationMars() {
   return (
      <main id="main" className='bg-container-destination'>
      <Header />
         <div className="container destination-container ">
         <h2 className="destination-title fs-500 ff-sans-cond uppercase"><span>01</span> Pick your destination</h2>
         </div>
         <div id="mars" className="container destination-container grid">
         <div className="destination-img">
         </div>
         <div className="destination-text">
            <div className="underline-indicators flex tab-buttons">
               <a href="./destination" id="moon-btn"
               className="letter-spacing-2 bg-dark text-white ff-sans-cond uppercase">Moon</a>
               <a href="./destinationMars" id="mars-btn" 
               className="  bg-dark letter-spacing-2 active text-white ff-sans-cond uppercase">Mars</a>
               <a href="./destinationEuropa" id="europa-btn" 
               className="bg-dark letter-spacing-2  text-white ff-sans-cond uppercase">Europa</a>
               <a href="./destinationTitan" id="titan-btn" 
               className="bg-dark letter-spacing-2  text-white ff-sans-cond uppercase">Titan</a>
            </div>
            <h2 className="destination-name uppercase fs-800">Mars</h2>
            <p>
               Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons,
               the tallest planetary mountain in our solar system. It’s two and a half times
               the size of Everest!
            </p>
            <div className="destination-facts uppercase">
               <div className="fact ">
               <h3 className="ff-sans-cond letter-spacing-3 fs-300">Avg. distance</h3>
               <p className="fs-600">225 mil. km</p>
               </div>
               <div className="fact">
               <h3 className="ff-sans-cond letter-spacing-3 fs-300">Est. travel time</h3>
               <p className="fs-600">9 months</p>
               </div>
            </div>
         </div>
         </div>
      </main>
   )
}

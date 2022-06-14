import React from 'react' 
import Header from './Header'

export default function DestinationTitan() {
   return (
      <main id="main" className='bg-container-destination'>
      <Header />
         <div className="container destination-container ">
            <h2 className="destination-title fs-500 ff-sans-cond uppercase"><span>01</span> Pick your destination</h2>
         </div>
      <div id="titan"  className="container  destination-container grid">
         <div className="destination-img">
      
         </div>
         <div className="destination-text">
         <div className="underline-indicators flex tab-buttons">
            <a href="./destination" id="moon-btn" className="letter-spacing-2 bg-dark text-white ff-sans-cond uppercase">Moon</a>
            <a href="./destinationMars" id="mars-btn" className="  bg-dark letter-spacing-2  text-white ff-sans-cond uppercase">Mars</a>
            <a href="./destinationEuropa" id="europa-btn"
               className=" bg-dark letter-spacing-2 text-white ff-sans-cond uppercase">Europa</a>
            <a href="./destinationTitan" id="titan-btn" className=" bg-dark letter-spacing-2 active text-white ff-sans-cond uppercase">Titan</a>
         </div>
      
         <h2 className="destination-name uppercase fs-800">Titan</h2>
      
         <p>
            The only moon known to have a dense atmosphere other than Earth, Titan
            is a home away from home (just a few hundred degrees colder!). As a
            bonus, you get striking views of the Rings of Saturn.
         </p>
      
         <div className="destination-facts uppercase">
            <div className="fact ">
               <h3 className="ff-sans-cond letter-spacing-3 fs-300">Avg. distance</h3>
               <p className="fs-600">1.6 bil. km</p>
            </div>
            <div className="fact">
               <h3 className="ff-sans-cond letter-spacing-3 fs-300">Est. travel time</h3>
               <p className="fs-600">7 years</p>
            </div>
         </div>
         </div>
      </div>
    </main>
   )
}
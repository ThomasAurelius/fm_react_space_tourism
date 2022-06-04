import React from 'react'
import logo from '../assets/shared/logo.svg'
import '../App.css'
import { Link } from 'react-router-dom'

export default function Header() {

const [visibility, setVisibility] = React.useState(false)

const swapVisible = (prevVisibility) => {
   setVisibility(!prevVisibility)
}

console.log(visibility)

   return (
      <>
         <a href="#main" className="skip-to-content">Skip to content</a>
         <nav>
            <div className="flex nav-header">
               <div className="logo">
                  <img src={logo} alt="" />
               </div>
               <button onClick={swapVisible} id="mobile-nav-toggle" className="mobile-nav-toggle" aria-controls="primary-navigation"
               aria-expanded="false"><span className="sr-only">Menu</span></button>
               <ul id="primary-navigation" data-visible="false" className="primary-navigation underline-indicators flex">
                  <li className="active"><a className="text-white uppercase letter-spacing-2" href="/"><span>00</span>Home</a>
                  </li>
                  <li><a className="text-white uppercase letter-spacing-2" href="./destination"><span>01</span>Destination</a>
                  </li>
                  <li><a className="text-white uppercase letter-spacing-2" href="./crew"><span>02</span>Crew</a></li>
                  <li><a className="text-white uppercase letter-spacing-2"
                        href="./technology"><span>03</span>Technology</a></li>
               </ul>
            </div>
         </nav>
      </>
   )

}
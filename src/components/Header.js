import React from 'react'
import logo from '../assets/shared/logo.svg'
import '../App.css'

export default function Header() {

const [visibility, setVisibility] = React.useState(false)

const swapVisible = () => {
   setVisibility(!visibility)
}

let classes

if (visibility) {
      classes = 'primary-navigation primary-navigation-visible underline-indicators flex'
   } else {
      classes = 'primary-navigation underline-indicators flex'
   }

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
               <ul id="primary-navigation"  className={classes}>
                  <li className=""><a className="text-white uppercase letter-spacing-3" href="/"><span className='text-white'>00</span>Home</a>
                  </li>
                  <li><a className="text-white uppercase letter-spacing-3" href="./destination"><span>01</span>Destination</a>
                  </li>
                  <li><a className="text-white uppercase letter-spacing-3" href="./crew"><span>02</span>Crew</a></li>
                  <li><a className="text-white uppercase letter-spacing-3"
                        href="./technology"><span>03</span>Technology</a></li>
               </ul>
            </div>
         </nav>
      </>
   )

}
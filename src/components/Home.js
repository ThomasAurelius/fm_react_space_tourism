import React from 'react'
import Header from './Header'

export default function Home() {
   return (
      <main id="main"  className='bg-container-home'>
      <Header />
      <div className="container home-container grid">
        <div className="home-text">
          <h1 className="fs-500 text-accent ff-sans-cond letter-spacing-1 uppercase">So, you want to travel to </h1>
          <span className="uppercase fs-900 text-white ff-serif">space</span>
          <p className="text-accent ff-sans-normal">
            Let’s face it; if you want to go to space, you might as well genuinely go to
            outer space and not hover kind of on the edge of it. Well sit back, and relax
            because we’ll give you a truly out of this world experience!
          </p>
        </div>
        <div className="flex interactive">
          <div className="explore-button">
            
            <a href="./destination" className="large-button uppercase bg-white text-dark fs-600">Explore</a>
          </div>
        </div>
      </div>
    </main>
   )
}
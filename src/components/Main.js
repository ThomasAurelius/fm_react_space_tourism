import React from 'react'

import Home from './Home'
import Destination from './Destination'
import DestinationMars from './DestinationMars'
import DestinationEuropa from './DestinationEuropa'
import DestinationTitan from './DestinationTitan'
import Crew from './Crew'
import CrewEngineer from './CrewEngineer'
import CrewPilot from './CrewPilot'
import CrewSpecialist from './CrewSpecialist'

import Technology from './Technology' 
import TechnologySpaceport from './TechnologySpaceport' 
import TechnologyVehicle from './TechnologyVehicle' 
import '../App.css'
import { Routes, Route } from 'react-router-dom'

export default function Main() {
   return (
      <div>
         <Routes>
            <Route path="/projects/react/space" element={<Home />} />
            
            <Route path="/destination" element={<Destination />} />
            <Route path="/destinationMars" element={<DestinationMars />} />
            <Route path="/destinationEuropa" element={<DestinationEuropa />} />
            <Route path="/destinationTitan" element={<DestinationTitan />} />

            <Route path="/crew" element={<Crew />} />
            <Route path="/crewEngineer" element={<CrewEngineer />} />
            <Route path="/crewPilot" element={<CrewPilot />} />
            <Route path="/crewSpecialist" element={<CrewSpecialist />} />

            <Route path="/technology" element={<Technology />} />  
            <Route path="/technologySpaceport" element={<TechnologySpaceport />} />  
            <Route path="/technologyVehicle" element={<TechnologyVehicle />} />         
         </Routes>
      </div>
   )

}
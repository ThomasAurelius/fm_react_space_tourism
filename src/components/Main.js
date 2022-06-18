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

            <Route path="/projects/react/space/destination" element={<Destination />} />
            <Route path="/projects/react/space/destinationMars" element={<DestinationMars />} />
            <Route path="/projects/react/space/destinationEuropa" element={<DestinationEuropa />} />
            <Route path="/projects/react/space/destinationTitan" element={<DestinationTitan />} />

            <Route path="/projects/react/space/crew" element={<Crew />} />
            <Route path="/projects/react/space/crewEngineer" element={<CrewEngineer />} />
            <Route path="/projects/react/space/crewPilot" element={<CrewPilot />} />
            <Route path="/projects/react/space/crewSpecialist" element={<CrewSpecialist />} />

            <Route path="/projects/react/space/technology" element={<Technology />} />  
            <Route path="/projects/react/space/technologySpaceport" element={<TechnologySpaceport />} />  
            <Route path="/projects/react/space/technologyVehicle" element={<TechnologyVehicle />} />         
         </Routes>
      </div>
   )

}
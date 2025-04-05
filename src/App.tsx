
// import Card from './components/Card'
// import Navbar from './components/Navbar'
// import { projects } from './data/projects'
// function App() {


// // const project={
// //   title:"AI Chat Application"
// // }

//   return (
//     <div className='bg-black'>
//       <Navbar/>
//      <div className="m-15 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"> 
      
//       {projects.map((project)=>(
//              <Card project={project} key={project._id} />
//       ))}

        
//      </div>
//     </div>
//   )
// }

// export default App

import React from 'react'
 import LandingPage from './pages/LandingPage'
// import Footer from './components/Footer'
// import ProjectDashboard from './pages/ProjectDashboard'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import ProjectDashboard from './pages/ProjectDashboard'
import ProjectDetails from './pages/ProjectDetails'
import CreateProject from './pages/CreateProject'
import Footer from './components/Footer'



const App = () => {
  return (
    <div className='bg-black'>
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage/>}></Route>
           <Route path='/dashboard' element={<ProjectDashboard/>}> </Route>
           <Route path='/dashboard/:id' element={<ProjectDetails/>}> </Route>
           <Route path='/createproject' element={<CreateProject/>}> </Route>
           <Route path='/project/:id' element={<ProjectDetails/>}> </Route>

       </Routes>
       <Footer/>
      </Router>
     
    </div>
  )
}

export default App

import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import { useNavigate } from 'react-router-dom'
import { IProject } from '../Type'
import axios from 'axios'

const ProjectDashboard = () => {

const [projects,setProjects]=useState<IProject[]>([])
const[loading,setLoading]=useState<boolean>(true)
     const[error,setError]=useState<string>();


     useEffect(()=>{

      const fetchProjects=async()=>{
        try{
          const response = await axios.get<IProject[]>('https://akatsuki-project-hub-backend.vercel.app/api/project')

          setProjects(response.data)
          setLoading(false)
        }
        catch(error){
               console.log("Error in fetching data",error)
               setError("Failed to fetch data,try again")
               setLoading(false)

        }

      }
       
        

      fetchProjects();
     })

  const navigate = useNavigate()

    const [technology,setTechnology]=useState<string>('all');
    const filterprojects=projects.filter((project)=>{
          return(technology==='all'||project.techStack.toLowerCase()===technology.toLowerCase())


    })


  return (
    <div>
       <Navbar/>
       <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
          {['All', 'MERN','JAVA','PYTHON'].map(tech => (
            <button
            onClick={()=>setTechnology(tech.toLowerCase())}
              key={tech}
              className={`px-4  text-black sm:px-6 py-2 rounded-full text-sm sm:text-base transition-all duration-300 border
                 
                ? 'bg-black text-white border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.3)]'
                : 'bg-black/50 text-gray-400 border-gray-800 hover:border-purple-500/50'
                }`}>
              {tech}
            </button>
          ))}
        </div>

    <div className="m-15 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"> 
      
    {filterprojects.map((project)=>(
           <Card project={project} key={project._id} />
    ))}

        <div>
         
        </div>
        
    </div>
    </div>
  )
}

export default ProjectDashboard

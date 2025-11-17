import React, {useEffect, useState} from 'react';
import { fetchProjects } from '../api'; 


export default function Projects(){ 
    const [projects, setProjects] = useState([]); 
    
    useEffect(()=>{ 
        fetchProjects().then(setProjects).catch(console.error); 
    },[]); 
    
    return ( 
       <section className="projects"> 
         <h2>Projects</h2> 
         <div className="project-grid"> 
            {projects.map(p => ( 
                <article key={p.id} className="project-card"> 
                 {p.image_url && <img src={p.image_url} alt={p.title} />} 
                 <h3>{p.title}</h3>
                 <p>{p.description}</p> 
                  <div className="links"> 
                    {p.github && <a href={p.github} target="_blank" rel="noreferrer">GitHub</a>} 
                    {p.demo && <a href={p.demo} target="_blank" rel="noreferrer">Live</a>} 
                  </div> 
                </article> 
             ))} 
            </div> 
          </section> 
      ); 
}
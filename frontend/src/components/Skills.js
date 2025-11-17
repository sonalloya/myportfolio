import React, {useEffect, useState} from 'react';
import { fetchSkills } from '../api';
 
 
 export default function Skills(){ 
    const [skills, setSkills] = useState([]); 
    
    useEffect(()=>{ 
        fetchSkills().then(setSkills).catch(console.error); 
    },[]); 
    return (
         <section className="skills"> 
           <h2>Skills</h2> 
           <ul> 
              {skills.map(s => (
                   <li key={s.id}>{s.name} </li>
              ))}
           </ul>
         </section> 
    ); 
}
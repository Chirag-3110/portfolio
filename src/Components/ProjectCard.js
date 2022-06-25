import React ,{useEffect, useState} from 'react';
import { motion } from 'framer-motion';
import './ProjectCss.css'
function ProjectCard(props){
    const [isOpen,setIsOpen]=useState(false);
    return(
        <div className='project'>
            <motion.div layout className='projectbody' 
                transition={{layout:{duration:1,type:"spring"}}}
            >
                <motion.h2 layout="position"className='expand' onClick={()=>setIsOpen(!isOpen)}>
                    {props.title}
                </motion.h2>
                { isOpen && <motion.div className='project-desc'
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{duration:1}}
                >
                   <div className='image-details'>
                        <div >
                            <img
                                src={props.uri}
                            />
                        </div>
                        <div>
                            <h1>Technology</h1>
                            <p>{props.technolody[0]}</p>
                            <p>{props.technolody[1]}</p>
                        </div>
                   </div>
                </motion.div>}
            </motion.div>
        </div>
    )
}
export default ProjectCard
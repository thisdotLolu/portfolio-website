import React from 'react'
import {GoLocation} from 'react-icons/go'
import {FaGithub,FaLinkedin} from 'react-icons/fa'
import './Home.css'
import { motion } from 'framer-motion'



const containerVariants={
  hidden:{
    opacity:0,
  },
  visible:{
    opacity: 1,
    transition: {
      delay:0.5,
      duration:1
    },
    exit:{
      x:'-100vw',
      transition: {
        ease:'easeInOut'
      }
    }
  }
}


const Home = () => {
  return (
    
    <motion.div className='home'
    variants={containerVariants}
    initial='hidden'
    animate='visible'
    exit='exit'
    >
       <h1>
          hello world,
          </h1>
          <h1> i'm Lolu</h1>
          <hr style={{width:'90vw',backgroundColor:'black'}}/>
        <p><GoLocation/> West Africa</p>
        <h3>i'm a Frontend Software Developer familiar with web technologies such as JavaScript and React</h3>
        <div className='links'>
        <a className='link' href='https://docs.google.com/document/d/1mmzcDGl5LxWBnvOTtY5RSCFmaanbn6sv/edit?usp=sharing&ouid=102598457330403382755&rtpof=true&sd=true'>View CV</a>
        <a style={{color:'black'}} href='https://www.github.com/thisdotlolu'><FaGithub className='icon'/></a>
        <a style={{color:'black'}} href='https://www.linkedin.com/in/ebe-david-17b6921b0/'><FaLinkedin className='icon'/></a>
        </div>
        <h3> View my projects below</h3>
    </motion.div>
  )
}

export default Home
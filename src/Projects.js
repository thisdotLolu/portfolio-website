import React from 'react'
import './Projects.css'
import {FaForward} from 'react-icons/fa'

const Projects = () => {
  return (
      <div>
        <h1 style={{color:'black',textAlign:'center'}}>PROJECTS</h1>
        <div className='projects'>
        <div className='project'>
        <h2>Game Landing Page Website inspired by Valorant</h2>
        <a style={{color:'black',textDecoration:'none'}} href="https://valgame.netlify.app/"><button>View Project</button></a>
        <img src='/images/valgame.png' alt='game'/>
        <p>A Simple Game Website made with react</p>
        </div>
        <div className='project'>
        <h2>Peentrest </h2>
        <a style={{color:'black',textDecoration:'none'}} href="https://peentrest.web.app/"><button>View Project</button></a>
        <img src='/images/peentrest.png' alt='pinterest clone'/>
        <p>A Pinterest redesign by <a href='https://dribbble.com/shots/14799129-Pinterest-redesign'>Patrizia Slongo</a>; made with react and firebase for authentication</p>
        </div>
        <div className='project'>
        <h2>Bloggio</h2>
        <a style={{color:'black',textDecoration:'none'}} href="https://blogggio.web.app"><button>View Project</button></a>
        <img src='/images/bloggio.png' alt='bloggio'/>
        <p>A small text-only tech blog made with react and firebase firestore</p>
        </div>
        <div className='project'>
        <h2>Ecommerce UI</h2>
        <a style={{color:'black',textDecoration:'none'}} href="https://ecommarse.netlify.app"><button>View Project</button></a>
        <img src='/images/myshop.png' alt='bloggio'/>
        <p>An E-commerce Sales User Interface made with react and styled-components</p>
        </div>
        <div className='project'>
        <h2>Movie Web application</h2>
        <a style={{color:'black',textDecoration:'none'}} href='https://webflix-fa327.web.app/'><button>View Project</button></a>
        <img src='/images/webflix.png' alt='webflix'/>
        <p>A movie web app, made with react and firebase for authentication, firestore for data storage</p>
        </div>
    </div>
      </div>
    
  )
}

export default Projects;
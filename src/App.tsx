import './App.css'
import { Header } from '../components/Header'
import { AboutMe } from '../components/AboutMe'
import { Experiences } from '../components/Experiences'
import { Projects } from '../components/Projects'
import { Skills } from '../components/Skills'
import {useEffect,useState} from 'react'

function App() {
  const [showArrow,setShowArrow] = useState(false);
  useEffect(()=>{
    const handleScroll = () =>{
      if(window.scrollY > 200){
        setShowArrow(true);
      }else{
        setShowArrow(false);
      }
    }
    window.addEventListener('scroll',handleScroll);
    return () => window.removeEventListener('scroll',handleScroll);
  },[])
  return (
    <>
      <Header />
      <div>
        <div id="about"><AboutMe /></div>
        <div id="experience"><Experiences /></div>
        <div id="projects"><Projects /></div>
        <div id="skills"><Skills /></div>
      </div>
      {showArrow && 
        <a href="#" className="scroll-up-button">
          <span>⬆</span>
        </a>}
    </>
  )
}

export default App

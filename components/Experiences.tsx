import {useState,useEffect} from 'react'
import './Experiences.css';
export const Experiences = () => {
  const [experiences] = useState<{company:string,position:string,duration:string,description:string,image:string}[]>([
    {
      company: 'Company',
      position: 'Position',
      duration: 'Timespan',
      description: 'What you did at your job goes here',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Smiley.svg/1200px-Smiley.svg.png'
    },
  ]);
  
  useEffect(()=>{
    const cards = document.querySelectorAll('.experience-card');

    const observer = new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      })
    },{threshold:0.3});

    cards.forEach(card=>{
      observer.observe(card);
    });

    return () => observer.disconnect();

  },[])
  return (
    <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',alignContent:'center'}}>
      <h1 className="experience-card">Experience</h1>
      {experiences.map((job,index)=>(
        <div key={index} className= "experience-card" style={{display:'flex',
        flexDirection:'row',
        border:'1px solid #121212',
        backgroundColor:'#181818',
        alignContent:'center',
        alignItems:'center',
        justifyContent:'center',
        padding:'0.75rem',
        borderRadius:'10px',
        margin: "0.5rem"}}> 
          <div>
            <img src={job.image} alt={job.company} style={{width:'100px', height:'100px',borderRadius:'10px',marginRight:'0.75rem'}} />
          </div>
          <div style={{maxWidth:'40vw'}}>
            <h2>{job.position}</h2>
            <h3>{job.company}</h3>
            <p>{job.duration}</p>
            <p>{job.description}</p>
          </div>
          
        </div>
      ))}

    </div>
  )
}
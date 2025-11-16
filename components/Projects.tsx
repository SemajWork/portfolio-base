import {useState,useEffect} from 'react'
import './Projects.css';
/* 
Over here, you can upload images to src/assets folder and import such as: import projectX from '../src/assets/projectX.pfp'
*/

export const Projects = () => {
  const [projects] = useState<{title:string,description:string,image:string,link:string,technologies:string[]}[]> (
    [
      {
        title: 'Project Name',
        description: 'Type of project',
        image: `projectImageGoesHere`,
        link: 'project link',
        technologies: ['tools used in the project']
      },
    ]
  );

  useEffect(()=>{
    const cards = document.querySelectorAll('.project-card');

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
    <>
    <h1 style={{display:'flex',justifyContent:'center'}}className="project-card">Projects</h1>
    <div style={{margin:'2rem',display:'flex',justifyContent:'center',padding:'0 3rem'}}>
      <div style={{display:'grid',
      gridTemplateColumns:'repeat(3, 1fr)',
      gap:'1rem',
      maxWidth:'55vw',
      width:'100%'}}>
      {projects.map((project,index)=>{
        const columnsPerRow = 3;
        const rowIndex = Math.floor(index / columnsPerRow);
        const columnIndex = index % columnsPerRow;
        // Stagger delay: 0.15s per column + 0.3s per row
        const delay = (rowIndex * 0.3) + (columnIndex * 0.15);
        
        return (
        <div 
          className="project-card" 
          key={index} 
          style={{
            backgroundColor:'#181818',
            border:'1px solid #121212',
            borderRadius:'10px',
            padding:'1rem',
            paddingBottom:'1rem', 
            maxHeight:'850px',
            minHeight:'500px',
            animationDelay: `${delay}s`
          }}>
          <img 
            src={project.image} 
            alt={project.title} 
            style={{
              width:'100%', 
              height:'200px',
              objectFit:'cover',
              borderRadius:'10px',
              display:'block'
            }} 
          />
          <div style={{padding:'1rem'}}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
          <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap',gap:'0.5rem'}}>
            {project.technologies.map((technology,index)=>(
              <span key={index} style={{backgroundColor:'#121212',borderRadius:'5px',padding:'0.25rem 0.5rem',fontSize:'0.8rem',whiteSpace:'nowrap'}}>{technology}</span>
            ))}
          </div>
        </div>
        );
      })}
      </div>
    </div>
    </>
  )
}
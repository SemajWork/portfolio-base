import {useState,useEffect} from 'react'
import './Skills.css';

// Helper function to get icon path for a skill
const getSkillIcon = (skillName: string): string => {
  const iconMap: { [key: string]: string } = {
    'skill name':'skill name svg/png icon link'
  };
  
  const key = skillName.toLowerCase();
  return iconMap[key] || '';
};

// Helper function to get documentation/explanation link for a skill
const getSkillLink = (skillName: string): string => {
  const linkMap: { [key: string]: string } = {
    'Skill Name':'Link to skill name website'
  };
  
  const key = skillName.toLowerCase();
  return linkMap[key] || '#';
};

export const Skills = () => {
  const [skillCategories] = useState<{
    title: string;
    skills: string[];
  }[]>([
    {
      title: 'Category',
      skills: ['Insert Skills here, i.e HTML']
    }
  ]);

  useEffect(()=>{
    const cards = document.querySelectorAll('.skill-card');

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
      <h1 style={{display:'flex',justifyContent:'center'}} className="skill-card">Skills</h1>
      <div style={{margin:'2rem',display:'flex',justifyContent:'center',padding:'0 3rem'}}>
        <div style={{
          display:'flex',
          flexDirection:'column',
          gap:'1.5rem',
          maxWidth:'80vw',
          width:'100%'
        }}>
          {skillCategories.map((category,index)=>{
            const delay = index * 0.2;
            
            return (
              <div 
                key={index}
                className="skill-card" 
                style={{
                  backgroundColor:'#181818',
                  border:'1px solid #121212',
                  borderRadius:'10px',
                  padding:'1.5rem',
                  animationDelay: `${delay}s`
                }}
              >
                <h2 style={{marginBottom:'1rem', fontSize:'1.5rem'}}>{category.title}</h2>
                <div style={{
                  display:'flex',
                  flexDirection:'row',
                  flexWrap:'wrap',
                  gap:'0.75rem'
                }}>
                  {category.skills.map((skill,skillIndex)=>{
                    const iconPath = getSkillIcon(skill);
                    const skillLink = getSkillLink(skill);
                    return (
                      <a
                        key={skillIndex}
                        href={skillLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="skill-badge"
                        style={{
                          backgroundColor:'#121212',
                          borderRadius:'5px',
                          padding:'0.5rem 0.75rem',
                          fontSize:'0.9rem',
                          display:'inline-flex',
                          alignItems:'center',
                          gap:'0.5rem',
                          cursor:'pointer',
                          transition:'box-shadow 0.3s ease, transform 0.3s ease',
                          textDecoration:'none',
                          color:'inherit'
                        }}
                      >
                        {iconPath && (
                          <img 
                            src={iconPath} 
                            alt={`${skill} icon`}
                            style={{
                              width: '20px',
                              height: '20px',
                              objectFit: 'contain'
                            }}
                            onError={(e) => {
                              // Hide image if it fails to load
                              (e.target as HTMLImageElement).style.display = 'none';
                            }}
                          />
                        )}
                        {skill}
                      </a>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  )
}

import profilepic from "../src/assets/pfp.jpg" /* Change to your picture, put it iwthin the src file and name it pfp.jpg*/
import './AboutMe.css'

export const AboutMe = () => {
  return (
    <div id="about" 
    style={{
      justifyContent:'center', 
      alignItems:'center', 
      display:'flex', 
      flexDirection:'row'}}>

        <div style={{
          flex:'1',
          flexDirection:'column',
          margin:'2rem',
          padding:'10rem',
          animation:'slideRight 0.6s ease-out forwards'}}>
          <div style={{alignContent:'left', paddingLeft:'3rem'}}>
          <h1 style={{fontSize:'8rem'}}>James Ma</h1>
          <p style={{marginTop:'-3rem',maxWidth:'60%',fontSize:'1.5rem',color:'#d1d1d4'}}>Hi, I'm currently a student at Hunter College studying Computer Science with a minor in Mathematics. 
            I'm passionate about building modern web applications and solving complex problems through code.</p>
          <div style={{display:'flex', flexDirection:'row', gap:'1rem', alignItems:'center'}}>
            {/* This part complete omitable, unless you have a github, change href to your github */}
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={{display:'flex', alignItems:'center', height:'3rem'}}>
              <img src="https://www.svgrepo.com/show/475654/github-color.svg" style={{width:'3rem', height:'3rem', objectFit:'contain'}}></img>
            </a>
            {/* Insert your linkedin profile link overhere */}
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" style={{display:'flex', alignItems:'center', height:'3rem'}}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/1200px-LinkedIn_icon.svg.png" style={{width:'3rem', height:'3rem', objectFit:'contain'}}></img>
            </a>
            {/* Change after mailto: to your email */}
            <a href="mailto:insertemail@email.com" className="contact-button" style={{height:'3rem'}}>
              Contact Me!
            </a>
          </div>  
          </div>
          
        </div>
            
        <div style={{margin:'2rem',padding:'10rem', animation:'slideLeft 0.6s ease-out forwards'}}>
            <img src={profilepic}
            style={{
              borderRadius:'10px',  
              boxShadow:'0 0 10px 0 rgba(0, 0, 0, 0.5)', 
              cursor: 'pointer',
            width:'22vw',
            maxHeight:'65vh'}} 
              alt="Picture of me" title="Shoutout lebron 🐐" />
        </div>
        
    </div>
  )
}
import './Header.css'

export const Header = () => {
  return (
    <div style={{
      justifyContent:'space-between',
      position:'sticky',
      top:0, 
      width:'100%',
      display: 'flex', 
      flexDirection: 'row', 
      paddingTop:'1.2rem',
      alignContent:'center',
      backgroundColor:'#181818',
      opacity: 1,
      boxShadow: `rgba(0, 0, 0, 0.35) 0px 5px 15px`,
      zIndex: 1000
    }}>
      <h2 style={{
        paddingLeft:'3rem',
        animation: 'fadeIn 0.6s ease-out forwards',
        scale: 1.5,
      }}><a href="#">James Ma</a></h2> 
      <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', gap:'2rem',paddingRight:'3rem'}}>
        <h2 className="header-sections" style={{animation: 'slideDown 0.6s ease-out forwards',animationDelay: '0.1s',opacity: 0}}><a href="#about">About</a></h2>
        <h2 className="header-sections" style={{animation: 'slideDown 0.6s ease-out forwards',animationDelay: '0.2s',opacity: 0}}><a href="#experience">Experience</a></h2>
        <h2 className="header-sections" style={{animation: 'slideDown 0.6s ease-out forwards',animationDelay: '0.3s',opacity: 0}}><a href="#projects">Projects</a></h2>
        <h2 className="header-sections" style={{animation: 'slideDown 0.6s ease-out forwards',animationDelay: '0.4s',opacity: 0}}><a href="#skills">Skills</a></h2>
      </div>
    </div>
  )
}


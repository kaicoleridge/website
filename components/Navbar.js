import navStyle from '../styles/Navbar.module.css'

const Navbar = () => {
    return(
        <div className={navStyle.navbar}>
            
            <header>
                <a href={'/'}>
            <h3>KAI</h3>
            </a>
         <nav>
             <ul>
                 <a href='/about'>
                 <li>about</li>
                 </a>
                 <a href='/projects'>
                 <li>projects</li>
                 </a>
                 <a href='/KaiColeridge_CV.pdf' download={"KaiColeridge_CV.pdf"}>
                 <li>resume</li>
                 </a>
                 <a href='/stats'>
                 <li>stats</li>
                 </a> 
                 <a href='mailto:kai@coleridge.me'>
                 <li>contact</li>
                 </a> 
             </ul>
         </nav>
         </header>
            
            </div>

    );
}

export default Navbar
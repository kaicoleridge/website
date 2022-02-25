import navStyle from '../styles/Navbar.module.css'

const Navbar = () => {
    return(
        <div className={navStyle.navbar}>
            
            <header>

         <nav>
             <ul>
                 <a href='/about.js'>
                 <li>about</li>
                 </a>

                 <a href='/'>
                 <li>projects</li>
                 </a>

                 <a href='/Old CV.pdf' download={"Old CV.pdf"}>
                 <li>resume</li>
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
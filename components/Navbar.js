import navStyle from '../styles/Navbar.module.css'
import Link from 'next/link'

const Navbar = () => {
    return(
        <div className={navStyle.navbar}>
            
            <header>

         <nav>
             <ul>
                 <a href='about.js'>
                 <li>About</li>
                 </a>

                 <a href='/'>
                 <li>Projects</li>
                 </a>

                 <a href='/CV-Kai Coleridge.pdf' target="_blank">
                 <li>Resume</li>
                 </a>

                 <a href='mailto:kai@coleridge.me'>
                 <li><i class="fa fa-envelope"></i> Let's Talk!</li>
                 </a>
                
             </ul>
         </nav>
         </header>
            
            </div>

    );
}

export default Navbar
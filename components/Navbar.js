import navStyle from '../styles/Navbar.module.css'
import Link from 'next/link';

const Navbar = () => {
    return(
        <div className={navStyle.navbar}>
            
            <header>
                <Link href="/">
            <h3>KAI</h3>
            </Link>
         <nav>
             <ul>
                 <Link href="/about">
                 <a>about</a>
                 </Link>
                 <Link href="/projects">
                 <a>projects</a>
                 </Link>

                 <Link href="/">
                 <a>resume</a>
                 </Link>

                 <Link href='mailto:kai@coleridge.me'>
                 <a>contact</a>
                 </Link> 
             </ul>
         </nav>
         </header>
            
            </div>

    );
}

export default Navbar
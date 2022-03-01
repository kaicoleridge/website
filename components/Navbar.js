import navStyle from '../styles/Navbar.module.css'
import Link from 'next/link';
import ReactTooltip from 'react-tooltip';

const Navbar = () => {
    return(
        <div className={navStyle.navbar}>
            
            <header>
            
                <Link href="/">
            <h3>KAI</h3>
            </Link>
         <nav>
             <ul>
                 <Link href="/">
                 <a data-tip-="Coming Soon">about</a>
                 
                 </Link>
                 <Link href="/projects">
                 <a>projects</a>
                 </Link>

                 <Link href="/KaiColeridge_CV-website.pdf">
                 <a>resume</a>
                 </Link>

                 <Link href='mailto:kai@coleridge.me'>
                 <a>contact</a>
                 </Link> 
             </ul>
         </nav>
         </header>
         <ReactTooltip/>
   

            </div>
            

    );
}

export default Navbar
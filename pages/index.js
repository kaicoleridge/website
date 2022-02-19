import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'



export default function Home() {
  return (
   <div className={styles.container}>
     <Head>
     <title>Kai Coleridge</title>
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
     </Head>

     

    
     <div className={styles.main}>
       <div className={styles.name}>
         <h4>Hi there I'm, <span>👋</span></h4>
         <h1>Kai Coleridge.</h1>
        <h3>iOS / Web Developer ┃ CS Student </h3>
         </div>

         <div className={styles.icons}>

           <li>
             <a href="https://twitter.com/kaicoleridge">
           <i class="fa fa-twitter"></i>
           </a>
           </li>
           
          
           <li>
             <a href='https://github.com/kaicoleridge'>
             <i class="fa fa-github"></i>
             </a>
           </li>

           <li>
             <a href="https://linkedin.com/in/kaicoleridge">
             <i class="fa fa-linkedin"></i>
             </a>
           </li>

 

           <li>
             <a href='https://instagram.com/kaicoleridge'>
             <i class="fa fa-instagram"></i>
             </a>
           </li>

           <li>
             <a href='https://open.spotify.com/user/phjdi967haciotxt687u349nn?si=65ce5a84eacd4723&nd=1'>
           <i class="fa fa-spotify"></i>
           </a>
           </li>

           <li>
         <i class="fa fa-apple"></i>
         </li>


           <li>
             <a href='mailto:kai@coleridge.me'>
             <i class="fa fa-envelope"></i>
             </a>
           </li>

           </div>

         
  

     </div>

   
     </div>
  );
}

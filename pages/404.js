import styles from '../styles/StatusCode.module.css'
import Head from 'next/head'
import Link from 'next/link'
import { Router, useRouter } from 'next/router'

export default function Custom404(){
    const router = useRouter()
        return(
        <div className={styles.container}>
            <Head>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            </Head>
            <h1><i className="fa-circle-exclamation"></i>404 - Page not found</h1>
            <h4>Looks like you&apos;re a bit lost...</h4>
            <p>The page you are looking for does not exist.</p>

            <Link href='/'>
            <button>🔙 Back</button>
            </Link>

            <Link href='/'>
            <button><i className="fa fa-house"></i>🏠 Home</button>
            </Link>
           
      
      
            </div>

    )
}

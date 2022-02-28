import styles from '../styles/StatusCode.module.css'
import Head from 'next/head'
import Link from 'next/link'
import { Router, useRouter } from 'next/router'

export default function Custom404(){
  
    const router = useRouter()

        return(
        <div className={styles.container}>
            <Head>
                <title>404 - Page not found</title>
                <Link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></Link>
            </Head>
            <h1><i className="fa fa-exclamation-circle"></i > 404 - Not found!</h1>
            
            <h3>Who turned off the lights?</h3>
            <h4>The page you were looking was not found.</h4>

            <Link onClick={() => router.back()}>
            <button id="back-btn"><i className="fa fa-arrow-left"></i> Back</button>
            </Link>

            <Link href="/">
            <button id="home-btn"><i className="fa fa-home" aria-hidden="true"></i> Home</button>
           </Link>
            </div>

    )
}


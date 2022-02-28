import styles from '../styles/StatusCode.module.css'
import Head from 'next/head'
import { Router, useRouter } from 'next/router'

export default function Custom404(){
  
    const router = useRouter()

        return(
        <div className={styles.container}>
            <Head>
                <title>404 - Page not found</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            </Head>
            <h1><i class="fa fa-exclamation-circle"></i > 404 - Not found!</h1>
            
            <h3>Who turned off the lights?</h3>
            <h4>The page you were looking for doesn't exist.</h4>

            <a onClick={() => router.back()}>
            <button id="back-btn"><i class="fa fa-arrow-left"></i> Back</button>
            </a>
            <a href="/">
            <button id="home-btn"><i class="fa fa-home" aria-hidden="true"></i> Home</button>
           </a>
            </div>

    )
}


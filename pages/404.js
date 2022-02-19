import styles from '../styles/StatusCode.module.css'

export default function Custom404(){
    return(
        <div className={styles.container}>
            <h1>⛔ 404 - Page not found</h1>
            <h3>The page you were looking for doesn't exist, or has been deleted.</h3>
            <a href='/'>
            <button>Return home?</button>
            </a>
           

            </div>

    )
}


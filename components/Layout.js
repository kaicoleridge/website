import styles from '../styles/Layout.module.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Banner from '../components/Banner'

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <div className={styles.container}>
                <main className={styles.main}>
                    {children}
                </main>

            </div>
        </>
    )
}

export default Layout

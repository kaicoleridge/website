import style from '../styles/Layout.module.css'

export default function Stats() {
    return (
    <div className={style.pageContainer}>
        <Head>
        <title>Stats - Kai Coleridge</title>
      </Head>
      <div className={style.pageContents}>
        <h1>RealTime Stats</h1>
        <span>🟢 Live RESTful API Data</span>
        </div>
      </div>
    );
  }
  
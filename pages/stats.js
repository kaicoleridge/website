import style from '../styles/Layout.module.css'

export default function Stats() {
    return (
    <div className={style.pageContainer}>
      <div className={style.pageContents}>
        <h1>RealTime Stats</h1>
        <span>🟢 Live RESTful API Data</span>
        </div>
      </div>
    );
  }
  
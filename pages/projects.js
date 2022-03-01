import style from '../styles/Layout.module.css'
export default function Projects() {
  return (
    <div className={style.pageContainer}>
      <div className={style.pageContents}>
        <h1>Projects</h1>


        <div className="projects">
          <div className="flex-items">
            <h2>🎥 MovieNow</h2>
            <p>MovieNow is a web app to browse the latest movies and TV Shows. MovieNow uses TMDB (The Movie DataBase) RESTful API provides the data and displays it in a clean and easy to use UI. MovieNow is built with React, Redux, and Styled Components.
              <br></br>
              <br></br>
              I&apos;m currently working on porting the app over to React and Mobile.
              <br></br>
              <br></br>
              <button className="cming-sn">Coming Soon</button>
              <br></br>
              <br></br>
              <h3>🔗 URL - <a href='https://movienow.coleridge.me'>MovieNow (Click me)</a></h3>
            </p>
            <a href='https://github.com/kaicoleridge/movienow'>
              <img src='movienow_thumb.png' alt='movienow_thumb' width={"50%"}></img>
            </a>


            <h2>📝 NoteThat</h2>
            <p>NoteThat is a note taking task web application with the ability to create tasks and delte and mark as complete when done.
              I&apos;ve added various features to this web application that makes it more fun to use when creating tasks, such as the ability to
              listen to soft lofi beat music in the background.
              <br></br>
              <br></br>
              I decided to build this project to expand my knowledge and improve my UI skills, and have learnt a lot for a web app with
              this simplistic functionality.
              <br></br>
              <br></br>
              <a href='https://notethat.coleridge.me'>
                <button className='avaliable'>Available now</button>
              </a>
            </p>
            <a href='https://github.com/kaicoleridge/notethat'>
              <img src='notethat_thumb.png' alt='notethat_thumb' width={"50%"}></img>
            </a>
          </div>
        </div>
      </div>
      <h3>More Coming Soon...</h3>
    </div>
  );
}

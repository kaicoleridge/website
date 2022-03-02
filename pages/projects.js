import style from '../styles/Layout.module.css'
import Head from 'next/head'
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react'

export default function Projects() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div data-aos="fade-up" className={style.pageContainer}>
      <Head>
        <title>Projects - Kai Coleridge</title>
        <meta name="theme-color" content="#430ac2"/>
      </Head>
      <div className={style.pageContents}>
        <h1>Projects</h1>
        <div className="projects">
          <div className="flex-items">
            <a href='https://github.com/kaicoleridge/movienow'>
              <img src='movienow_thumb.png' alt='movienow_thumb' width={"50%"}></img>
            </a>
            <h2>🎥  MOVIENOW</h2>
            <p>MovieNow is a web app to browse the latest movies and TV Shows. MovieNow uses TMDB (The Movie DataBase) RESTful API provides the data and displays it in a clean and easy to use UI.
              <br></br>
              <br></br>
              Users have the ability to search for movies and
              TV Shows to find obtain statistical data from their query such as ratings, release dates, total runtime and much much more!
              <br></br>
              <br></br>
              MovieNow is built with modern framework technologies such as React, Redux, and Styled Components.
              I&apos;m currently working on porting the app over to React and Mobile.
              <br></br>
              <br></br>
              <h3>🔗 URL - <a href='https://movienow.coleridge.me'>MovieNow (Click me)</a></h3>
              <button className="cming-sn">Coming Soon</button>

              <br></br>
              <br></br>

            </p>


            <div data-aos="fade-up" className='noteThat'>
              <a href='https://github.com/kaicoleridge/notethat'>
                <img src='notethat_thumb.png' alt='notethat_thumb' width={"50%"}></img>
              </a>
              <h2>📝 NoteThat</h2>
              <p>NoteThat is a note taking task web application with the ability to create tasks and delete when tasks are completed.
                I&apos;ve added various features to this web application that makes it a more fun and intuitive to use when creating tasks, such as the auto playing 
                background lofi beat music whilst the user creates tasks. 
                <br></br>
                <br></br>
                I decided to build this project to expand my knowledge and improve my UI skills, and have learnt a lot for a web app that is
                so simplistic. I will be adding the ability to save to Local Storage soon.
                <br></br>
                <br></br>
                <br></br>
                <h3>🔗 URL - <a href='https://notethat.coleridge.me'>NoteThat (Click me)</a></h3>
                   <button className="cming-sn">Coming Soon</button>
                  <br></br>
              </p>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <h3>More Coming Soon...</h3>
    </div>
  );
}

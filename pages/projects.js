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
              <a href='https://github.com/kaicoleridge/vector'>
                <img src='vector.png' alt='vector_thumbnail' width={"50%"}></img>
              </a>
              <h2>🤖 VecTor</h2>
              <p>VecTor is a all in one multi purpose Discord Bot. VecTor has a broad range of features and commands to use within a Discord Server.
                <br></br>
                <br></br>
                VecTor is a multi-purpose Discord Bot featuring a variety of commands and features designed to make Discord Servers more entertaining to control and administer. 

                <br></br>
                <br></br>
I chose to create VecTor as a little project because I wanted more control over bots on my Discord server, allowing me to incorporate functionalities specific to my server's needs that other bots may not provide. 

             
               
                <br></br>
                <br></br>
                <h3>🔗 URL - <a href='https://github.com/kaicoleridge/Vector'>NoteThat (Click me)</a></h3>
                <button className="cming-sn">Early Beta</button>
                  <br></br>
              </p>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <hr></hr>
    </div>
  );
}


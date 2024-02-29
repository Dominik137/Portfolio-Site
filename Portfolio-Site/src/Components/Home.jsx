import React from "react";
import ProjectCard from "./ProjectCards";

function Home(){

    return(
        <>
        <div class="grid"  >
            <div style={{textAlign: 'center', paddingRight: '10px', paddingLeft: '10px', height: '100vh', paddingBottom: '5px'}}>
                <h1 style={{paddingTop: '10px', paddingBottom: '23px'}} className="kode-mono">About me</h1>
                    <article style={{border: '2px solid black', marginTop: '60px'}}>
                        <div style={{fontSize: '20px', fontFamily: 'Roboto-mono'}}>
                        <p>Hello, I'm Dominik. <img width={'100px'} style={{borderRadius: '50%', border: '2px solid #738678'}} src="../me.png"/><br/>In October 2023, I enrolled in Flatiron School's coding BootCamp in Denver, driven by my passion for software engineering. Completing the program in February 2024, I gained expertise in both front and back-end development.<br/>Specializing in full-stack development, I excel in creating fluid APIs with Flask/Python for the backend and crafting robust frontends using React. Proficient in SQLAlchemy and SQLite, I organize extensive data effectively. Additionally, I possess advanced skills in working with external APIs, seamlessly integrating data into applications. Throughout my program, I honed my skills with precision and creativity, demonstrating strong teamwork abilities and a passion for fast-paced learning.<br/>Now equipped with a solid foundation in software engineering, I am eager to make a meaningful impact in the tech industry, continuously refining my craft and seeking opportunities to collaborate and innovate.<br/>Here are some of the projects I have created:</p>

                        </div>
                    </article>
            </div>
            <div className="projects-title" style={{textAlign: 'center'}}>
                <h1 style={{paddingTop: '10px', marginBottom: '0px'}} className="kode-mono">Projects</h1>
                <p style={{fontSize: '15px', fontWeight: '100'}}>Click on a project to see more info
                <br/>
                Swipe to see other projects
                </p>
                <ProjectCard />
            </div>
    
        </div>
        </>
    )
}

export default Home
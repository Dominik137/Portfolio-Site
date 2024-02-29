import React from "react";
import ProjectCard from "./ProjectCards";

function Home(){

    return(
        <>
        <div className="grid"  >
            <div style={{textAlign: 'center', paddingRight: '10px', paddingLeft: '10px', height: '100vh', paddingBottom: '5px'}}>
                <h1 style={{paddingTop: '10px', paddingBottom: '23px'}} className="kode-mono">About me</h1>
                    <article style={{border: '2px solid black'}}>
                        <div style={{fontSize: '20px', fontFamily: 'Roboto-mono'}}>
                    <p>Hello, I'm Dominik. <img width={'100px'}  style={{borderRadius: '50%', border: '2px solid #738678 '}} src="../me.png"/></p>
                    <p>In October 2023, I enrolled in Flatiron School's coding BootCamp in Denver, driven by my passion for software engineering. Completing the program in February 2024, I gained expertise in both front and back-end development.</p>
                    <p>Throughout my journey, I encountered challenges that sharpened my problem-solving skills. Despite obstacles, I maintained focus and delivered high-quality projects.</p>
                    <p>I pride myself on being a fast learner and detail-oriented individual. My projects demonstrate not only technical proficiency but also a keen eye for design and functionality.</p>
                    <p>Now equipped with a solid foundation in software engineering, I am eager to make a meaningful impact in the tech industry. I am continuously refining my craft and seeking opportunities to collaborate and innovate.</p>
                    <p>Here are some of the projects I have created:</p>
                        </div>
                    </article>
            </div>
            <div className="projects-title" style={{textAlign: 'center'}}>
                <h1 style={{paddingTop: '10px', marginBottom: '0px'}} className="kode-mono">Projects</h1>
                <p style={{fontSize: '15px', fontWeight: '100'}}>Click to see more info</p>
                <ProjectCard />
            </div>
    
        </div>
        </>
    )
}

export default Home
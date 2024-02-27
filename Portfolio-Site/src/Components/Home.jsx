import React from "react";
import ProjectCard from "./ProjectCards";

function Home(){

    return(
        <>
        <div className="grid">
            <div style={{textAlign: 'center'}}>
                <h1 style={{paddingTop: '10px'}} className="kode-mono">About me</h1>
                    <article black border around card>
                        <p>
                        Hello, I'm Dominik. <img width={'100px'}  style={{borderRadius: '50%', border: '2px solid #738678 '}} src="../../public/me.png"/>
                        <br/>
                        In October 2023, I enrolled in Flatiron School's coding BootCamp in Denver, driven by a passion for software engineering. Completing the program in February 2024, I immersed myself in full-stack web development.
                        <br/>
                        Despite challenges, I persevered, fueled by the thrill of problem-solving. Now, with my BootCamp completed, I'm eager to make my mark in the tech industry, continuously refining my craft. Here are some of the projects I have created so far!
                        </p>
                    </article>
            </div>
            <div style={{textAlign: 'center'}}>
                <h1 style={{paddingTop: '10px'}} className="kode-mono">Projects</h1>
                <ProjectCard />
            </div>
    
        </div>
        </>
    )
}

export default Home
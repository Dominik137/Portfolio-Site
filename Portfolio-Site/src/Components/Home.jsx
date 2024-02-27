import React from "react";

function Home(){

    return(
        <>
        <div className="grid">
            <div style={{textAlign: 'center'}}>
                <h1 style={{paddingTop: '10px'}} className="kode-mono">About me</h1>
                    <article>
                        <p>
                        Hello, I'm Dominik. 'add circular picture of me'
                        <br/>
                        In October 2023, I enrolled in Flatiron School's coding BootCamp in Denver, driven by a passion for software engineering. Completing the program in February 2024, I immersed myself in full-stack web development.
                        <br/>
                        Despite challenges, I persevered, fueled by the thrill of problem-solving. Now, with my BootCamp completed, I'm eager to make my mark in the tech industry, continuously refining my craft. Excited to bring my passion to a dynamic team!
                        </p>
                    </article>
            </div>
            <div style={{textAlign: 'center'}}>Projects</div>

        </div>
        </>
    )
}

export default Home
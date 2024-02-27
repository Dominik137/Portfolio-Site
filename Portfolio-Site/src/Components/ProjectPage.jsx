import React from "react";
import { useParams, useLocation } from 'react-router-dom';
useLocation

function ProjectPage(){
    const location = useLocation();
    const repo = location.state;
    console.log(repo)
    return(
        <>
        <div className="grid">
            <div></div>
            <div>
                <h1>{repo.name}</h1>
                <p>{repo.description}</p>
            </div>
            <div></div>
        </div>
        </>
    );
}

export default ProjectPage
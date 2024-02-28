import React from "react";
import { useParams, useLocation, useNavigate } from 'react-router-dom';


function ProjectPage(){
    const location = useLocation();
    const repo = location.state;
    const navigate = useNavigate()
    console.log(repo)
    return(
        <>
        <span class="material-symbols-outlined" style={{fontSize: '40px', border: '2px solid #738678', bottom: '2px', cursor: 'pointer'}} onClick={()=>navigate(-1)}>
                arrow_back
                </span>
        <div className="grid">
           
            <div></div>
            <div>
                <h1>{repo.name}</h1>
                <p>{repo.description}</p>
                <div>
                    {repo.name === "allCar-FullStack-Project" ? 
                    <><img src="allCar.png"/></> : ''
                    }
                </div>
            </div>
            <div></div>
        </div>
        </>
    );
}

export default ProjectPage
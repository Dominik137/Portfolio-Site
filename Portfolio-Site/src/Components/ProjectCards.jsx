import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';

function ProjectCard(){
    const navigate = useNavigate()
    const [repos, setRepos] = useState([]);
    const [error, setError] = useState('');
    const repoNames = ['Coffee-Compass-JavaScript-Project', 'Sony-Synth-React-Project', 'Subscription-Saver-Python-Project', 'Sweat-Spectrum-FullStack-Project' ,'allCar-FullStack-Project']
    const perPage = 100; // Number of repositories per page
  
    useEffect(() => {
      let allRepos = [];
      let page = 1;
  
      // Recursive function to fetch repositories for each page
      const fetchRepos = () => {
        fetch(`https://api.github.com/users/Dominik137/repos?per_page=${perPage}&page=${page}`)
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(data => {
            if (data.length > 0) {
              allRepos = allRepos.concat(data);
              page++;
              fetchRepos(); // Fetch next page
            } else {
                const filteredRepos = allRepos.filter(repo => repoNames.includes(repo.name));
                setRepos(filteredRepos);
                setError('');
                console.log(filteredRepos);
            }
          })
          .catch(error => {
            setRepos([]);
            setError('There was a problem fetching repositories.');
            console.error('There was a problem with the fetch operation:', error);
          });
      };

      fetchRepos();
      console.log(repos)
    }, []); 

    useEffect(() => {
      console.log(repos);
    }, [repos]);

    const handleLinkClick = (event, url) => {
      event.stopPropagation(); // Prevent the event from bubbling up
   
  };


    return (
        <>
          <ul>
            {repos.map(repo => (
              <article style={{cursor: 'pointer', margin: '15px' }} key={repo.id} onClick={()=>navigate(`projectPage/${repo.name}`, { state: repo })}>
               <div className="grid">
                     <p>
                     {repo.name === "allCar-FullStack-Project" ? 
                    <>{repo.name} 🚗 <img width={'200px'} src={'../../public/allCar.png'} alt="All Car Project" /></> :
                    repo.name === "Coffee-Compass-JavaScript-Project" ? `${repo.name} ☕️` : 
                    repo.name === "Sony-Synth-React-Project" ? `${repo.name} 🎵` :
                    repo.name === "Subscription-Saver-Python-Project" ? `${repo.name} 💽` :
                    (repo.name === "Sweat-Spectrum-FullStack-Project" ?
                        <>{repo.name} 💦 <img width={'200px'} src={'../../public/SweatSpectrum.png'} alt="Sweat Spectrum Project" /></> :
                        repo.name)
                      }
                      <a target="_blank" href={repo.html_url} onClick={(e) => handleLinkClick(e, repo.html_url)}>{repo.html_url}</a>
                    </p>
                    <p>{repo.description}</p>
                </div>
              </article>
  ))}
</ul>
          
        </>
      );
      
}

export default ProjectCard;

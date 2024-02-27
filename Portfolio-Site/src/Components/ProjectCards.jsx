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
              <article style={{cursor: 'pointer', margin: '15px'}} key={repo.id} onClick={()=>navigate(`projectPage/${repo.name}`, { state: repo })}>
               <div className="grid">
                  <div>               
                     <h2 className="kode-mono" style={{fontSize: '20px'}}>
                     {repo.name === "allCar-FullStack-Project" ? 
                    <>{repo.name} 🚗 <img style={{paddingTop: '8px'}} width={'200px'} src={'../../public/allCar.png'} alt="All Car Project" /></> :
                    repo.name === "Coffee-Compass-JavaScript-Project" ? 
                    <>{repo.name} ☕️ <img style={{paddingTop: '8px'}} width={'200px'} src="'../../public/Coffecompass.png" /></> : 
                    repo.name === "Sony-Synth-React-Project" ?
                     <>{repo.name} 🎵 <img style={{paddingTop: '8px'}} width={'200px'} src="../../public/SongSynth.png"/></> :
                    repo.name === "Subscription-Saver-Python-Project" ? 
                    <>{repo.name} 💽 <img style={{paddingTop: '8px'}} width={'200px'} src="../../public/SubSaver.png" /></>:
                    (repo.name === "Sweat-Spectrum-FullStack-Project" ?
                        <>{repo.name} 💦 <img style={{paddingTop: '8px'}} width={'200px'} src={'../../public/SweatSpectrum.png'} alt="Sweat Spectrum Project" /></> :
                        repo.name)
                      }
                      
                    </h2>
                    <a style={{fontSize: '20px', fontFamily: 'roboto-mono', color: '#738678'}} target="_blank" href={repo.html_url} onClick={(e) => handleLinkClick(e, repo.html_url)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                    </svg>
                      Repo Link</a>
                    </div>
                    <p style={{fontFamily: 'roboto-mono'}}>{repo.description}</p>
                </div>
              </article>
  ))}
</ul>
          
        </>
      );
      
}

export default ProjectCard;

//API
function searchJobs() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'bcb01cdc45msh27b70fa97d25445p1034c4jsn305feb502192',
            'X-RapidAPI-Host': 'fresh-linkedin-profile-data.p.rapidapi.com'
        }
    };
    const searchKeyword = document.getElementById('search').value;
    const jobList = document.getElementById('jobList');
    jobList.innerHTML = ''; // Clear previous results

    //fetch API
    fetch(`https://fresh-linkedin-profile-data.p.rapidapi.com/search-jobs?keyword=${searchKeyword}`, options)
        .then(response => response.json())
        .then(data => {
            data.forEach(job => {
                const li = document.createElement('li');
                li.innerHTML = `
                    <h2>${job.title}</h2>
                    <p>${job.company}</p>
                    <p>${job.location}</p>
                    <p>${job.created_at}</p>
                    <a href="${job.url}" target="_blank">Learn More</a>
                `;
                jobList.appendChild(li);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
document.addEventListener("DOMContentLoaded", function() {
    const username = "Hazlettsammy"; // My github username
    const repoContainer = document.getElementById("repo-container");

    fetch(`https://api.github.com/users/${username}/repos`)
        .then(response => response.json())
        .then(data => {
            repoContainer.innerHTML = ""; // Clear the "Loading..." text
            data.forEach(repo => {
                const repoCard = document.createElement("div");
                repoCard.classList.add("repo-card");

                repoCard.innerHTML = `
                    <h3><a href="${repo.html_url}" target="_blank">${repo.name}</a></h3>
                    <p>${repo.description ? repo.description : "No description provided."}</p>
                    <p>⭐ Stars: ${repo.stargazers_count}</p>
                `;

                repoContainer.appendChild(repoCard);
            });
        })
        .catch(error => {
            repoContainer.innerHTML = "Error loading repositories.";
            console.error("Error fetching repositories:", error);
        });
});

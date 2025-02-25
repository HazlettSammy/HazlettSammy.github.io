document.addEventListener("DOMContentLoaded", function() {
    const repoContainer = document.getElementById("repo-container");

    // Define repositories manually with details
    const repositories = [
        {
            name: "UC_Computer_Programming_2",
            url: "https://github.com/HazlettSammy/UC_Computer_Programming_2",
            description: "A collection of projects and assignments from my Computer Programming 2 course at the University of Cincinnati.",
            details: "This repository contains various C++ projects demonstrating object-oriented programming, data structures, and algorithms. Topics covered include recursion, linked lists, and file I/O."
        },
        // Add more repositories in the same format:
        // {
        //     name: "Another_Repo",
        //     url: "https://github.com/yourusername/Another_Repo",
        //     description: "Short description here.",
        //     details: "Detailed explanation of what this repo contains."
        // }
    ];

    // Generate sections for each repository
    repositories.forEach(repo => {
        const repoSection = document.createElement("section");
        repoSection.classList.add("repo-section");

        repoSection.innerHTML = `
            <h3><a href="${repo.url}" target="_blank">${repo.name}</a></h3>
            <p><strong>Description:</strong> ${repo.description}</p>
            <p><strong>Details:</strong> ${repo.details}</p>
        `;

        repoContainer.appendChild(repoSection);
    });
});

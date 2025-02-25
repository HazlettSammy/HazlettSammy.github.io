document.addEventListener("DOMContentLoaded", function() {
    const repoContainer = document.getElementById("repo-container");
    const themeToggle = document.getElementById("theme-toggle");

    // List of all active repositories
    const repositories = [
        { name: "UC_Computer_Programming_2", url: "https://github.com/HazlettSammy/UC_Computer_Programming_2", description: "Advanced Java programming covering OOP, data structures, and software design." },
        { name: "UC_Database_Managment_2", url: "https://github.com/HazlettSammy/UC_Database_Managment_2", description: "Advanced SQL queries, stored procedures, and transaction management." },
        { name: "UC_Database_Managment_1", url: "https://github.com/HazlettSammy/UC_Database_Managment_1", description: "Fundamental database concepts, SQL syntax, and relational database design." },
        { name: "UC_Computer_Networking", url: "https://github.com/HazlettSammy/UC_Computer_Networking", description: "Subnetting, network security, protocols, and Cisco networking concepts." },
        { name: "UC_Fundamentals_of_IT", url: "https://github.com/HazlettSammy/UC_Fundamentals_of_IT", description: "Basic IT principles, computer hardware, and troubleshooting." },
        { name: "UC_Fundamentals_of_Web_Development", url: "https://github.com/HazlettSammy/UC_Fundamentals_of_Web_Development", description: "HTML, CSS, and JavaScript basics for web development." },
        { name: "UC_Computer_Programming_1", url: "https://github.com/HazlettSammy/UC_Computer_Programming_1", description: "Introductory Java programming and problem-solving techniques." },
        { name: "UC_Network_Infrastructure_Management", url: "https://github.com/HazlettSammy/UC_Network_Infrastructure_Management", description: "Managing network infrastructure, routers, and switches." },
        { name: "UC_System_Administration", url: "https://github.com/HazlettSammy/UC_System_Administration", description: "Windows and Linux system administration fundamentals." },
        { name: "UC_Client-Side_Web_Programming", url: "https://github.com/HazlettSammy/UC_Client-Side_Web_Programming", description: "JavaScript and front-end programming concepts." }
    ];

    // Generate sections for each repository
    repositories.forEach(repo => {
        const repoSection = document.createElement("div");
        repoSection.classList.add("repo-section");

        repoSection.innerHTML = `
            <h3><a href="${repo.url}" target="_blank">${repo.name}</a></h3>
            <p>${repo.description}</p>
            <a href="${repo.url}" target="_blank" class="repo-button">🔗 View Repo</a>
        `;

        repoContainer.appendChild(repoSection);
    });

    // Dark Mode Toggle
    themeToggle.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
        themeToggle.textContent = document.body.classList.contains("dark-mode") ? "☀️ Toggle Light Mode" : "🌙 Toggle Dark Mode";
    });
});

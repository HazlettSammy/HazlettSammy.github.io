document.addEventListener("DOMContentLoaded", function() {
    const repoContainer = document.getElementById("repo-container");

    // List of active repositories
    const repositories = [
        {
            name: "UC_Computer_Programming_2",
            url: "https://github.com/HazlettSammy/UC_Computer_Programming_2",
            description: "Projects from Computer Programming 2 at UC.",
            details: "Advanced Java programming covering OOP principles, data structures, and software design patterns."
        },
        {
            name: "UC_Database_Managment_2",
            url: "https://github.com/HazlettSammy/UC_Database_Managment_2",
            description: "Database Management 2 coursework.",
            details: "Focuses on advanced SQL queries, stored procedures, database optimization, and transaction management."
        },
        {
            name: "UC_Database_Managment_1",
            url: "https://github.com/HazlettSammy/UC_Database_Managment_1",
            description: "Introduction to databases.",
            details: "Covers fundamental database concepts, SQL syntax, and relational database design."
        },
        {
            name: "UC_Computer_Networking",
            url: "https://github.com/HazlettSammy/UC_Computer_Networking",
            description: "Networking fundamentals coursework.",
            details: "Includes subnetting, network security, protocols, and Cisco networking concepts."
        },
        {
            name: "UC_Fundamentals_of_IT",
            url: "https://github.com/HazlettSammy/UC_Fundamentals_of_IT",
            description: "Fundamentals of IT course repository.",
            details: "Explores the basics of computer hardware, operating systems, and cybersecurity principles."
        },
        {
            name: "UC_Fundamentals_of_Web_Development",
            url: "https://github.com/HazlettSammy/UC_Fundamentals_of_Web_Development",
            description: "Introduction to web development.",
            details: "HTML, CSS, and basic JavaScript concepts used to create modern websites."
        },
        {
            name: "UC_Computer_Programming_1",
            url: "https://github.com/HazlettSammy/UC_Computer_Programming_1",
            description: "Introductory Java programming.",
            details: "Covers basic Java syntax, loops, conditionals, and object-oriented programming."
        },
        {
            name: "UC_Network_Infrastructure_Management",
            url: "https://github.com/HazlettSammy/UC_Network_Infrastructure_Management",
            description: "Network infrastructure and system administration coursework.",
            details: "Focuses on configuring and managing networks, servers, and IT infrastructure."
        },
        {
            name: "UC_System_Administration",
            url: "https://github.com/HazlettSammy/UC_System_Administration",
            description: "System administration projects and coursework.",
            details: "Includes Windows Server, Linux administration, and enterprise IT management."
        },
        {
            name: "UC_Client-Side_Web_Programming",
            url: "https://github.com/HazlettSammy/UC_Client-Side_Web_Programming",
            description: "Client-side web programming coursework.",
            details: "Covers JavaScript, DOM manipulation, and front-end frameworks."
        }
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

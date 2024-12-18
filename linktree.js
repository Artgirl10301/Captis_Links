document.addEventListener("DOMContentLoaded", function() {
    // Define your links here
    const links = [
        { name: "Contact Me", url:"mailto:CaptisPaint@gmail.com" },
        { name: "Services",url:"Captis Services.pdf" },
        { name: "Instagram",url:"https://www.instagram.com/CaptisPaint"},
        { name: "Facebook",url:"https://www.facebook.com/share/sibw6zp9r3n7dwv2/?mibextid=LQQJ4d"},
        // Add more links as needed
    ];

    const linksList = document.getElementById("links-list");

    // Add links to the list
    links.forEach(link => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.textContent = link.name;
        a.href = link.url;
        li.appendChild(a);
        linksList.appendChild(li);
    });
});

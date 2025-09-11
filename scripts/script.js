console.log("Efteling website loaded");

        const hamburgerButton = document.querySelector("header > button:nth-of-type(1)");
        const closeButton = document.querySelector("nav > button:nth-of-type(1)");
        const nav = document.querySelector("nav");

        function toggleMenu() {
            nav.classList.toggle("toonMenu");
        }

        hamburgerButton.addEventListener("click", toggleMenu);
        closeButton.addEventListener("click", toggleMenu);

        
        window.addEventListener("keydown", function(event) {
            if (event.key === "Escape") {
                nav.classList.remove("toonMenu");
            }
        });

        const menuLinks = document.querySelectorAll("nav a");
        menuLinks.forEach(link => {
            link.addEventListener("click", function() {
                nav.classList.remove("toonMenu");
            });
        });





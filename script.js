document.addEventListener("DOMContentLoaded", () => {
    // 1. Custom Cursor Art
    const cursor = document.createElement("div");
    cursor.classList.add("cursor");
    document.body.appendChild(cursor);

    document.addEventListener("mousemove", (e) => {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
    });

    const hoverTargets = document.querySelectorAll("a, button, .img-wrapper");
    hoverTargets.forEach(target => {
        target.addEventListener("mouseenter", () => cursor.classList.add("hovering"));
        target.addEventListener("mouseleave", () => cursor.classList.remove("hovering"));
    });

    // 2. Navbar Effect khi cuộn
    const nav = document.querySelector(".nav");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            nav.classList.add("scrolled");
        } else {
            nav.classList.remove("scrolled");
        }
    });

    // 3. Ultra Smooth Reveal
    const reveals = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    });

    reveals.forEach(reveal => {
        observer.observe(reveal);
    });

    // 4. LOGIC HAMBURGER MENU (Nhi nhớ để đoạn này bên TRONG dấu đóng của DOMContentLoaded)
    const menu = document.querySelector('#mobile-menu');
    const navLinks = document.querySelector('#nav-list');

    if(menu && navLinks) {
        menu.addEventListener('click', function() {
            menu.classList.toggle('is-active');
            navLinks.classList.toggle('active');
        });

        // Đóng menu khi bấm vào một link bất kỳ
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.remove('is-active');
                navLinks.classList.remove('active');
            });
        });
    }
}); // <-- Đây là dấu đóng của DOMContentLoaded, tất cả code nên nằm trên dấu này.
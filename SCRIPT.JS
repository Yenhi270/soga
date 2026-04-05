document.addEventListener("DOMContentLoaded", () => {
    // 1. Custom Cursor Art
    const cursor = document.createElement("div");
    cursor.classList.add("cursor");
    document.body.appendChild(cursor);

    document.addEventListener("mousemove", (e) => {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
    });

    // Phóng to cursor khi di chuột vào link hoặc button
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

    // 3. Ultra Smooth Reveal (Intersection Observer)
    const reveals = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                // Tùy chọn: Bỏ comment dòng dưới nếu muốn hiệu ứng chỉ chạy 1 lần
                // observer.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 0.15, // Hiện ra khi cuộn tới 15% phần tử
        rootMargin: "0px 0px -50px 0px"
    });

    reveals.forEach(reveal => {
        observer.observe(reveal);
    });
});
// Logic đóng mở Hamburger Menu
const menu = document.querySelector('#mobile-menu');
const navLinks = document.querySelector('#nav-list');

if(menu) {
    menu.addEventListener('click', function() {
        menu.classList.toggle('is-active');
        navLinks.classList.toggle('active');
    });
}

// Đóng menu khi bấm vào một link bất kỳ
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('is-active');
        navLinks.classList.remove('active');
    });
});
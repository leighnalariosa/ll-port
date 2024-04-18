// CHANGE ACTIVE STATE FOR ALL SECTIONS WITH INTERSECTION OBSERVER
const myobserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.setAttribute("data-inview", "");
        } else {
            entry.target.removeAttribute("data-inview");
        }
    });
});


document.querySelectorAll("[data-scroll]").forEach((el) => {
    myobserver.observe(el);
});

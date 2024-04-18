// CHANGE ACTIVE STATE FOR ALL SECTIONS WITH INTERSECTION OBSERVER
const myobserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.setAttribute("data-viewstate", "inview");
        } else {
            entry.target.setAttribute("data-viewstate", "notinview");
        }
    });
});


document.querySelectorAll(".scrolltrack").forEach((el) => {
    myobserver.observe(el);
});

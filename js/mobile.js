function toggleMenu() {
    document.getElementById("mobileMenu").classList.toggle("open");
}
document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
        document
            .querySelectorAll(".tab-btn")
            .forEach((b) => b.classList.remove("active"));
        this.classList.add("active");
    });
});
document.querySelectorAll(".commercial-card").forEach((card) => {
    card.addEventListener("click", function () {
        document
            .querySelectorAll(".commercial-card")
            .forEach((c) => c.classList.remove("active"));
        this.classList.add("active");
    });
});
document.querySelectorAll(".page-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
        document
            .querySelectorAll(".page-btn")
            .forEach((b) => b.classList.remove("active"));
        this.classList.add("active");
    });
});
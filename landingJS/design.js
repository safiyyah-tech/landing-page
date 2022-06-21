const moveUp = document.querySelector("#move-up");

moveUp.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behaviour: "smooth",
    });
});
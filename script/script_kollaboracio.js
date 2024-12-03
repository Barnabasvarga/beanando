document.getElementById("ugras4").addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});

const video3 = document.getElementById("video3");
video3.addEventListener("mouseover", () => video3.play());
video3.addEventListener("mouseout", () => video3.pause());
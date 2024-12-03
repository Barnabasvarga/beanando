document.getElementById("ugras").addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth", 
    });
});

document.getElementById("ugras2").addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});


const video1 = document.getElementById("video1");
const video2 = document.getElementById("video2");
video1.addEventListener("mouseover", () => video1.play());
video2.addEventListener("mouseover", () => video2.play());
video1.addEventListener("mouseout", () => video1.pause());
video2.addEventListener("mouseout", () => video2.pause());





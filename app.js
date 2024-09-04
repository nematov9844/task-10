const headerLeft = document.getElementById("header-left");
const headerRight = document.getElementById("header-right");
const headerTop = document.getElementById("header-top");
const headerBottom = document.getElementById("header-bottom");

function hideAllHeaders() {
    headerLeft.classList.add("-translate-x-full");
    headerRight.classList.add("translate-x-full");
    headerTop.classList.add("-translate-y-full");
    headerBottom.classList.add("translate-y-full");
}

document.querySelector(".btnLeft").addEventListener("click", () => {
    if (headerLeft.classList.contains("-translate-x-full")) {
        hideAllHeaders();
        headerLeft.classList.remove("-translate-x-full");
    } else {
        headerLeft.classList.add("-translate-x-full");
    }
});

document.querySelector(".btnRight").addEventListener("click", () => {
    if (headerRight.classList.contains("translate-x-full")) {
        hideAllHeaders();
        headerRight.classList.remove("translate-x-full");
    } else {
        headerRight.classList.add("translate-x-full");
    }
});

document.querySelector(".btnTop").addEventListener("click", () => {
    if (headerTop.classList.contains("-translate-y-full")) {
        hideAllHeaders();
        headerTop.classList.remove("-translate-y-full");
    } else {
        headerTop.classList.add("-translate-y-full");
    }
});

document.querySelector(".btnBottom").addEventListener("click", () => {
    if (headerBottom.classList.contains("translate-y-full")) {
        hideAllHeaders();
        headerBottom.classList.remove("translate-y-full");
    } else {
        headerBottom.classList.add("translate-y-full");
    }
});

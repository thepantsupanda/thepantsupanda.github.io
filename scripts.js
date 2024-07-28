// Done so that the gif reloads every time the page is refreshed.
let imageTag = document.querySelector("#sideImg");
let imageSrc = imageTag.getAttribute("src");

imageTag.setAttribute("src", imageSrc + "?" + Math.random())
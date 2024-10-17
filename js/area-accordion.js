
var areaTtl = document.querySelector('.area-ttl');
var areaContent = document.querySelector('.area-content');
var openSpan = document.querySelector('.close');

areaTtl.addEventListener('click', function () {
    areaTtl.classList.toggle('on');
    areaContent.classList.toggle('on');
    openSpan.classList.toggle('on');
    if (openSpan.textContent === "OPEN") {
        openSpan.textContent = "CLOSE";
    } else {
        openSpan.textContent = "OPEN";
    }
    console.log("clicked");
});
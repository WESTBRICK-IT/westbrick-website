const mcCagImage = document.querySelector(".ken-image");
const switcheroo = function(){
    console.log("hello");
    mcCagImage.src = "../images/westbrick/KCM Flames2-744w-compressed.jpg";
    setTimeout(function() {
        mcCagImage.src = "../images/westbrick/K McCagherty2-744w-compressed.jpg";
    }, 500);
}
mcCagImage.addEventListener("click", switcheroo);
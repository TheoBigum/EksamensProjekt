window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");
}


function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

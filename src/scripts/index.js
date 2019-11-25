import '../styles/index.scss';

function toggleDisplay() {
    var x = document.getElementsByClassName("selected");
    
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}


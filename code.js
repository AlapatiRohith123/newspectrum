function myFunction() {
    var x = document.getElementById("nav");
    var y=document.body
    if (x.style.display == "block") {
    x.style.display = "none";
    y.style.margin="0";
    }
    else {
    x.style.display = "block";
    y.style.marginTop = "52px";
    }
}
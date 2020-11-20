document.getElementById("btn").addEventListener("click", myFunction);
function myFunction() {
    myPopUp.style.display = "block";
}

document.getElementById("popUpClose").addEventListener("click", close);
function close() {
    myPopUp.style.display = "none";

}
const navButton = document.getElementById("openNav")


/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
navButton.addEventListener('click', openNav)

console.dir(navButton)
console.dir(document.getElementById("mySidenav"))

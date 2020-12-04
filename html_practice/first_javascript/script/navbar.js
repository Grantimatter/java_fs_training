let navbar = document.createElement("header");
navbar.classList.add("navbar",  "navbar-expand", "flex-column", "flex-md-row", "bd-navbar", "navbar-fixed-top", "navbar-expand-lg", "navbar-dark", "bg-dark");

//let navList = document.createElement("ul").classList.add("navbar-nav", "bd-navbar-nav", "flex-row");

let navBrand = document.createElement("a");
navBrand.classList.add("navbar-brand");
navBrand.href="../pages/home.html";
navBrand.textContent = "Wiswell Bank";
navbar.appendChild(navBrand);

let navDivLeft = document.createElement("div");
navDivLeft.classList.add("navbar-nav-scroll");
navbar.appendChild(navDivLeft);

let navDivList = document.createElement("ul");
navDivList.classList.add("navbar-nav", "bd-navbar-nav", "flex-row");
navDivLeft.appendChild(navDivList);

let home = document.createElement("li");
home.classList.add("nav-item");
let homeLink = document.createElement("a");
homeLink.classList.add("nav-link");
homeLink.href="../pages/home.html";
homeLink.textContent = "Home";
home.appendChild(homeLink);


navDivList.appendChild(home);

document.body.prepend(navbar);

function createNavList(classes){
    

}
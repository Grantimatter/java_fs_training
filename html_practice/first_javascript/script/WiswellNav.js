class Navbar{
    constructor(brandText, brandLink){
        this.head = document.createElement("header");
        this.head.classList.add("navbar",  "navbar-expand", "flex-column", "flex-md-row", "bd-navbar", "navbar-fixed-top", "navbar-expand-lg", "navbar-dark", "bg-dark");

        this.brand = document.createElement("a");
        this.brand.classList.add("navbar-brand");
        this.brand.href = brandLink;
        this.brand.textContent = brandText;
        this.head.appendChild(this.brand);

        this.leftListDiv = document.createElement("div");
        this.leftListDiv.classList.add("navbar-nav-scroll");

        this.head.appendChild(this.leftListDiv);

        this.leftList = document.createElement("ul");
        this.leftList.classList.add("navbar-nav", "bd-navbar-nav", "flex-row");
        this.leftListDiv.appendChild(this.leftList);

        this.rightList = document.createElement("ul");
        this.rightList.classList.add("navbar-nav", "ml-md-auto");
        this.head.appendChild(this.rightList);
    }
    addLeftListItem(text, href){
        let item = document.createElement("li");
        item.classList.add("nav-item");
        let link = document.createElement("a");
        link.classList.add("nav-link");
        link.textContent = text;
        link.href = href;
        item.appendChild(link);
        this.leftList.appendChild(item);
    }
    addRightListItem(text, href, svgPath, viewBox, newWindow = false){
        let item = document.createElement("li");
        item.classList.add("nav-item");

        let link = document.createElement("a");
        link.classList.add("nav-link", "pl-2", "pr-1", "mx-1", "py-3", "my-n2");
        link.style.width = "9mm";
        link.href = href;
        let titleElement = document.createElement("title");
        titleElement.innerHTML = text;

        if(newWindow) link.target = "_blank";
        link.rel = "noopener";
        link.setAttribute("aria-label", "GitHub");

        if(text){
            //link.innerHTML = text;
        }
        if(svgPath){
            let svgElement = document.createElement("svg");
            svgElement.className = "navbar-nav-svg";
            svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg");
            svgElement.setAttribute("viewBox",  viewBox);
            svgElement.setAttribute("role", "img");
            svgElement.setAttribute("focusable", "false");
            link.style.width = "10mm";
            let path = document.createElement("path");
            path.setAttribute("fill", "currentColor");
            path.setAttribute("fill-rule", "evenodd");
            path.setAttribute("d", svgPath);
            svgElement.appendChild(titleElement);
            svgElement.appendChild(path);
            link.innerHTML= svgElement.outerHTML;
        }
        item.appendChild(link);
        this.rightList.appendChild(item);
    }
}

let nav = new Navbar("Wiswell", "../pages/home.html");
nav.addLeftListItem("Home", "../pages/home.html");
nav.addLeftListItem("About", "../pages/about.html");
nav.addLeftListItem("Hello JS", "../pages/HelloJS.html");
nav.addRightListItem("GitHub", "https://github.com/Grantimatter/java_fs_training", "M256 0C114.64 0 0 114.61 0 256c0 113.09 73.34 209 175.08 242.9 12.8 2.35 17.47-5.56 17.47-12.34 0-6.08-.22-22.18-.35-43.54-71.2 15.49-86.2-34.34-86.2-34.34-11.64-29.57-28.42-37.45-28.42-37.45-23.27-15.84 1.73-15.55 1.73-15.55 25.69 1.81 39.21 26.38 39.21 26.38 22.84 39.12 59.92 27.82 74.5 21.27 2.33-16.54 8.94-27.82 16.25-34.22-56.84-6.43-116.6-28.43-116.6-126.49 0-27.95 10-50.8 26.35-68.69-2.63-6.48-11.42-32.5 2.51-67.75 0 0 21.49-6.88 70.4 26.24a242.65 242.65 0 0 1 128.18 0c48.87-33.13 70.33-26.24 70.33-26.24 14 35.25 5.18 61.27 2.55 67.75 16.41 17.9 26.31 40.75 26.31 68.69 0 98.35-59.85 120-116.88 126.32 9.19 7.9 17.38 23.53 17.38 47.41 0 34.22-.31 61.83-.31 70.23 0 6.85 4.61 14.81 17.6 12.31C438.72 464.97 512 369.08 512 256.02 512 114.62 397.37 0 256 0z", "0 0 512 499.36", true)
nav.addRightListItem("LinkedIn", "https://www.linkedin.com/in/grant-wiswell-537181183/", "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z", "0 0 24 24", true);

document.body.prepend(nav.head);
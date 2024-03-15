let navBar = document.querySelector('nav');

window.onscroll=()=>{
    this.scrollY>10 ? navBar.style.position = "fixed" : navBar.style.position = "static";
}
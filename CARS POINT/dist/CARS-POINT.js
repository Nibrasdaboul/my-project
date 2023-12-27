// !SEARCH 
let search = document.querySelector('.search-box');
// ! SEARCH-ONCLICK
document.querySelector('#search-icon').onclick = () =>{
    search.classList.toggle('active');
}


//! ANIMATIONS 

// TODO CARS-SECTION
let Cars = document.querySelector('.Cars-Images');
let COL1 = document.querySelector('.column1');
let COL2 = document.querySelector('.column2');
let  CarsText = document.querySelector('.Cars-text')

// TODO ABOUT-SECTION 
let About = document.querySelector('.about');
let IMG = document.querySelector('.IMG');
let AboutText = document.querySelector('.about-text');

// TODO PARTS-SECTION
let PARTS = document.querySelector('.parts');
let COL3  = document.querySelector('.parts-column1');
let COL4  = document.getElementById('parts-column2');
let PartsText = document.querySelector('.parts-text');

// TODO BLOG-SECTION 
let Blog = document.querySelector('.blog');
let ELEMENTS = document.querySelector('.blog-elements');
let BlogText = document.querySelector('.blog-text');


// ! ANIMATE FUNCTION 

window.onscroll = function() {

    // TODO CARS-SECTION ANIMATE 
    if(window.scrollY >= Cars.offsetTop - 300){
        COL1.style.opacity = '1';
        COL1.style.left = '0';
        COL2.style.opacity = '1';
        COL2.style.right = '0';
        CarsText.style.opacity = '1';

    }
    else{
        COL1.style.opacity = '0';
        COL1.style.left = '-400px';
        COL2.style.opacity = '0';
        COL2.style.right = '-600px';
        CarsText.style.opacity = '0';  
    }

    // TODO ABOUT-SECTION ANIMATE 
    if(window.scrollY >= About.offsetTop - 250){
        IMG.style.opacity = '1';
        IMG.style.left = '0';
        AboutText.style.opacity = '1';
    }
    else{
        IMG.style.opacity = '0';
        IMG.style.left = '-700px';
        AboutText.style.opacity = '0';
    }

    // TODO PARTS-SECTION ANIMATE 
    if(window.scrollY >= PARTS.offsetTop - 200){
        COL3.style.opacity = '1';
        COL3.style.top = '0';
        PartsText.style.opacity = '1';

        if(window.scrollY >= PARTS.offsetTop + 40){
            COL4.style.opacity = '1';
            COL4.style.bottom = '0';
        }
    }
    else{
        COL3.style.opacity = '0';
        COL3.style.top = '-400px';
        COL4.style.opacity = '0';
        COL4.style.bottom = '-400px';
        PartsText.style.opacity = '0';
    }

    // TODO BLOG-SECTION ANIMATE 
    if(window.scrollY >= Blog.offsetTop - 200){
        ELEMENTS.style.opacity = '1';
        ELEMENTS.style.right = '0';
        BlogText.style.opacity = '1';
    }  
    else{
        ELEMENTS.style.opacity = '0';
        ELEMENTS.style.right = '-400px';
        BlogText.style.opacity = '0';
    }
}










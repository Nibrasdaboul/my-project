// !SEARCH 
let search = document.querySelector('.search-box');
// ! SEARCH-ONCLICK
document.querySelector('#search-icon').onclick = () =>{
    search.classList.toggle('active');
}


// Scroll Reveal Animation

const sr = ScrollReveal({
    origin :'top',
    distance : '60px',
    duration : 2500,
    delay : 400,
    reset : true
});

sr.reveal(".main_text", {origin :'left'});
sr.reveal(".main_image", {origin :'top'});
sr.reveal(".main-p", {origin :'right', delay : 100,});
sr.reveal(".main_btn", {origin :'bottom', delay : 150,});

sr.reveal(".image", {origin :'top'});
sr.reveal(".about-title", {origin :'top', interval :200});
sr.reveal(".text-title", {origin :'right', delay : 500});
sr.reveal(".about-text-p", {origin :'left', delay : 1000});
sr.reveal(".about-text-btn", {origin :'bottom'});

sr.reveal(".menu-title", {origin :'bottom'})
sr.reveal(".menu_card", {origin :'top',interval :200, delay :1000});
sr.reveal(".menu_image", {origin :'top',interval :200, delay :130});
sr.reveal(".menu_info", {origin :'bottom',interval :200, delay :130});


sr.reveal(".gallary-title", {origin :'top'});
sr.reveal(".gallary_image", {origin :'bottom',interval :200, delay :130});
 
sr.reveal(".review-title", {origin :'top' , interval:200});
sr.reveal(".review_card", {origin :'top',interval :200 ,delay:130});

sr.reveal(".order-title", {origin :'top' , interval:200});
sr.reveal(".order_image", {origin :'left'})
sr.reveal(".input", {origin :'right' , interval:200});


sr.reveal(".team-title", {origin :'top' , interval:200});
sr.reveal(".profile", {origin :'bottom',interval :200 ,delay:130});

sr.reveal(".footer_tag", {origin :'top',interval :200 });
sr.reveal(".end", {origin :'bottom',interval :200 });



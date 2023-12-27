// Scroll Reveal Animation

const sr = ScrollReveal({
    origin :'top',
    distance : '60px',
    duration : 2500,
    delay : 400,
    reset : true
})

sr.reveal('.home-text, .beats-text',{origin :'left'})
sr.reveal('.home-image, .beats-image',{origin :'right'})
sr.reveal('.heading',{delay :200})

sr.reveal('.specs-text .box',{origin :'left', interval :200})
sr.reveal('.specs-image',{delay :200})

sr.reveal('.heading2',{delay :200})
sr.reveal('.column-1 .box, .footer , .row1, .row2, .row3, row4',{ interval :150})

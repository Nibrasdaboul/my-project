// Scroll Reveal Animation

const sr = ScrollReveal({
    origin :'top',
    distance : '60px',
    duration : 2500,
    delay : 400,
    reset : true
})


sr.reveal('.home-info',{origin :'left',delay :1500, interval: 200})
sr.reveal('.home-img',{origin :'top'})
sr.reveal('.box',{origin :'top', interval :200})
sr.reveal('.heading',{origin :'bottom' ,delay :200 , delay :1000})

sr.reveal('.background-text2',{origin :'top'})
sr.reveal('.specs-img',{origin :'right', delay :1000})
sr.reveal('.box2',{origin :'left', interval :200, delay :1200})

sr.reveal(' .background-text3',{origin :'top'})
sr.reveal('.box3',{origin :'right', interval :200, delay :1200})
sr.reveal('.case-section1-img',{origin :'left', delay :1000})
sr.reveal('.case-section2-text',{origin :'left'})
sr.reveal('.case-section2-img',{origin :'right'})

sr.reveal('.box4',{origin :'top', interval :200,})
sr.reveal('.box5',{origin :'top', interval :200,})

sr.reveal('.specs-image',{delay :200})

sr.reveal('.heading2',{delay :200})
sr.reveal('.column-1 .box, .footer , .row1, .row2, .row3, .row4',{ interval :150})

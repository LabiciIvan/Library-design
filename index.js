
document.querySelector('.fa-solid.fa-magnifying-glass').addEventListener('click', showSearchBar);
document.querySelector('.fa-solid.fa-x').addEventListener('click', hideSearchBar);
document.querySelector('.fa-solid.fa-bars').addEventListener('click', showMenu);
document.querySelector('.fa-solid.fa-x.nav').addEventListener('click', hideMenu);


function showMenu() {
    console.log('aratam meniul');

    let tl = gsap.timeline({duration: 0.2});

    tl.to(".fa-solid.fa-bars", 
    {
        opacity: 0,
    }, "-=1").to(".navbar", 
    {
        display: 'flex',
        width: '20%',
        opacity: 1,
        
    });
    
}
function hideMenu() {
    console.log('ascunde meniul');
    
    let tl = gsap.timeline({duration: 0.2});

    tl.to(".navbar", 
    {
        display: 'none',
        width: '0',
        opacity: 0,
 
   
    }, "-=0.2").to(".fa-solid.fa-bars", 
    {
        opacity: 1,
    }, "-= 1");
}

function showSearchBar() {

    let yAxe;

    if(window.innerWidth < 1600) {
        yAxe = '100px';
    } else {
        
        yAxe = '200px';
    }

    let tl = gsap.timeline({duration: 0.2});

    tl.to(".header-text", 
    {
        duration: 0.3,
        y: `${yAxe}`,
        opacity: 0,
        display: 'none',
    }, "-= 1").to(".header-form", 
    {
        duration: 0.1,
        y: -100,

    }).to(".header-form", 
    {
        duration: 0.3,
        y: 0,
        opacity: 1,
        display: 'flex',
    });
}


function hideSearchBar() {

    let yAxe;

    if(window.innerWidth < 1600) {
        yAxe = '100px';
    } else {
        
        yAxe = '200px';
    }

    let tl = gsap.timeline({duration: 0.2});

    tl.to(".header-form", 
    {
        duration: 0.3,
        y: `${yAxe}`,
        opacity: 0,
        display: 'none',
        
    }, "-= 1").to(".header-text", 
    {
        duration: 0.1,
        y: -200,
        
    }).to(".header-text", 
    {
        duration: 0.3,
        y: 0,
        opacity: 1,
        display: 'flex',
        
    });
}
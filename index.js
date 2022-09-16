
document.querySelector('.fa-solid.fa-magnifying-glass').addEventListener('click', showSearchBar);
document.querySelector('.fa-solid.fa-x').addEventListener('click', hideSearchBar);
document.querySelector('.fa-solid.fa-bars').addEventListener('click', showMenu);
document.querySelector('.fa-solid.fa-x.nav').addEventListener('click', hideMenu);
document.querySelector('.form-input').addEventListener('keyup', test);
document.querySelector('.form-input').addEventListener('keypress', test2);

function test(e) {
    console.log(e.target.value);
}
function test2(e) {
    if(e.key !== 'Enter') return;

    console.log('submited value');
    e.target.value = '';

    let bookArray = [' In Search of Lost Time by Marcel Proust', ' Don Quixote by Miguel de Cervantes',
                     'The Great Gatsby by F. Scott Fitzgerald', ' Moby Dick by Herman Melville', 
                     'War and Peace by Leo Tolstoy', 'The Odyssey by Homer',
                      'Madame Bovary by Gustave Flaubert', 'The Divine Comedy by Dante Alighieri',
                       'The Brothers Karamazov by Fyodor Dostoyevsky',
                       'The Divine Comedy by Dante Alighieri',
                       'The Brothers Karamazov by Fyodor Dostoyevsky',
                       'Madame Bovary by Gustave Flaubert', 'The Divine Comedy by Dante Alighieri',
                       'The Brothers Karamazov by Fyodor Dostoyevsky',
                       'The Divine Comedy by Dante Alighieri',
                       'The Brothers Karamazov by Fyodor Dostoyevsky' ];

    let bodyElement = document.querySelector('.home-body');
        bodyElement.innerHTML = "";
    
    
    
    for(let i = 0; i < bookArray.length; ++i) {
        
        let elementCreated = `<div class='body-result'>
        <a href='#' class='body-link'>${bookArray[i]}</a>
        </div>`;
        
        bodyElement.innerHTML += elementCreated;
    }
    
    let lt2 = gsap.timeline({duration: 1});
    let getAllLinks = document.querySelectorAll('.body-link');

    for(let i = 0; i < getAllLinks.length; ++i) {
        
        lt2.to('.body-result', {
            display: 'flex'
        }, "-=1").from(getAllLinks[i], {
            display: 'none',
            ease: "back.out(1.7)", y: -200
        }, "-=0.3");
    }  
}


function showMenu() {

    
    let navLinks = document.querySelectorAll('.nav-link');
    
    let tl = gsap.timeline({duration: 0.2});

    tl.to(".fa-solid.fa-bars", 
    {
        opacity: 0,
    }, "-=1").to(".navbar", 
    {
        display: 'flex',
        width: '100%',
        opacity: 1,
        
    }, "-=1").to(".header-text", 
    {
        opacity: 0.5,
        duration: 0.1
        
    }).to(".header-form", 
    {
        opacity: 0.5,
        duration: 0.1
        
    });
    
    for(let i = 0; i < navLinks.length; ++i) {
        tl.from(navLinks[i], {
            x: 400,
            duration: 0.2
        })
    }
    
}
function hideMenu() {
    console.log('ascunde meniul');
    
    let tl = gsap.timeline({duration: 0.2});



    tl.to(".navbar", 
    {
        display: 'none',
        width: '0',
        opacity: 0,
 
   
    }, "-=0.3").to(".fa-solid.fa-bars", 
    {
        opacity: 1,
    }, "-= 1").to(".header-text", 
    {
        opacity: 1,
        duration: 0.1
        
    }).to(".header-form", 
    {
        opacity: 1,
        duration: 0.1
        
    });

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
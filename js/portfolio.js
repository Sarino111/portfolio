

// classes
import HelpFunctions from './classes/helpFunctions';
import Animation from './classes/animation';
import Scrolling from './classes/Scrolling.js';
import NavBtn from './classes/NavBtn';

const body = document.querySelector('body');

const menuTop = document.querySelector('.menu-top');
const menuTopSide = document.querySelector('.menu-side');

const checkBox = document.getElementById('active');

const label = document.querySelector('.menu-btn');

const listSide = document.querySelector('.na-list-side');

const btnMenu = document.querySelector('.btn-menu');

const functions = new HelpFunctions()
const animation = new Animation()
const scrolling = new Scrolling();
const navBtn = new NavBtn();
const mobileWidth = +770;
const mobileHeight = +627;

let debounceTimer;

let canScroll = true;


// set name of currentpage to app
scrolling.setSectionId();

// set 'current' to current section
scrolling.setCurrentSection();

// fill actual button
scrolling.fillButton();


// If resize window, fit the page
window.addEventListener('resize', () => {
    debounceTimer = setTimeout( () => { scrolling.resize() }, 500 );
});

function appVersion() {
    if ( window.innerWidth > mobileWidth && window.innerHeight > mobileHeight ) {
        return true;        
    } else {
    return false;
    }
}

// scroll to next page
document.addEventListener('wheel', (event) => {
    
    if (!canScroll) {
        return; 
      }
    if ( appVersion() ){
        canScroll = false;
        setTimeout(() => {
            canScroll = true;
        }, 1000);

        const scrollDir = scrolling.getScrolldir( event );

        scrolling.getScroll( scrollDir );

        scrolling.setSectionId();

        scrolling.fillButton();

        checkBox.checked = false;
        }
} );

// if scroll change top menu at side menu
document.addEventListener('scroll', (event) => {
    event.preventDefault();

    let positionY = window.scrollY;
    let positionYround = Math.round(window.scrollY + 1 );

    // Rotate home button
    if ( positionY > 50 ) {
        // rotate home button
        functions.addClass( navBtn.homeBtn, 'btn-rotate' )
    } else {
        // removeClass( rotate home button );
        functions.removeClass( navBtn.homeBtn, 'btn-rotate' )    
    }

    if ( appVersion() ) {
        if ( positionY > 50 ) {
            // animate 'menu top' out from screeen
            functions.addClass( menuTop, 'animation-out' );

            // unhide menu top button
            functions.removeClass( menuTopSide );

            // unhide with animation menu top side button
            animation.animationMenu();


        } else {
            // unhide menu top ( remove class hidden )
            functions.removeClass( menuTop );

            // remove class for animation
            functions.removeClass( menuTop, 'animation-out' );    
            
            // animate 'menu top' in to screeen
            functions.addClass( menuTop, 'animation-in')
            
            // hide menu top side ( add class hidden ) 
            functions.addClass( menuTopSide );

            // unhide with animation menu top side button
            animation.removeAnimationMenu();       

        };

        // Animation top menu 
        if ( positionYround >= scrolling.sections[1].offsetTop) {
            // hide menuTop for pc 
            functions.addClass( menuTop );    
            
            functions.removeClass( menuTopSide, 'animation-out' )
    
        } else {        
            functions.addClass( menuTopSide, 'animation-out' )    
        };

    }

    // fill skills charts when scroll on page with them
    animation.chartAnimation();

});

// hide side menu if click outside. 
document.addEventListener( 'click', (event) => {

    var target = event.target.parentNode;
     
    hideMenu( target );
})

// hide menu if click outside. 
function hideMenu ( target ){
    let checked = checkBox.checked;

    if ( ! ( target == btnMenu || target == label || target == menuTopSide || target == listSide) ) 
    { if ( checked == true ) {
        checkBox.checked = false;
    }
    } 
}

// Scroll acc. nav. button click
navBtn.mergeBtn().map( button => {
    button.addEventListener('click', (event) => {
        event.preventDefault();
                
        let eleBtn = event.target;
               
        scrolling.btnScroll( eleBtn );
    })
})



const fillerLeft = document.querySelector('.filler1');
const fillerRight = document.querySelector('.filler2');
const footer = document.querySelector('.section-footer');

// liquid side menu
window.addEventListener('scroll', (event) => {
    event.preventDefault()

    // let height = ( (body.offsetHeight * scrolling.sections.length) - window.innerHeight) / 100;
    let height = ( (body.offsetHeight) - window.innerHeight ) / 100;
    let actPosition = body.getBoundingClientRect().top; 


    let lengthFill = fillerLeft.getTotalLength();
    let res = Math.floor( actPosition / height )
    // let newDashOffset = (575 + ( ( ( 575 - 315 ) / 100 ) * res ))
    let newDashOffset = (599 + ( ( ( 599 - 290 ) / 100 ) * res ))

    fillerLeft.style.strokeDashoffset = newDashOffset;
    fillerRight.style.strokeDashoffset = newDashOffset;
} )



const sideMenuSvg = document.querySelector('.sideMenu')
const sideMenu = document.querySelector('.menu-side')

if ( window.innerWidth < 400 ) {
    functions.addClass( sideMenuSvg, 'hidden' );
    functions.addClass( menuTop, 'hidden' );
    functions.removeClass( sideMenu, 'hidden' );
}


// Toogle close and menu icons
function toogleIcon( elem, name ) {
    let classes = elem.classList;

    classes.toggle( name );
}

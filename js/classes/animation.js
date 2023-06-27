
import HelpFunctions from './helpFunctions';


export default class Animation {


    constructor ( ) {

        this.function = new HelpFunctions();

        this.menuLines = document.querySelectorAll('.menu-line');
        this.sectionThird = document.querySelector('.section-third');
        this.progressBars = document.querySelectorAll('.progress-bar');
        this.skills = document.querySelector('.skills')

    }

    // add class for animation top menu button
    animationMenu () {
        this.function.addClass( this.menuLines[0], 'first-line' )
        this.function.addClass( this.menuLines[1], 'middle-line' )
        this.function.addClass( this.menuLines[2], 'last-line' )
    }

    // remove class for stop animation top menu button
    removeAnimationMenu () {
        this.function.removeClass( this.menuLines[0], 'first-line' )
        this.function.removeClass( this.menuLines[1], 'middle-line' )
        this.function.removeClass( this.menuLines[2], 'last-line' )
    }
    
    // fill charts when scroll on page with them
    chartAnimation() {
        let findClass = this.sectionThird.classList.contains('current');
        
        if ( findClass == true || (window.scrollY + window.innerHeight) > this.sectionThird.offsetTop ) {

            for ( let bar of this.progressBars ) {

            this.function.addClass( bar, 'active-bar' )
        }
        
        }
    }
    

}
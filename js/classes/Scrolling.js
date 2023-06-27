
import HelpFunctions from "./helpFunctions";


export default class Scrolling {
    
    constructor( ) {

        this.functions = new HelpFunctions();

        this.sections = document.querySelectorAll('.section');
    
        this.sectionContainer = document.querySelector('.sections');
        this.app = document.querySelector('#app');
        this.buttons = document.querySelectorAll('.btn-liquid');
        this.sectionCur = document.getElementsByClassName('current');

        this.currentSection = this.getSection();
        this.nextSection = 0;
        this.currentSecKey = this.getSectionDataId() -1;
    }

////////////////////////////////////////////////////////////
    /**
     *      Handle section
     */
////////////////////////////////////////////////////////////

    // Get actual section
    getSection() {

        for ( const section of this.sections ) {

            let sectionOffsetTop = parseInt(section.offsetTop);
            let docElemScrollTop = parseInt(document.documentElement.scrollTop);

            this.functions.removeClass( section, 'current' );
    
          if ( Math.abs( sectionOffsetTop ) == docElemScrollTop ){
    
            this.functions.addClass( section, 'current');  
            return section;

          } else {
            for ( let i=0; i < this.sections.length; i++ ){

                let firstOffset = ( 0 );
                let lastSection = (this.sections.length -1);
                let j = (i !== lastSection) ? i++ : i ;

                // If scroll position is bigger as 0 but smaller as next page return section
                if ( docElemScrollTop > firstOffset && docElemScrollTop < 
                    ( this.sections[j].offsetHeight * ( i + 1 )) ) { 
                       
                    return this.sections[i];
                }
            }
            }
        }
    }

    // Add class 'current' at actual section
    setCurrentSection() {
        let section = this.currentSection ? this.currentSection : sections[0];
        this.functions.addClass( section, 'current' );
    }

    // Get id of current section
    getSectionId( nextSection = this.nextSection !== 0 ? this.nextSection : this.currentSection  ) {
        let id = nextSection.getAttribute("id");

        return id;
    }

    // Get dataset-id of actual section
    getSectionDataId( currentSection = this.getSection() ) {

        let sectionId = currentSection.dataset.section;
        return sectionId; 
    } 

    // Add name of current section to dataset app
    setSectionId( element = this.getSectionId() ) {
        this.app.dataset.currentSection = element;
    }    

////////////////////////////////////////////////////////////
    /**
     *      Handle scroll
     */
////////////////////////////////////////////////////////////

    // Find out scroll direction (up or down)
    getScrolldir( event ) {

        let scroll = event.deltaY;

        // Find out if direction is down
        if ( scroll > 1 ) {
            return 'down';
        }
        return 'up'
    }

    // Scroll acc. button
    btnScroll( eleBtn ) {
        let btnAttr = eleBtn.parentNode.getAttribute("href") ? eleBtn.parentNode.getAttribute("href") : eleBtn.getAttribute("href");
        let currSection = this.currentSection;

 
        for ( let section of this.sections ) {
            let secAttr = section.getAttribute('id')
            let getOffset = section.offsetTop; 

            if ( btnAttr == '#' + secAttr ) {
                scrollTo(0, getOffset );

                this.classToSection( section, currSection )
                this.fillButton( section );
                this.currentSection = section;
                this.currentSecKey = this.getSectionDataId( this.currentSection ) - 1;               
            }
        }    
    }


    // Scroll acc. wheel. Down or up
    getScroll( scrollDir = false, sectionKey = this.currentSecKey ) {
        let secLength = this.sections.length - 1;

        // If scroll down, move on next page
        if ( scrollDir == 'down' && sectionKey < this.sections.length) {
            sectionKey < secLength ? this.currentSecKey++ : secLength;
            let nextSectionKey = this.currentSecKey;
            let nextEl = this.sections[ nextSectionKey ];
            let nextOffset = nextEl.offsetTop;
            this.nextSection = this.sections[ nextSectionKey ];

            this.classNextSection( this.sections, nextSectionKey )
            this.movePage( 0, nextOffset );            
            
            // this.sectionContainer.style.top = ( (nextSectionKeytion - Number(1)) * -100) + 'vh';
        } else {
            (sectionKey) > 0 ? this.currentSecKey-- : sectionKey;
            let nextSectionKey = this.currentSecKey;
            let nextEl = this.sections[ nextSectionKey ];
            let nextOffset = nextEl.offsetTop;
            this.nextSection = this.sections[ nextSectionKey ];

            this.classPreviousSection( this.sections, nextSectionKey )
            this.movePage( 0, nextOffset );

            // this.sectionContainer.style.top = (nextSection * -100) + 'vh';
        }            

    }

    // If resize window, fit the page
    resize() {
        for ( const section of this.sections ) {
            if (section.classList.contains('current') ){
                this.movePage( 0, section.Offset ) 
            }  
        }
    };

  

    // Scroll acc x, y
    movePage( x, y ) {
        return scrollTo( x, y );
    }


    // Add class 'current' to next section and remove from actual section
    classToSection( nextSection, currentSection ) {
        this.functions.removeClass( currentSection, 'current' );
        this.functions.addClass( nextSection, 'current' );
    }

    classNextSection( section, key ) {
        this.functions.removeClass( section[ key -1 ], 'current' );
        this.functions.addClass( section[ key ], 'current' );
    }
    
    classPreviousSection( section, key ) {
        this.functions.removeClass( section[ key + 1 ], 'current' );
        this.functions.addClass( section[ key ], 'current' );
    }


    // Add class and fill button on current page
    fillButton( section ) {
        let sectionId = this.getSectionId( section );

        // console.log( sectionId );

        this.unfillButton();

        for ( let button of this.buttons ) {
            let href = button.getAttribute('href');
            
            if ( href == '#' + sectionId ) {                
                
                this.functions.addClass( button, 'actual-page' );
            }  
        }
    }

    unfillButton() {

        for ( let butt of this.buttons ) {
            let classes = butt.classList;

            if ( classes.contains( 'actual-page' ) ) {
                this.functions.removeClass( butt, 'actual-page' );
            }
        }
    }
}
       



export default class NavBtn {

    constructor ( ) {

        this.menuTopBtns = document.querySelectorAll('.na-list a');
        this.menuSideBtn = document.querySelectorAll('.na-list-side a');
        this.menuSvgBtn = document.querySelectorAll('.svg-menu a');
        this.homeBtn = document.querySelector('.btn-menu-home');
        // this.btnHome = document.querySelector('.btn-menu-home')


        this.buttons = [];
    }

    mergeBtn () {
        let btnArrayTop  = Array.from( this.menuTopBtns );
        let btnArraySvg  = Array.from( this.menuSvgBtn );
        let btnArraySide = Array.from( this.menuSideBtn ); 

        this.buttons.push( btnArrayTop, btnArraySvg, btnArraySide, this.homeBtn );

        const mergeBtn = this.buttons.flat(1);
        
        return mergeBtn;
    }
    
}
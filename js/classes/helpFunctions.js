


export default class HelpFunctions {


    constructor( ) {

    }

   
    // Funkcia na pridanie classu
    addClass( name, clas = 'hidden' ) {
        return name.classList.add( clas );
    };

    // Funkcia na odobranie classu
    removeClass( name, clas = 'hidden' ) {
        name.classList.remove( clas );
};



} 


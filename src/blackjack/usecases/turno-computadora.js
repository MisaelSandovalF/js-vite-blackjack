// turno de la computadora

import {crearCartaHTML, pedirCarta, valorCarta} from './'

/**
 * turno de la pc
 * @param {Number} puntosMinimos que la pc necesita para ganar
 * @param {HTMLElement} puntosHTML elemento HTML para mostrar los puntos 
 * @param {HTMLElement} divCartasComputadora elemento HTML para mostrar las cartas
 * @param {Array<string>} deck 
 */
export const turnoComputadora = ( puntosMinimos,puntosHTML,divCartasComputadora, deck = [] ) => {

    if(!puntosMinimos) throw new Error('Puntos minimos son necesarios');
    if(!puntosHTML) throw new Error('Argmuentos HTML son necesarios');
    if(!deck) throw new Error('El deck es nesario');

    let puntosComputadora = 0;
    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
       //TODO crear carta

        const imgCarta = crearCartaHTML(carta);
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}



/**
 * Saca una carta y la elimina del deck
 * @param {Array<String>} deck es un arreglo de string
 * @returns {String} retorna la carta de deck
 */
export const pedirCarta = (deck) => {

    
    if ( !deck || deck.length === 0 ) {

        throw new Error ('No hay cartas en el deck');
    }
    const carta = deck.pop();
    return carta;
}

// export default pedirCarta;
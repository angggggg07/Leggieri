/**
 * Aggiungi Libro
 * @param {String} titolo - titolo libro
 * @param {String} autore - autore libro
 * @param {String} genere - genere libro
 * @param {Number} isbn - numero identificativo libro
 * @returns {Object} - oggetto libro
 */
export function aggiungiLibro(titolo,autore,genere,isbn)
{
    const nuovoLibro = {titolo, autore, genere, isbn};
    console.log("Libro aggiunto con successo!");
    return nuovoLibro;
}

/**
 * 
 * @param {Array<Object>} libreria - Array contenente gli oggetti libri
 * @param {Number} isbn - numero identificativo del libro
 * @returns {boolean} true se c'è un duplicato, false se non ci sono duplicati
 */
export function controlloISBN(libreria,isbn)
{
    return libreria.some(p=>p.isbn===isbn);
}

/** 
 * Rimuovi libro
 * @param {Array<Object>} libreria - Array contenente gli oggetti libri
 * @param {Number} isbn - numero identificativo libro
*/
export function rimuoviLibro(libreria, isbn)
{
    let isbnlib=libreria.find(libro => libro.isbn == isbn);
    let i=libreria.findIndex(libro => libro.isbn == isbn);
    if(isbnlib!=null)
        if(isbnlib.isbn==isbn)
        {
            libreria.splice(i,1);
            console.log("Libro rimosso con successo!");
        }
        else
            console.log("Libro non trovato");
    else   
        console.log("Libro non presente in libreria");
}


/**
 * Visualizza Libreria
 * @param {Array<Object>} libreria - Array contenente gli oggetti libri
*/
export function visualizzaLibreria(libreria)
{
    if (libreria.length===0)
    {
        console.log("La libreria è vuota"); 
    }else

    for (let i=0; i<libreria.length;i++)
    {
        const libro=libreria[i];
        console.log(`\nLibro ${i+1}:`);
        console.log(`Titolo: ${libro.titolo}`);
        console.log(`Autore: ${libro.autore}`);
        console.log(`Genere: ${libro.genere}`);
        console.log(`ISBN: ${libro.isbn}`);
    }
}
export function aggiungiLibro(titolo,autore,genere,isbn)
{
    const nuovoLibro = {titolo, autore, genere, isbn};
    console.log("Libro aggiunto con successo!");
    return nuovoLibro
}

export function rimuoviLibro(libreria, isbn)
{
    let isbnlib = libreria.find(libro => libro.isbn == isbn);
    let i = libreria.findIndex(libro => libro.isbn == isbn);
    if(isbnlib.isbn == isbn){
        libreria.splice(i,1);
        console.log("Libro rimosso con successo!");
    }
    else
        console.log("Libro non trovato");
    console.log(libreria);
}

export const visualizzaLibreria =(libreria)=>{
    console.log(libreria);
}
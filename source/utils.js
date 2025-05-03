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
    if(isbnlib.isbn == isbn)
    {
        libreria.splice(i,1);
        console.log("Libro rimosso con successo!");
    }
    else
        console.log("Libro non trovato");
}

export function visualizzaLibreria(libreria)
{
    if (libreria.length===0)
    {
        console.log("La libreria è vuota");
        return;
    }

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
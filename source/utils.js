let libreria=[];

export function aggiungiLibro(titolo,autore,genere,isbn)
{
    const nuovoLibro = {titolo, autore, genere, isbn};
    libreria.push(nuovoLibro);
    console.log("Libro aggiunto con successo!");
}
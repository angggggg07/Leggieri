import promptSync from 'prompt-sync';
const prompt = promptSync();
import * as f from './utils.js';

let scelta;
let libreria=[];

do{

console.log("\nMenu\n 1-Aggiungi Libro.\n 2-Rimuovi.\n 3-Visualizza libreria. \n 0-Esci");
    scelta=prompt("Inserisci scelta: ");

switch(scelta)
{
    case "1":
        const titolo = prompt("Titolo: ");
        const autore = prompt("Autore: ");
        const genere = prompt("Genere: ");
        const isbn = prompt("ISBN: ");
        if (!titolo || !autore || !genere || !isbn)
        {
            console.log("Tutti i campi sono obbligatori.");
            break;
        }else
        libreria.push(f.aggiungiLibro(titolo,autore,genere,isbn));
        break;

    case "2":
        const isbnRimuovere=prompt("Inserisci l'isbn del libro da rimuovere: ");
        f.rimuoviLibro(libreria,isbnRimuovere);
        break;
    
    case "3":
        f.visualizzaLibreria(libreria);
        break;

    case "0":
        console.log("Sei uscito dal programma!");
        break;

    default:
        console.log("Scelta non valida!");

}
}while(scelta!=0);
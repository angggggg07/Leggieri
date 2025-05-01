import promptSync from 'prompt-sync';
const prompt = promptSync();
import * as f from './utils.js';

let scelta;

do{

console.log("\nMenu\n 1-Aggiungi Libro.\n 2-Rimuovi.\n 3-Visualizza libreria. \n 0-Esci");
    scelta=prompt("Inserisci scelta: ");

switch(scelta)
{
    case "1":
        case "1":
            const titolo = prompt("Titolo: ");
            const autore = prompt("Autore: ");
            const genere = prompt("Genere: ");
            const isbn = prompt("ISBN: ");
            f.aggiungiLibro(titolo, autore, genere, isbn);
        break;

        
    default:
        console.log("Scelta non valida!");

}
}while(scelta!=0);
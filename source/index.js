/**
 * @author Leggieri Angelo <leggieriangelo3@gmail.com>
 */

/**
 * Importa le funzioni dal file utilis.js
 * @module utils
 */

import * as f from './utils.js';

/**
 * Importa il modulo prompt-sync per l'input dell'utente
 * @module prompt-sync 
 */
import promptSync from 'prompt-sync';

/**
 * @type {String} prompt - Dichiarazione prompt per input
 */
const prompt = promptSync();

/**
 * @type {String} scelta - Dichiarazione scelta per menu
 */
let scelta;

/**
 * @type {Array<Object>} libreria - Array contenente gli oggetti libri
 */
let libreria=[];

do{
console.log("\nMenu\n 1-Aggiungi Libro.\n 2-Rimuovi.\n 3-Visualizza libreria. \n 0-Esci");
    scelta=prompt("Inserisci scelta: ");

switch(scelta)
{
    case "1":
        /**
         * @type {String} titolo - Titolo del libro
         */
        const titolo = prompt("Titolo: ");
        /**
         * @type {String} autore - Autore del libro
         */
        const autore = prompt("Autore: ");
        /**
         * @type {String} genere - Genere del libro
         */
        const genere = prompt("Genere: ");
        /**
         * @type {String} isbn - ISBN del libro
         */
        const isbn = prompt("ISBN: ");

        if (!titolo || !autore || !genere || !isbn)
        {
            console.log("Tutti i campi sono obbligatori.");
            break;
        }else
        if(f.controlloISBN(libreria,isbn))
        {
            console.log("ISBN già presente nella libreria!Libro non aggiunto")
        }else
        libreria.push(f.aggiungiLibro(titolo,autore,genere,isbn));
        break;

    case "2":
        /**
         * @type {Number} isbnRimuovere - isbn del libro da rimuovere
         */
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
}while(scelta!=0)
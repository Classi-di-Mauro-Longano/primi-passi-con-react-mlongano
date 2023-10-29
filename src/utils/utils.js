export function findItemByKeyValue ( key, value, array ) {
  const result = array.find( ( item ) => item[ key ] === value );
  return result ? result : value;
}

/* La seguente funzione viene utilizzata per ritardare l'input di ricerca
 + in modo che non venga attivato ad ogni pressione di tasti,
 + ma solo dopo che l'utente ha smesso di digitare per 300ms.
 + L'uso di `...args` consente di passare un numero qualsiasi di argomenti ad una funzione.
 + Questa è una funzione di ordine superiore che restituisce un'altra funzione.
 + La funzione ritornata accetta un numero qualsiasi di argomenti che passerà alla funzione originale.
 + Quando verrà invocata, chiamerà la funzione originale solo dopo 300ms.
 + Se l'utente digita qualcosa prima che siano passati 300ms, la funzione verrà richiamata,
 + il timer verrà cancellato e la funzione originale non verrà chiamata.
 + La funzione restituita da `debounce` può essere chiamata nuovamente come effetto collaterale, ad esempio da un hook `useEffect`.
 + Il meccanismo di cancellazione sfrutta la chiusura ("closure") della funzione `debounce` che mantiene lo stato tra le chiamate.
 */
export const debounce = ( fn ) => {
  let id = null;

  return ( ...args ) => {
    if ( id ) {
      clearTimeout( id );
    }
    id = setTimeout( () => {
      fn( ...args );
      id = null;
    }, 300 );
  };
};
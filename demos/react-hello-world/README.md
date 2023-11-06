# Introduzione a React.js

## Che cos'è React.js?

React.js è una libreria JavaScript per la creazione di interfacce utente. È stata sviluppata da Facebook e viene utilizzata, oltre che da Facebook, anche da Netflix, Airbnb, Instagram e molte altre aziende.

## Perché React.js?

React.js è una libreria non un framework, perché non fornisce un'architettura completa per lo sviluppo di applicazioni web, ma solo un insieme di strumenti per la creazione di interfacce utente. Questo significa che React.js può essere utilizzato in combinazione con altre librerie e framework, come ad esempio Angular.js o Backbone.js.

## Come funziona React.js?

React.js è basato su un'architettura a componenti. Un componente è un elemento che può essere riutilizzato all'interno di un'applicazione. Un componente può essere composto da altri componenti.

## Come si crea un componente?

Un componente React.js è una funzione JavaScript che restituisce un elemento React.js. Un elemento React.js è un oggetto che descrive cosa deve essere visualizzato a schermo. Un elemento React.js può essere creato utilizzando la funzione `React.createElement()`.

```javascript
function HelloWorld() {
  return React.createElement('h1', null, 'Hello World!');
}
```

## Come si visualizza un componente?

Un elemento React.js può essere visualizzato utilizzando la funzione `ReactDOM.render()`. Questa funzione prende in input un elemento React.js e un elemento del DOM e visualizza l'elemento React.js all'interno dell'elemento del DOM.

```javascript
ReactDOM.render(
  React.createElement(HelloWorld, null),
  document.getElementById('root')
);
```

## Come si crea un componente con JSX?

JSX è un'estensione della sintassi di JavaScript che permette di scrivere codice HTML all'interno di un file JavaScript. JSX viene utilizzato per creare elementi React.js.

```javascript
function HelloWorld() {
  return <h1>Hello World!</h1>;
}
```

## Come si visualizza un componente con JSX?

Un elemento React.js creato con JSX può essere visualizzato utilizzando la funzione `ReactDOM.render()`.

```javascript

ReactDOM.render(
  <HelloWorld />,
  document.getElementById('root')
);
```

## Il bundler Parcel
Le applicazioni sviluppate con React devono essere "*transpiled*" in Javascript in modo che il browser possa eseguirle. Uno dei compiti di un bundler è appunto fare questo passo.

Per questi primi esempi utilizzeremo Parcel, un bundler molto semplice da utilizzare.

Per installarlo basta eseguire il comando `npm install -D parcel`.

Per eseguire il codice basta eseguire il comando `npx parcel index.html` nella cartella del progetto.
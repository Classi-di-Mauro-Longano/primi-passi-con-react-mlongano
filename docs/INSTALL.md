## Installazione degli strumenti

### Node.js

Per poter utilizzare React è necessario installare Node.js, che è un ambiente di esecuzione JavaScript basato sul motore V8 di Google Chrome.

Per installare Node.js è necessario scaricare il pacchetto di installazione dal sito ufficiale: https://nodejs.org/en/download/

### Visual Studio Code (opzionale)

Visual Studio Code è un editor di testo gratuito e open source sviluppato da Microsoft.

Per installare Visual Studio Code è necessario scaricare il pacchetto di installazione dal sito ufficiale: https://code.visualstudio.com/download

### Git (obbligatorio per default)

Git è un sistema di controllo versione distribuito, utilizzato per tenere traccia delle modifiche ai file di un progetto.

Per installare Git è necessario scaricare il pacchetto di installazione dal sito ufficiale: https://git-scm.com/downloads

### Vite (opzione scelta per questi esempi)

Vite è un build tool moderno e versatile che assume diverse responsabilità nel flusso di lavoro di sviluppo front-end, semplificando e velocizzando il processo di sviluppo. Ecco come Vite si allinea alle funzioni comuni dei build tool per Node.js:

**Transpilazione**: Vite supporta la transpilazione di JavaScript moderno (ESNext) e TypeScript, permettendo agli sviluppatori di utilizzare le ultime funzionalità del linguaggio senza preoccuparsi della compatibilità con i browser. Fa questo attraverso plugin che si integrano con strumenti come Babel o SWC.

**Bundling**: Durante la fase di sviluppo, Vite non usa il bundling tradizionale grazie al suo approccio che sfrutta i moduli ES nativi. Questo permette un caricamento istantaneo dei moduli. Per la fase di produzione, Vite utilizza Rollup, uno strumento di bundling efficiente e configurabile, per creare bundle ottimizzati pronti per la produzione.

**Minification** e Uglification: In fase di produzione, Vite minifica automaticamente i file JavaScript, CSS, e HTML per ridurne le dimensioni e migliorare i tempi di caricamento. Vite si integra con Terser o altri minificatori per eseguire queste ottimizzazioni.

**Task Running**: Anche se Vite non è un runner di task tradizionale come Gulp o Grunt, offre un potente sistema di plugin che consente di estendere le sue capacità e automatizzare compiti personalizzati durante il processo di sviluppo e costruzione.

**Hot Module Replacement (HMR)**: Vite implementa il Hot Module Replacement (HMR) out-of-the-box, permettendo aggiornamenti in tempo reale dell'applicazione durante lo sviluppo senza bisogno di ricaricare tutta la pagina, mantenendo lo stato dell'app tra un aggiornamento e l'altro.

### SWC (Speedy Web Compiler)

SWC è un compilatore JavaScript e TypeScript che si propone come alternativa più veloce a Babel. Costruito in Rust, SWC compila il codice sfruttando le moderne capacità di multi-threading e ottimizzazione, fornendo tempi di compilazione nettamente ridotti. Supporta le ultime funzionalità di JavaScript e TypeScript e migliora significativamente la velocità di compilazione, specialmente in progetti di grandi dimensioni.

Usando Vite e SWC in tandem, si può creare un ambiente di sviluppo per applicazioni React estremamente reattivo e performante, che rende più piacevole e meno tempo-consuming il ciclo di vita dello sviluppo software.
### Creazione di un nuovo progetto con Vite

Per creare un nuovo progetto React con Vite da terminale digitare il seguente comando:

```bash
npm init vite@latest
```
o in modo equivalente:
```bash
npm create vite@latest
```

se volete creare un progetto nella cartella corrente (vuota) aggiungiete il punto alla fine del comando (percorso della directory corrente), altrimenti vite creerà una nuova cartella con il nome del progetto.

```bash
npm create vite@latest .
? Select a framework: › - Use arrow-keys. Return to submit.
    Vanilla
    Vue
❯   React
    Preact
    Lit
    Svelte
    Solid
    Qwik
    Others
```

Vite può creare progetti con diversi framework, in questo caso scegliamo React.

```bash
✔ Select a framework: › React
? Select a variant: › - Use arrow-keys. Return to submit.
❯   TypeScript
    TypeScript + SWC
    JavaScript
    JavaScript + SWC
```

Typescript è l'opzione attualmente più utilizzata, ma per iniziare scegliamo JavaScript o JavaScript + SWC.

```bash
✔ Select a framework: › React
✔ Select a variant: › JavaScript + SWC

Scaffolding project in <PATH TO YOUR PROJECT>...

Done. Now run:

  cd <PATH TO YOUR PROJECT> (se non avete aggiunto il punto alla fine del comando)
  npm install
  npm run dev
```

## [DEPLOYMENT](DEPLOYMENT.md)
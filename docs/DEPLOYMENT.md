## Deploy
https://github.com/ErickKS/vite-deploy
### Deploy su GitHub Pages

Per fare il deploy di un progetto React su GitHub Pages è necessario installare il pacchetto `gh-pages`:

```bash
npm install gh-pages --save-dev
```

Aggiungere le seguenti righe al file `package.json`:

```json
"homepage": "https://<username>.github.io/<repository-name>",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build",
  "start": "vite",
  "build": "vite build"
}
```

Sostituire `<username>` con il proprio nome utente GitHub e `<repository-name>` con il nome del repository.

Infine, per fare il deploy del progetto su GitHub Pages, digitare il seguente comando:

```bash
npm run deploy
```

### Deploy su Netlify

Per fare il deploy di un progetto React su Netlify è necessario creare un nuovo sito da GitHub.

Dopo aver fatto il login su Netlify, cliccare sul pulsante `New site from Git` e selezionare `GitHub`.

Selezionare il repository che si vuole pubblicare e cliccare sul pulsante `Deploy site`.

### Deploy su Heroku

Per fare il deploy di un progetto React su Heroku è necessario creare un nuovo sito da GitHub.

Dopo aver fatto il login su Heroku, cliccare sul pulsante `New` e selezionare `Create new app`.

Scegliere un nome per il sito e cliccare sul pulsante `Create app`.

Nella sezione `Deployment method` cliccare sul pulsante `GitHub`.

Selezionare il repository che si vuole pubblicare e cliccare sul pulsante `Deploy Branch`.

### Deploy su Firebase

Per fare il deploy di un progetto React su Firebase è necessario installare il pacchetto `firebase-tools`:

```bash

npm install -g firebase-tools
```

Dopo aver fatto il login su Firebase, creare un nuovo progetto.

Dopo aver creato il progetto, cliccare sul pulsante `Web` e dare un nome all'app.

Dopo aver creato l'app, cliccare sul pulsante `</>` per aggiungere Firebase al progetto.

Copiare il codice che viene mostrato e incollarlo nel file `src/index.js` del progetto React.

```javascript

import firebase from 'firebase/app';
import 'firebase/firestore';
```

Aggiungere le seguenti righe al file `package.json`:

```json
"scripts": {
  "start": "vite",
  "build": "vite build",
  "deploy": "firebase deploy"
}
```

Infine, per fare il deploy del progetto su Firebase, digitare il seguente comando:

```bash
npm run deploy
```

### Deploy su Vercel

Per fare il deploy di un progetto React su Vercel è necessario creare un nuovo sito da GitHub.

Dopo aver fatto il login su Vercel, cliccare sul pulsante `New Project` e selezionare `Import Project`.

Selezionare il repository che si vuole pubblicare e cliccare sul pulsante `Continue`.

Selezionare `Framework Preset` e cliccare sul pulsante `Continue`.

Selezionare `Other` e cliccare sul pulsante `Continue`.

Selezionare `npm` e cliccare sul pulsante `Continue`.

Selezionare `yarn build` e cliccare sul pulsante `Continue`.

Selezionare `No` e cliccare sul pulsante `Continue`.

Selezionare `No` e cliccare sul pulsante `Continue`.

Selezionare `No` e cliccare sul pulsante `Continue`.

Selezionare `No` e cliccare sul pulsante `Continue`.

Selezionare `No` e cliccare sul pulsante `Continue`.

Selezionare `No` e cliccare sul pulsante `Continue`.


### Deploy su Render

Per fare il deploy di un progetto React su Render è necessario creare un nuovo sito da GitHub.

Dopo aver fatto il login su Render, cliccare sul pulsante `New` e selezionare `New Web Service`.

Selezionare `GitHub` e cliccare sul pulsante `Continue`.

Selezionare il repository che si vuole pubblicare e cliccare sul pulsante `Continue`.

Selezionare `Static` e cliccare sul pulsante `Continue`.

Selezionare `npm` e cliccare sul pulsante `Continue`.

Selezionare `yarn build` e cliccare sul pulsante `Continue`.

Selezionare `No` e cliccare sul pulsante `Continue`.

Selezionare `No` e cliccare sul pulsante `Continue`.

Selezionare `No` e cliccare sul pulsante `Continue`.

Selezionare `No` e cliccare sul pulsante `Continue`.

Selezionare `No` e cliccare sul pulsante `Continue`.

### Deploy su DigitalOcean

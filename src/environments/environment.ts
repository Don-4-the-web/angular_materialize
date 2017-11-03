// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyC6E4NL2HhNii-8hqv0rxiIzblD39xXALg',
    authDomain: 'businesscontacts-db4c4.firebaseapp.com',
    databaseURL: 'https://businesscontacts-db4c4.firebaseio.com',
    projectId: 'businesscontacts-db4c4',
    storageBucket: 'businesscontacts-db4c4.appspot.com',
    messagingSenderId: '849518049361'
  }
};
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBlqy-VIqZhH4NGnufONydUbWKjNzGbETQ",
    authDomain: "foro-de-opinion.firebaseapp.com",
    databaseURL: "https://foro-de-opinion.firebaseio.com",
    projectId: "foro-de-opinion",
    storageBucket: "foro-de-opinion.appspot.com",
    messagingSenderId: "1015637852698"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
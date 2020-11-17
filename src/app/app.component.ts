import { Component } from '@angular/core';
import firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 constructor() {
    var firebaseConfig = {
    apiKey: "AIzaSyDRJ6nxiSnwAOafZ5RJXBLXtuIJd0MjYWQ",
    authDomain: "bookshelves-2f56c.firebaseapp.com",
    databaseURL: "https://bookshelves-2f56c.firebaseio.com",
    projectId: "bookshelves-2f56c",
    storageBucket: "bookshelves-2f56c.appspot.com",
    messagingSenderId: "528595030101",
    appId: "1:528595030101:web:60dd0260d7298a9ec084dc",
    measurementId: "G-386G475X0Z"
  };

    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
 }
}

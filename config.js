import firebase from 'firebase';
require('@firebase/firestore')

//var firebaseConfig = {
  //apiKey: "AIzaSyAtKM1H6E__pT16_tvDsvSCDu5BGQ27mFE",
  //authDomain: "bookdonations-698b2.firebaseapp.com",
  //projectId: "bookdonations-698b2",
  //storageBucket: "bookdonations-698b2.appspot.com",
  //messagingSenderId: "294192773720",
  //appId: "1:294192773720:web:9597c9484805cf17faa82d"
//};
var firebaseConfig = {
  apiKey: "AIzaSyAFmZAEVK8cMLjklCbPtjp5MdeQVBOCOaY",
  authDomain: "library-21651.firebaseapp.com",
  projectId: "library-21651",
  storageBucket: "library-21651.appspot.com",
  messagingSenderId: "686114170524",
  appId: "1:686114170524:web:83020b23f03a46521aef59"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();

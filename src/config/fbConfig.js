import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/analytics';
import 'firebase/firestore';

const firebaseConfig = {
  //apiKey: .......
  //authDomain: ........

};

firebase.initializeApp(firebaseConfig);
firebase.analytics();


export { firebaseConfig, firebase };
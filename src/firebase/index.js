import { initializeApp } from 'firebase/app';
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCPjYLVnn9c1cxOLtAR18ZNGo_u-R1uLRI',
  authDomain: 'netflix-51728.firebaseapp.com',
  projectId: 'netflix-51728',
  storageBucket: 'netflix-51728.appspot.com',
  messagingSenderId: '631383162788',
  appId: '1:631383162788:web:ad72f31380b2367acecb31',
  measurementId: 'G-6MX74491E7',
};

initializeApp(firebaseConfig);

const storage = { getStorage, ref, uploadBytesResumable, getDownloadURL };

export default storage;

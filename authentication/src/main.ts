import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import { initializeApp } from "firebase/app";
import "bootstrap/dist/js/bootstrap.js"

const firebaseConfig = {
  apiKey: "AIzaSyCy38F_lArHAh_aJV_l4x0bn9dJ_AgIhQI",
  authDomain: "curso-vue-15d9b.firebaseapp.com",
  projectId: "curso-vue-15d9b",
  storageBucket: "curso-vue-15d9b.appspot.com",
  messagingSenderId: "485511678730",
  appId: "1:485511678730:web:daa656e37cee541cf6c8f3",
  measurementId: "G-WRTQ0FV4SN"
};

// Initialize Firebase
initializeApp(firebaseConfig);
createApp(App).use(router).mount('#app')

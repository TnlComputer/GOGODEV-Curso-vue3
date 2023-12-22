import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import { initializeApp } from "firebase/app";
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
import "bootstrap/dist/js/bootstrap.js"
import Emitter from 'tiny-emitter';
import VueCookies from 'vue-cookies';
import VueSession from 'vue-session';

Amplify.configure(awsExports)

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

const app = createApp(App);

app.config.globalProperties.$msalInstance = {}
app.config.globalProperties.$emitter = new Emitter.TinyEmitter()

app.use(router)
.use(VueCookies, {expires: '1d'})
.use(VueSession).mount('#app')

// app.use(router).use(VueCookies, {
//   expires: '1d',
//   path: '/',
//   domain: '',
//   secure: '',
//   sameSite: ''
// }).mount('#app')


// para guarda las cookies
// $cookies.set('auth', 1000, expires, path, domain, secure, sameSite)

// recuperar las cookies
// $cookies.get('auth')

// borrar las cookies
// $cookies.remove('auth')

// Si existe la cookies con esa clave
// $cookies.isKey('auth')

// para sabes las cookies que hay
// $cookies.keys('auth')


// Iniciar session
// $session_start()

// guardo la session
// $session_set('auth', 1000)

// leo la session
// $session_get('auth')

//  id de la session que utilizo
// $session_id()

// renueva la session
// $session_renew()

// elimina la session
// $session_destroy()
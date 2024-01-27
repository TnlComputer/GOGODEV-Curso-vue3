<template>
  <div class="container">
    <h1>Social Login</h1>
    <button @click='loginGoogle'>Login with Google</button>
    <button @click='loginFacebook'>Login with Facebook</button>
    <button @click='loginTwitter'>Login with Twitter</button>
    <button @click='loginGithub'>Login with Github</button>

  </div>
</template>

<script lang="ts" setup>
import { GithubAuthProvider, TwitterAuthProvider, FacebookAuthProvider, GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth'

const auth = getAuth()
const googleProvider = new GoogleAuthProvider()
const facebookProvider = new FacebookAuthProvider()
const twitterProvider = new TwitterAuthProvider()
const githubProvider = new GithubAuthProvider()

const loginGoogle = () => {
  signInWithPopup(auth, googleProvider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result)
      const token = credential?.accessToken;
      console.log(token)
      alert('Login Correcto!')
    })
    .catch((error) => {
      alert('Login incorrecto ' + error.message)
    })
}
const loginFacebook = () => {
  signInWithPopup(auth, facebookProvider)
    .then((result) => {
      const credential = FacebookAuthProvider.credentialFromResult(result)
      const token = credential?.accessToken;
      console.log(token)
      alert('Login Correcto!')
    })
    .catch((error) => {
      alert('Login incorrecto ' + error.message)
    })
}
const loginTwitter = () => {
  signInWithPopup(auth, twitterProvider)
    .then((result) => {
      const credential = TwitterAuthProvider.credentialFromResult(result)
      const token = credential?.accessToken;
      console.log(token)
      alert('Login Correcto!')
    })
    .catch((error) => {
      alert('Login incorrecto ' + error.message)
    })

}

const loginGithub = () => {
  signInWithPopup(auth, githubProvider)
    .then((result) => {
      const credential = GithubAuthProvider.credentialFromResult(result)
      const token = credential?.accessToken;
      console.log(token)
      alert('Login Correcto!')
    })
    .catch((error) => {
      alert('Login incorrecto ' + error.message)
    })

}

</script>

<style>
.container {
  width: 400px;
}
</style>
<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

</script>

<template>
  <header>
<!--    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="50" height="50" />-->


<!--      <HelloWorld msg="You did it!" />-->

<!--      <nav>-->
<!--&lt;!&ndash;        <RouterLink to="/">Home</RouterLink>&ndash;&gt;-->
<!--        <RouterLink to="/about">About</RouterLink>-->
<!--        <RouterLink to="/users">Users</RouterLink>-->
<!--      </nav>-->
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
      <div class="container">
        <a class="navbar-brand" href="#">CONTACT MANAGER</a>
        <RouterLink to="/about" class="nav-link" style="color: darkgrey">Home</RouterLink>
        <RouterLink to="/users" class="nav-link" style="color: darkgrey">Contacts</RouterLink>
        <RouterLink to="/login" class="nav-link" style="color: darkgrey">Login</RouterLink>
        <RouterLink to="/logout" class="nav-link" style="color: darkgrey">Logout</RouterLink>
      </div>
    </nav>

  </header>
  <RouterView />
</template>

<style>


</style>
<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <nav class="navbar bg-dark">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img src="@/assets/logo-eisi-lion.jpg" alt="Logo" width="40" height="34" class="d-inline-block align-text-top">
         <span class="text-white ms-3">EISI</span>
      </a>
      <div class="col-md-3">
        <ul class="nav ">
        <router-link to="/" class="btn btn-outline-warning">Home</router-link>
        <router-link to="/logs" class="btn btn-outline-warning ms-2">Logs</router-link>
        <li class="nav-item dropdown ms-2">
          <a class="nav-link dropdown-toggle btn btn-outline-warning" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Dropdown</a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Separated link</a></li>
          </ul>
        </li>
      </ul>
      </div>
    </div>
  </nav>

  <RouterView class="mt-3 container" />
</template>

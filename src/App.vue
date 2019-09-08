<template>
  <div id="app">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item">
          NISB DASH
        </a>
      </div>
      <div class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item"><router-link to="/events">Events </router-link></a>
          <a class="navbar-item"><router-link to="/members">Members </router-link></a> 
          <a class="navbar-item"><router-link to="/notices">Notices </router-link></a>
        </div>
      </div>
    </nav>
    <div class="main-container">
      <router-view />
    </div>
    
  </div>
</template>

<script>
export default {
  name: "app"
}
</script>


<style>
.main-container {
  padding: 20px;
}
html,
body {
  position: absolute;
  background: #eee;
  min-height: 100% !important;
  width: 100%;
}
</style>

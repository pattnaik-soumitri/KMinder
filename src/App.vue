<script setup>
import { deepClone } from './util/Util';
import { onMounted } from 'vue';
import { auth } from '../fb';
import { onAuthStateChanged } from 'firebase/auth';
import { useSessionStore } from './stores/session';
const { isLoggedIn, loginData } = useSessionStore();


// Auto login
onMounted(() => {
  onAuthStateChanged(auth, (user) => {
    loginData.user = deepClone(user);
  });
});

</script>

<template>

  <div class="container">
    <header>
        <nav>
          <!-- BRAND -->
          <ul>
            <li><router-link to="/"><strong>KMinder</strong></router-link></li>
          </ul>

          <!-- NAVS -->
          <ul>
            <li><router-link to="about">About</router-link></li>
            <li v-if="!isLoggedIn"><router-link to="login" role="button">Login</router-link></li>
          </ul>
        </nav>
    </header>
    
    <!-- CONTENT -->
    <main>
      <RouterView />
    </main>
    
    <!-- FOOTER -->
    <footer></footer>
  </div>

</template>

<style scoped>
header {
  border-bottom: solid grey 1px;
}
</style>
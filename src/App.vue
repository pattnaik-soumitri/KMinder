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
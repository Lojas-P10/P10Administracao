<script>
import 'boxicons'
export default {  }
</script>
<template>
  <div class="app-body-navigation">
    <nav class="navigation">
      <a href="#">
        <i class="ph-browsers"></i>
        <span>Dashboard</span>
      </a>
      <a href="#">
        <i class="ph-check-square"></i>
        <span>Scheduled</span>
      </a>
      <a href="#">
        <i class="ph-swap"></i>
        <span>Transfers</span>
      </a>
      <a href="#">
        <i class="ph-file-text"></i>
        <span>Templates</span>
      </a>
      <a href="#">
        <i class="ph-globe"></i>
        <span>SWIFT</span>
      </a>
      <a href="#">
        <i class="ph-clipboard-text"></i>
        <span>Exchange</span>
      </a>
    </nav>
    <footer class="footer">
      <h1>Almeria<small>©</small></h1>
      <div>
        Almeria ©<br />
        All Rights Reserved 2021
      </div>
    </footer>
  </div>
</template>
<style scoped>
.app-body-navigation {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
@media (max-width: 1200px) {
  .app-body-navigation {
    display: none;
  }
}
.navigation {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: var(--c-text-tertiary);
}
.navigation a {
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: 0.25s ease;
}
.navigation a * {
  transition: 0.25s ease;
}
.navigation a i {
  margin-right: 0.75rem;
  font-size: 1.25em;
  flex-shrink: 0;
}
.navigation a + a {
  margin-top: 1.25rem;
}
.navigation a:hover, .navigation a:focus {
  transform: translateX(4px);
  color: var(--c-text-primary);
}
.footer {
  margin-top: auto;
}
.footer h1 {
  font-size: 1.5rem;
  line-height: 1.125;
  display: flex;
  align-items: flex-start;
}
.footer h1 small {
  font-size: 0.5em;
  margin-left: 0.25em;
}
.footer div {
  border-top: 1px solid var(--c-gray-600);
  margin-top: 1.5rem;
  padding-top: 1rem;
  font-size: 0.75rem;
  color: var(--c-text-tertiary);
}
</style>

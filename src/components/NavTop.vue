<script>
export default {}
</script>

<template>
  <header class="app-header">
    <div class="app-header-logo">
      <div class="logo">
        <span class="logo-icon">
          <img src="https://assets.codepen.io/285131/almeria-logo.svg" />
        </span>
        <h1 class="logo-title">
          <span>Almeria</span>
          <span>NeoBank</span>
        </h1>
      </div>
    </div>
    <div class="app-header-navigation">
      <div class="tabs">
        <a href="#"> Overview </a>
        <a href="#" class="active"> Payments </a>
        <a href="#"> Cards </a>
        <a href="#"> Account </a>
        <a href="#"> System </a>
        <a href="#"> Business </a>
      </div>
    </div>
    <div class="app-header-actions">
      <button class="user-profile">
        <span>Matheo Peterson</span>
        <span>
          <img src="https://assets.codepen.io/285131/almeria-avatar.jpeg" />
        </span>
      </button>
      <div class="app-header-actions-buttons">
        <button class="icon-button large">
          <i class="ph-magnifying-glass"></i>
        </button>
        <button class="icon-button large">
          <i class="ph-bell"></i>
        </button>
      </div>
    </div>
    <div class="app-header-mobile">
      <button class="icon-button large">
        <i class="ph-list"></i>
      </button>
    </div>
  </header>
</template>

<style scoped>
.app-header {
  display: grid;
  grid-template-columns: minmax(-webkit-min-content, 175px) minmax(-webkit-max-content, 1fr) minmax(-webkit-max-content, 400px);
  grid-template-columns: minmax(min-content, 175px) minmax(max-content, 1fr) minmax(max-content, 400px);
  -moz-column-gap: 4rem;
       column-gap: 4rem;
  align-items: flex-end;
}
@media (max-width: 1200px) {
  .app-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid var(--c-gray-600);
  }
}

@media (max-width: 1200px) {
  .app-header-navigation {
    display: none;
  }
}

.app-header-actions {
  display: flex;
  align-items: center;
}
@media (max-width: 1200px) {
  .app-header-actions {
    display: none;
  }
}

.app-header-actions-buttons {
  display: flex;
  border-left: 1px solid var(--c-gray-600);
  margin-left: 2rem;
  padding-left: 2rem;
}
.app-header-actions-buttons > * + * {
  margin-left: 1rem;
}

.app-header-mobile {
  display: none;
}
@media (max-width: 1200px) {
  .app-header-mobile {
    display: flex;
  }
}

</style>

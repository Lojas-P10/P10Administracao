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

.tabs {
  display: flex;
  justify-content: space-between;
  color: var(--c-text-tertiary);
  border-bottom: 1px solid var(--c-gray-600);
}
.tabs a {
  padding-top: 1rem;
  padding-bottom: 1rem;
  text-decoration: none;
  border-top: 2px solid transparent;
  display: inline-flex;
  transition: 0.25s ease;
}
.tabs a.active, .tabs a:hover, .tabs a:focus {
  color: var(--c-text-primary);
  border-color: var(--c-text-primary);
}

.user-profile {
  display: flex;
  align-items: center;
  border: 0;
  background: transparent;
  cursor: pointer;
  color: var(--c-text-tertiary);
  transition: 0.25s ease;
}
.user-profile:hover, .user-profile:focus {
  color: var(--c-text-primary);
}
.user-profile:hover span:last-child, .user-profile:focus span:last-child {
  box-shadow: 0 0 0 4px var(--c-gray-800), 0 0 0 5px var(--c-text-tertiary);
}
.user-profile span:first-child {
  display: flex;
  font-size: 1.125rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--c-gray-600);
  font-weight: 300;
}
.user-profile span:last-child {
  transition: 0.25s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  overflow: hidden;
  margin-left: 1.5rem;
  flex-shrink: 0;
}

.icon-button {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 0;
  background-color: transparent;
  border: 1px solid var(--c-gray-500);
  color: var(--c-text-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.25s ease;
  flex-shrink: 0;
}
.icon-button.large {
  width: 42px;
  height: 42px;
  font-size: 1.25em;
}
.icon-button i {
  transition: 0.25s ease;
}
.icon-button:hover, .icon-button:focus {
  background-color: var(--c-gray-600);
  box-shadow: 0 0 0 4px var(--c-gray-800), 0 0 0 5px var(--c-text-tertiary);
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
.logo {
  display: flex;
  align-items: center;
  padding-bottom: 1rem;
  padding-top: 1rem;
  border-bottom: 1px solid var(--c-gray-600);
}
@media (max-width: 1200px) {
  .logo {
    border-bottom: 0;
  }
}

.logo-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
}

.logo-title {
  display: flex;
  flex-direction: column;
  line-height: 1.25;
  margin-left: 0.75rem;
}
.logo-title span:first-child {
  color: var(--c-text-primary);
}
.logo-title span:last-child {
  color: var(--c-text-tertiary);
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

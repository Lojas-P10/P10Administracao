<script>
export default {}
</script>

<template>
  <header>
    <div class="p10-logo">
      <RouterLink to="/">
        <img src="/public/logo/LojasP10/logo-menor.png" />
      </RouterLink>
    </div>
    <div class="app-header-actions">
      <button class="user-profile">
        <span>Eduardo da Silva</span>
        <span>
          <img class="user-image" src="https://avatars.githubusercontent.com/u/48130339?v=4" />
        </span>
      </button>
    </div>
  </header>
</template>

<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
@media (max-width: 1200px) {
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid var(--c-gray-600);
  }
}

@media (max-width: 1200px) {
  .navegacao {
    display: none;
  }
}
.p10-logo img {
  width: 6em;
}

.user-image {
  border-radius: 10px;
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
.user-profile:hover,
.user-profile:focus {
  color: var(--c-text-primary);
}
.user-profile:hover span:last-child,
.user-profile:focus span:last-child {
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
  border-radius: 10px;
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
.icon-button:hover,
.icon-button:focus {
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
@media (max-width: 1200px) {
  .logo {
    border-bottom: 0;
  }
}

.buttons {
  display: flex;
  border-left: 1px solid var(--c-gray-600);
  margin-left: 2rem;
  padding-left: 2rem;
}
.buttons > * + * {
  margin-left: 1rem;
}
</style>

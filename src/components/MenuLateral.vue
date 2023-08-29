<script setup>
import 'boxicons'
</script>
<template>
  <nav>
    <div class="routes">
      <RouterLink to="/dashboard/produtos">
        <i class="ph-browsers"></i>
        <span>Dashboard</span>
      </RouterLink>

      <div class="sec-center">
        <input class="dropdown" type="checkbox" id="dropdown" name="dropdown" />
        <label class="for-dropdown" for="dropdown">
          <i class="ph-table"></i> <span>Relatórios</span></label
        >
        <div class="section-dropdown">
          <input class="dropdown-sub" type="checkbox" id="dropdown-sub" name="dropdown-sub" />
          <label class="for-dropdown" for="dropdown-sub"
            >Produtos <i class="uil uil-plus"></i
          ></label>
          <div class="section-dropdown-sub">
            <a href="#">a <i class="uil uil-arrow-right"></i></a>
            <a href="#">b <i class="uil uil-arrow-right"></i></a>
          </div>
          <a href="#">Dropdown Link <i class="uil uil-arrow-right"></i></a>
          <a href="#">Dropdown Link <i class="uil uil-arrow-right"></i></a>
          <a href="#">Dropdown Link <i class="uil uil-arrow-right"></i></a>
        </div>
      </div>
      <!--       <RouterLink to="/categorias">
        <i class="ph-table"></i>
        <span>Relatórios</span>
      </RouterLink> -->
    </div>
    <footer class="footer">
      <h1>Lojas P10<small>©</small></h1>
      <div>geosgrafia (Alter ego de geovana horodeski) ©<br /></div>
    </footer>
  </nav>
</template>
<style scoped>
nav {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 70vh;
}
@media (max-width: 1200px) {
  nav {
    display: none;
  }
}
.sec-center {
  position: relative;
  max-width: 100%;
  text-align: center;
  z-index: 200;
}
[type='checkbox']:checked,
[type='checkbox']:not(:checked) {
  position: absolute;
  left: -9999px;
  opacity: 0;
  pointer-events: none;
}
.dropdown:checked + label,
.dropdown:not(:checked) + label {
  position: relative;
  line-height: 2;
  height: 50px;
  transition: all 200ms linear;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-align-items: center;
  -moz-align-items: center;
  -ms-align-items: center;
  align-items: center;
  -webkit-justify-content: center;
  -moz-justify-content: center;
  -ms-justify-content: center;
  justify-content: center;
  -ms-flex-pack: center;
  text-align: center;
  border: none;
  cursor: pointer;
}
.dropdown:checked + label:before,
.dropdown:not(:checked) + label:before {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  cursor: auto;
  pointer-events: none;
}
.dropdown:checked + label:before {
  pointer-events: auto;
}
.dropdown:not(:checked) + label .uil {
  font-size: 24px;
  margin-left: 10px;
  transition: transform 200ms linear;
}
.dropdown:checked + label .uil {
  transform: rotate(180deg);
  font-size: 24px;
  margin-left: 10px;
  transition: transform 200ms linear;
}
.section-dropdown {
  position: absolute;
  padding: 5px;
  left: 0;
  display: block;
  z-index: 2;
  opacity: 0;
  pointer-events: none;
  transform: translateY(-20px);
  transition: all 200ms linear;
}
.dropdown:checked ~ .section-dropdown {
  opacity: 1;
  pointer-events: auto;
  transform: translateY(0);
}


.section-dropdown-sub {
  position: relative;
  display: block;
  width: 100%;
  pointer-events: none;
  opacity: 0;
  max-height: 0;
  padding-left: 10px;
  padding-right: 3px;
  overflow: hidden;
  transition: all 200ms linear;
}
.dropdown-sub:checked ~ .section-dropdown-sub {
  pointer-events: auto;
  opacity: 1;
  max-height: 999px;
}
.section-dropdown-sub a {
  font-size: 14px;
}
.section-dropdown-sub a .uil {
  font-size: 20px;
}

.routes {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: var(--c-text-tertiary);
}
.routes a {
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: 0.25s ease;
}
.routes a * {
  transition: 0.25s ease;
}
.routes i {
  margin-right: 0.75rem;
  font-size: 1.25em;
  flex-shrink: 0;
}
.routes a + a {
  margin-top: 1.25rem;
}
.routes a:hover,
.routes a:focus {
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

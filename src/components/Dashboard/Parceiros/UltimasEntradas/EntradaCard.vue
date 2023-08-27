<script setup></script>

<template>
  <div class="card">
    <div class="logo">
      <img src="https://assets.codepen.io/285131/apple.svg" />
    </div>
    <dl class="desc">
      <div>
        <dt>Apple Inc.</dt>
        <dd>Apple ID Payment</dd>
      </div>
      <dt>28 Jul. 23</dt>
      <dt>R$268,05</dt>
    </dl>
    <div class="unid">+300 Und.</div>
  </div>
</template>

<style scoped>
.card {
  display: flex;
  align-items: center;
  width: 100%;
  font-size: 0.875rem;
}
@media (max-width: 1000px) {
  .card {
    align-items: flex-start;
    flex-direction: column;
  }
}
.card + * {
  margin-top: 2rem;
}

.logo {
  background-color: var(--c-gray-200);
  border-radius: 4px;
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.logo img {
  width: 45%;
}

.desc {
  margin-left: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
}
@media (max-width: 1000px) {
  .desc {
    flex-wrap: wrap;
    margin-left: 0;
    margin-top: 1rem;
  }
}
.desc div {
  width: calc(100% / 3 - 1rem);
}
@media (max-width: 1000px) {
  .desc div {
    width: 100%;
  }
}
.desc div + div {
  margin-left: 1rem;
}
@media (max-width: 1000px) {
  .desc div + div {
    margin-left: 0;
    margin-top: 1rem;
  }
}
.desc dd {
  color: var(--c-text-tertiary);
  margin-top: 2px;
}

.unid {
  margin-left: 2rem;
  font-size: 1.125rem;
  flex-shrink: 0;
  width: 15%;
  display: flex;
  justify-content: flex-end;
}
@media (max-width: 1000px) {
  .unid {
    margin-left: 0;
    margin-top: 1.25rem;
    width: 100%;
    justify-content: flex-start;
  }
}
</style>

<template>
  <div class="xyz-in" xyz="down duration-10 ease-in-out-back">
    <div class="phone xyz-in" xyz="fade down big rotate-right-45">
      <div class="square-group" xyz="fade left stagger-1">
        <div class="xyz-in square"></div>
        <div class="xyz-in square"></div>
        <div class="xyz-in square"></div>
        <div class="xyz-in square"></div>
      </div>

      <div class="group" xyz="fade left stagger-1">
        <div class="skeleton-title xyz-in"></div>
        <div class="skeleton-title2 xyz-in"></div>
      </div>

      <div class="circle-group" xyz="fade left stagger-1">
        <div class="xyz-in square"></div>
        <div class="xyz-in square"></div>
        <div class="xyz-in square"></div>
        <div class="xyz-in square"></div>
        <div class="xyz-in square"></div>
        <div class="xyz-in square"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
:root {
  --xyz-ease: cubic-bezier(0.26, 2.05, 0.84, 0.38);
}

* {
  transition: 0.25s ease;
}
.phone {
  background: white;
  padding: 1.5em;
  border-radius: 2em;
  position: relative;
  transform: rotateZ(6deg);
  box-shadow: 10px 11px 0px rgba(0, 0, 0, 0.1);

  &:before {
    content: ' ';
    position: absolute;
    background-color: var(--c-blue-500);
    border-radius: 1em;
    padding: 0.5em;
    width: 33%;
    top: -5px;
    left: 30%;
  }
  &:hover {
    transform: rotateZ(0deg);
    box-shadow: 0px 9px 0px rgba(0, 0, 0, 0.1);
  }
}

.square-group {
  display: grid;
  grid-template-areas:
    'square square'
    'square square';

  .square {
    padding: 3em;
    margin: 0.6em;
    border-radius: 0.8em;
    overflow: hidden;
    background-color: var(--c-blue-500);
  }
  .square:hover {
    outline: 2px solid var(--c-blue-600);
    background-color: var(--c-blue-600);

  }
}

.skeleton-title,
.skeleton-title2 {
  padding: 0.6em;
  margin: 1em 0.3em;
  border-radius: 0.8em;
  background-color: var(--c-blue-500);
}
.skeleton-title2 {
  width: 60%;
}

.circle-group {
  display: grid;
  grid-template-areas:
    'circle circle circle'
    'circle circle circle';

  .square {
    padding: 2em;
    margin: 0.6em;
    border-radius: 50%;
    background-color: var(--c-blue-500);
  }
  .square:hover {
    outline: 2px solid var(--c-green-600);
    background-color: var(--c-green-600);

  }
}
</style>

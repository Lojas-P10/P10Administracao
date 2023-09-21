<script setup>

</script>
<template>
    <h2>Filtrar</h2>
    <form class="filter">
        <div>
            <label>Filtrar por produto</label>
            <input type="" />
        </div>
        <!--Data inicio e fim-->
        <div class="dropdown">
            <label for="">Dias da semana</label>
            <select class="dropdown-select">
                <option value="">Dias da semana</option>
                <option value="1">Option #1</option>
                <option value="2">Option #2</option>
                <option value="3">Option #3</option>
            </select>
        </div>
        <div class="dropdown">
            <select class="dropdown-select">
                <option value="">Couleur</option>
                <option value="1">Option #1</option>
                <option value="2">Option #2</option>
                <option value="3">Option #3</option>
            </select>
        </div>
        <div class="dropdown">
            <select class="dropdown-select">
                <option value="">Forme</option>
                <option value="1">Option #1</option>
                <option value="2">Option #2</option>
                <option value="3">Option #3</option>
            </select>
        </div>
        <div class="dropdown">
            <select class="dropdown-select">
                <option value="">Matière</option>
                <option value="1">Option #1</option>
                <option value="2">Option #2</option>
                <option value="3">Option #3</option>
            </select>
        </div>
        <div class="sub-main">
            <button class="button-two"><span>Buscar</span></button>
        </div>

    </form>
</template>


<style scoped>
.filter {
    display: flex;
    align-items: center;
    flex-direction: column;
}

.dropdown {
    display: inline-block;
    position: relative;
    overflow: hidden;
    height: 28px;
    width: 100%;
    background: #f2f2f2;
    border: 1px solid;
    border-color: white #f7f7f7 whitesmoke;
    border-radius: 3px;
}

.dropdown:before,
.dropdown:after {
    content: '';
    position: absolute;
    z-index: 2;
    top: 9px;
    right: 10px;
    width: 0;
    height: 0;
    border: 4px dashed;
    border-color: #888888 transparent;
    pointer-events: none;
}

.dropdown:before {
    border-bottom-style: solid;
    border-top: none;
}

.dropdown:after {
    margin-top: 7px;
    border-top-style: solid;
    border-bottom: none;
}

.dropdown-select {
    position: relative;
    width: 100%;
    margin: 0;
    padding: 6px 8px 6px 10px;
    height: 28px;
    line-height: 14px;
    font-size: 12px;
    color: #62717a;
    text-shadow: 0 1px white;
    background: #f2f2f2;
    /* Fallback for IE 8 */
    background: rgba(0, 0, 0, 0) !important;
    /* "transparent" doesn't work with Opera */
    border: 0;
    border-radius: 0;
    -webkit-appearance: none;
}

.dropdown-select:focus {
    z-index: 3;
    width: 100%;
    color: #394349;
    outline: 2px solid #49aff2;
    outline: 2px solid -webkit-focus-ring-color;
    outline-offset: -2px;
}

.dropdown-select>option {
    margin: 3px;
    padding: 6px 8px;
    text-shadow: none;
    background: #f2f2f2;
    border-radius: 3px;
    cursor: pointer;
}

.sub-main {}

.button-two {
    text-align: center;
    cursor: pointer;
    font-size: 14px;
    margin: 0 0 0 20px;
    color: white;
}

.button-two {
    border-radius: 2px;
    background-color: #5aed83;
    border: none;
    padding: 5px;
    transition: all 0.5s;
}

.button-two span {
    cursor: pointer;
    display: inline-block;
    position: relative;
    transition: 0.5s;
}

.button-two span:after {
    content: '»';
    position: absolute;
    opacity: 0;
    top: 0;
    right: -20px;
    transition: 0.5s;
}

.button-two:hover span {
    padding-right: 25px;
}

.button-two:hover span:after {
    opacity: 1;
    right: 0;
}
</style>
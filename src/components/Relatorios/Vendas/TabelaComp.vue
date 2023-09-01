<script setup></script>

<template>
    <div class="table">
        <div class="table-header">
            <div class="header__item"><a id="name" >Última venda</a></div>
            <div class="header__item"><a id="draws">Categoria</a></div>
            <!--ideia: Brinquedos(bonecas)-->
            <div class="header__item"><a id="wins">Produto</a></div>
            <div class="header__item"><a id="losses">Fornecedor</a></div>
            <div class="header__item"><a id="total">Qtde.</a></div>
            <div class="header__item"><a id="total">filial</a></div>
            <div class="header__item"><a id="total">Venda Total</a></div>
            <div class="header__item"><a id="total">Frete</a></div>
            <div class="header__item"><a id="total">Lucro Total</a></div>
        </div>
        <div class="table-content">
            <div class="table-row">
                <div class="table-data">Tom</div>
                <div class="table-data">2</div>
                <div class="table-data">0</div>
                <div class="table-data">1</div>
                <div class="table-data">5</div>
            </div>
            <div class="table-row">
                <div class="table-data">Dick</div>
                <div class="table-data">1</div>
                <div class="table-data">1</div>
                <div class="table-data">2</div>
                <div class="table-data">3</div>
            </div>
            <div class="table-row">
                <div class="table-data">Harry</div>
                <div class="table-data">0</div>
                <div class="table-data">2</div>
                <div class="table-data">2</div>
                <div class="table-data">2</div>
            </div>
        </div>
    </div>
</template>

<style scoped>

:root {
  --base-spacing-unit: 24px;
  --half-spacing-unit: calc(var(--base-spacing-unit) / 2);
  --color-alpha: #1772FF;
  --color-form-highlight: #EEEEEE;
}



.table {
  width: 100%;
  border: 1px solid var(--color-form-highlight);
}

.table-header {
  display: flex;
  width: 100%;
  background: #000;
  padding: calc(var(--half-spacing-unit) * 1.5) 0;
}

.table-row {
  display: flex;
  width: 100%;
  padding: calc(var(--half-spacing-unit) * 1.5) 0;
}

.table-row:nth-of-type(odd) {
  background: var(--color-form-highlight);
}

.table-data,
.header__item {
  flex: 1 1 20%;
  text-align: center;
}

.header__item {
  text-transform: uppercase;
}

.filter__link {
  color: white;
  text-decoration: none;
  position: relative;
  display: inline-block;
  padding-left: var(--base-spacing-unit);
  padding-right: var(--base-spacing-unit);
}

.filter__link::after {
  content: '';
  position: absolute;
  right: calc(-1 * var(--half-spacing-unit) * 1.5);
  color: white;
  font-size: var(--half-spacing-unit);
  top: 50%;
  transform: translateY(-50%);
}

.filter__link.desc::after {
  content: '(desc)';
}

.filter__link.asc::after {
  content: '(asc)';
}
</style>
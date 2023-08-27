<script setup></script>

<template>
  <div class="app-body-main-content">
    <section class="service-section">
      <h2>Service</h2>
      <div class="service-section-header">
        <div class="search-field">
          <i class="ph-magnifying-glass"></i>
          <input type="text" placeholder="Account number" />
        </div>
        <div class="dropdown-field">
          <select>
            <option>Home</option>
            <option>Work</option>
          </select>
          <i class="ph-caret-down"></i>
        </div>
        <button class="flat-button">Search</button>
      </div>
      <div class="mobile-only">
        <button class="flat-button">Toggle search</button>
      </div>
      <div class="tiles">
        <article class="tile">
          <div class="tile-header">
            <i class="ph-lightning-light"></i>
            <h3>
              <span>Electricity</span>
              <span>UrkEnergo LTD.</span>
            </h3>
          </div>
          <a href="#">
            <span>Go to service</span>
            <span class="icon-button">
              <i class="ph-caret-right-bold"></i>
            </span>
          </a>
        </article>
        <article class="tile">
          <div class="tile-header">
            <i class="ph-fire-simple-light"></i>
            <h3>
              <span>Heating Gas</span>
              <span>Gazprom UA</span>
            </h3>
          </div>
          <a href="#">
            <span>Go to service</span>
            <span class="icon-button">
              <i class="ph-caret-right-bold"></i>
            </span>
          </a>
        </article>
        <article class="tile">
          <div class="tile-header">
            <i class="ph-file-light"></i>
            <h3>
              <span>Tax online</span>
              <span>Kharkov 62 str.</span>
            </h3>
          </div>
          <a href="#">
            <span>Go to service</span>
            <span class="icon-button">
              <i class="ph-caret-right-bold"></i>
            </span>
          </a>
        </article>
      </div>
      <div class="service-section-footer">
        <p>Services are paid according to the current state of the currency and tariff.</p>
      </div>
    </section>
    <section class="transfer-section">
      <div class="transfer-section-header">
        <h2>Latest transfers</h2>
        <div class="filter-options">
          <p>Filter selected: more than 100 $</p>
          <button class="icon-button">
            <i class="ph-funnel"></i>
          </button>
          <button class="icon-button">
            <i class="ph-plus"></i>
          </button>
        </div>
      </div>
      <div class="transfers">
        <div class="transfer">
          <div class="transfer-logo">
            <img src="https://assets.codepen.io/285131/apple.svg" />
          </div>
          <dl class="transfer-details">
            <div>
              <dt>Apple Inc.</dt>
              <dd>Apple ID Payment</dd>
            </div>
            <div>
              <dt>4012</dt>
              <dd>Last four digits</dd>
            </div>
            <div>
              <dt>28 Oct. 21</dt>
              <dd>Date payment</dd>
            </div>
          </dl>
          <div class="transfer-number">- $ 550</div>
        </div>
        <div class="transfer">
          <div class="transfer-logo">
            <img src="https://assets.codepen.io/285131/pinterest.svg" />
          </div>
          <dl class="transfer-details">
            <div>
              <dt>Pinterest</dt>
              <dd>2 year subscription</dd>
            </div>
            <div>
              <dt>5214</dt>
              <dd>Last four digits</dd>
            </div>
            <div>
              <dt>26 Oct. 21</dt>
              <dd>Date payment</dd>
            </div>
          </dl>
          <div class="transfer-number">- $ 120</div>
        </div>
        <div class="transfer">
          <div class="transfer-logo">
            <img src="https://assets.codepen.io/285131/warner-bros.svg" />
          </div>
          <dl class="transfer-details">
            <div>
              <dt>Warner Bros.</dt>
              <dd>Cinema</dd>
            </div>
            <div>
              <dt>2228</dt>
              <dd>Last four digits</dd>
            </div>
            <div>
              <dt>22 Oct. 21</dt>
              <dd>Date payment</dd>
            </div>
          </dl>
          <div class="transfer-number">- $ 70</div>
        </div>
      </div>
    </section>
  </div>
  <div class="app-body-sidebar">
    <section class="payment-section">
      <h2>New Payment</h2>
      <div class="payment-section-header">
        <p>Choose a card to transfer money</p>
        <div>
          <button class="card-button mastercard">
            <svg
              width="2001"
              height="1237"
              viewBox="0 0 2001 1237"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="a624784f2834e21c94a1c0c9a58bbbaa">
                <path
                  id="7869b07bea546aa59a5ee138adbcfd5a"
                  d="M1270.57 1104.15H729.71V132.15H1270.58L1270.57 1104.15Z"
                  fill="currentColor"
                ></path>
                <path
                  id="b54e3ab4d7044a9f288082bc6b864ae6"
                  d="M764 618.17C764 421 856.32 245.36 1000.08 132.17C891.261 46.3647 756.669 -0.204758 618.09 9.6031e-07C276.72 9.6031e-07 0 276.76 0 618.17C0 959.58 276.72 1236.34 618.09 1236.34C756.672 1236.55 891.268 1189.98 1000.09 1104.17C856.34 991 764 815.35 764 618.17Z"
                  fill="currentColor"
                ></path>
                <path
                  id="67f94b4d1b83252a6619ed6e0cc0a3a1"
                  d="M2000.25 618.17C2000.25 959.58 1723.53 1236.34 1382.16 1236.34C1243.56 1236.54 1108.95 1189.97 1000.11 1104.17C1143.91 990.98 1236.23 815.35 1236.23 618.17C1236.23 420.99 1143.91 245.36 1000.11 132.17C1108.95 46.3673 1243.56 -0.201169 1382.15 -2.24915e-05C1723.52 -2.24915e-05 2000.24 276.76 2000.24 618.17"
                  fill="currentColor"
                ></path>
              </g>
            </svg>
          </button>
          <button class="card-button visa active">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2500"
              height="2500"
              viewBox="0 0 141.732 141.732"
            >
              <g fill="currentColor">
                <path
                  d="M62.935 89.571h-9.733l6.083-37.384h9.734zM45.014 52.187L35.735 77.9l-1.098-5.537.001.002-3.275-16.812s-.396-3.366-4.617-3.366h-15.34l-.18.633s4.691.976 10.181 4.273l8.456 32.479h10.141l15.485-37.385H45.014zM121.569 89.571h8.937l-7.792-37.385h-7.824c-3.613 0-4.493 2.786-4.493 2.786L95.881 89.571h10.146l2.029-5.553h12.373l1.14 5.553zm-10.71-13.224l5.114-13.99 2.877 13.99h-7.991zM96.642 61.177l1.389-8.028s-4.286-1.63-8.754-1.63c-4.83 0-16.3 2.111-16.3 12.376 0 9.658 13.462 9.778 13.462 14.851s-12.075 4.164-16.06.965l-1.447 8.394s4.346 2.111 10.986 2.111c6.642 0 16.662-3.439 16.662-12.799 0-9.72-13.583-10.625-13.583-14.851.001-4.227 9.48-3.684 13.645-1.389z"
                />
              </g>
              <path
                d="M34.638 72.364l-3.275-16.812s-.396-3.366-4.617-3.366h-15.34l-.18.633s7.373 1.528 14.445 7.253c6.762 5.472 8.967 12.292 8.967 12.292z"
                fill="currentColor"
              />
              <path fill="none" d="M0 0h141.732v141.732H0z" />
            </svg>
          </button>
        </div>
      </div>
      <div class="payments">
        <div class="payment">
          <div class="card green">
            <span>01/22</span>
            <span> •••• 4012 </span>
          </div>
          <div class="payment-details">
            <h3>Internet</h3>
            <div>
              <span>$ 2,110</span>
              <button class="icon-button">
                <i class="ph-caret-right-bold"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="payment">
          <div class="card olive">
            <span>12/23</span>
            <span> •••• 2228 </span>
          </div>
          <div class="payment-details">
            <h3>Universal</h3>
            <div>
              <span>$ 5,621</span>
              <button class="icon-button">
                <i class="ph-caret-right-bold"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="payment">
          <div class="card gray">
            <span>03/22</span>
            <span> •••• 5214 </span>
          </div>
          <div class="payment-details">
            <h3>Gold</h3>
            <div>
              <span>$ 3,473</span>
              <button class="icon-button">
                <i class="ph-caret-right-bold"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="faq">
        <p>Most frequently asked questions</p>
        <div>
          <label>Question</label>
          <input type="text" placeholder="Type here" />
        </div>
      </div>
      <div class="payment-section-footer">
        <button class="save-button">Save</button>
        <button class="settings-button">
          <i class="ph-gear"></i>
          <span>More settings</span>
        </button>
      </div>
    </section>
  </div>
</template>
<style scoped>

.tiles {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  -moz-column-gap: 1rem;
       column-gap: 1rem;
  row-gap: 1rem;
  margin-top: 1.25rem;
}
@media (max-width: 700px) {
  .tiles {
    grid-template-columns: repeat(1, 1fr);
  }
}

.tile {
  padding: 1rem;
  border-radius: 8px;
  background-color: var(--c-olive-500);
  color: var(--c-gray-900);
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  transition: 0.25s ease;
}
.tile:hover {
  transform: translateY(-5px);
}
.tile:focus-within {
  box-shadow: 0 0 0 2px var(--c-gray-800), 0 0 0 4px var(--c-olive-500);
}
.tile:nth-child(2) {
  background-color: var(--c-green-500);
}
.tile:nth-child(2):focus-within {
  box-shadow: 0 0 0 2px var(--c-gray-800), 0 0 0 4px var(--c-green-500);
}
.tile:nth-child(3) {
  background-color: var(--c-gray-300);
}
.tile:nth-child(3):focus-within {
  box-shadow: 0 0 0 2px var(--c-gray-800), 0 0 0 4px var(--c-gray-300);
}
.tile a {
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 600;
}
.tile a .icon-button {
  color: inherit;
  border-color: inherit;
}
.tile a .icon-button:hover, .tile a .icon-button:focus {
  background-color: transparent;
}
.tile a .icon-button:hover i, .tile a .icon-button:focus i {
  transform: none;
}
.tile a:focus {
  box-shadow: none;
}
.tile a:after {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.tile-header {
  display: flex;
  align-items: center;
}
.tile-header i {
  font-size: 2.5em;
}
.tile-header h3 {
  display: flex;
  flex-direction: column;
  line-height: 1.375;
  margin-left: 0.5rem;
}
.tile-header h3 span:first-child {
  font-weight: 600;
}
.tile-header h3 span:last-child {
  font-size: 0.825em;
  font-weight: 200;
}

.service-section > h2 {
  font-size: 1.5rem;
  margin-bottom: 1.25rem;
}

.service-section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.service-section-header > * + * {
  margin-left: 1.25rem;
}
@media (max-width: 1000px) {
  .service-section-header {
    display: none;
  }
}

.service-section-footer {
  color: var(--c-text-tertiary);
  margin-top: 1rem;
}

.search-field {
  display: flex;
  flex-grow: 1;
  position: relative;
}
.search-field input {
  width: 100%;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  border: 0;
  border-bottom: 1px solid var(--c-gray-600);
  background-color: transparent;
  padding-left: 1.5rem;
}
.search-field i {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
}

.dropdown-field {
  display: flex;
  flex-grow: 1;
  position: relative;
}
.dropdown-field select {
  width: 100%;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  border: 0;
  border-bottom: 1px solid var(--c-gray-600);
  background-color: transparent;
  padding-right: 1.5rem;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  color: var(--c-text-tertiary);
  width: 100%;
}
.dropdown-field i {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

.flat-button {
  border-radius: 6px;
  background-color: var(--c-gray-700);
  padding: 0.5em 1.5em;
  border: 0;
  color: var(--c-text-secondary);
  transition: 0.25s ease;
  cursor: pointer;
}
.flat-button:hover, .flat-button:focus {
  background-color: var(--c-gray-600);
}

.mobile-only {
  display: none;
}
@media (max-width: 1000px) {
  .mobile-only {
    display: inline-flex;
  }
}

.transfer-section {
  margin-top: 2.5rem;
}

.transfer-section-header {
  display: flex;
  align-items: center;
  width: 100%;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid var(--c-gray-600);
}
.transfer-section-header h2 {
  font-size: 1.5rem;
}

.payments {
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
}

.payment {
  display: flex;
  align-items: center;
}
.payment + * {
  margin-top: 1rem;
}

.card {
  width: 125px;
  padding: 0.375rem;
  aspect-ratio: 3/2;
  flex-shrink: 0;
  border-radius: 6px;
  color: var(--c-gray-800);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 0.75rem;
  font-weight: 600;
}
.card.green {
  background-color: var(--c-green-500);
}
.card.olive {
  background-color: var(--c-olive-500);
}
.card.gray {
  background-color: var(--c-gray-300);
}
.card span:last-child {
  align-self: flex-end;
}

.payment-details {
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-left: 1.5rem;
}
.payment-details h3 {
  font-size: 1rem;
  color: var(--c-text-tertiary);
}
.payment-details div {
  margin-top: 0.75rem;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  border-top: 1px solid var(--c-gray-600);
  border-bottom: 1px solid var(--c-gray-600);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
}
.payment-details div span {
  font-size: 1.5rem;
}

.filter-options {
  margin-left: 1.25rem;
  padding-left: 1.25rem;
  border-left: 1px solid var(--c-gray-600);
  display: flex;
  align-items: center;
  flex: 1 1 auto;
}
.filter-options p {
  color: var(--c-text-tertiary);
  font-size: 0.875rem;
}
.filter-options p + * {
  margin-left: auto;
  margin-right: 0.75rem;
}
@media (max-width: 1000px) {
  .filter-options p {
    display: none;
  }
}

.transfers {
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
}

.transfer {
  display: flex;
  align-items: center;
  width: 100%;
  font-size: 0.875rem;
}
@media (max-width: 1000px) {
  .transfer {
    align-items: flex-start;
    flex-direction: column;
  }
}
.transfer + * {
  margin-top: 2rem;
}

.transfer-logo {
  background-color: var(--c-gray-200);
  border-radius: 4px;
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.transfer-logo img {
  width: 45%;
}

.transfer-details {
  margin-left: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
}
@media (max-width: 1000px) {
  .transfer-details {
    flex-wrap: wrap;
    margin-left: 0;
    margin-top: 1rem;
  }
}
.transfer-details div {
  width: calc(100% / 3 - 1rem);
}
@media (max-width: 1000px) {
  .transfer-details div {
    width: 100%;
  }
}
.transfer-details div + div {
  margin-left: 1rem;
}
@media (max-width: 1000px) {
  .transfer-details div + div {
    margin-left: 0;
    margin-top: 1rem;
  }
}
.transfer-details dd {
  color: var(--c-text-tertiary);
  margin-top: 2px;
}

.transfer-number {
  margin-left: 2rem;
  font-size: 1.125rem;
  flex-shrink: 0;
  width: 15%;
  display: flex;
  justify-content: flex-end;
}
@media (max-width: 1000px) {
  .transfer-number {
    margin-left: 0;
    margin-top: 1.25rem;
    width: 100%;
    justify-content: flex-start;
  }
}

.payment-section > h2 {
  font-size: 1.5rem;
}

.payment-section-header {
  display: flex;
  align-items: center;
  margin-top: 1rem;
}
.payment-section-header p {
  color: var(--c-text-tertiary);
  font-size: 0.875rem;
}
.payment-section-header div {
  padding-left: 1rem;
  margin-left: auto;
  display: flex;
  align-items: center;
}
.payment-section-header div > * + * {
  margin-left: 0.5rem;
}

.card-button {
  display: flex;
  width: 50px;
  height: 34px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: transparent;
  transition: 0.25s ease;
  border-radius: 4px;
  border: 2px solid var(--c-gray-600);
  color: var(--c-text-primary);
  cursor: pointer;
}
.card-button.mastercard svg {
  max-height: 15px;
}
.card-button:focus, .card-button:hover, .card-button.active {
  color: var(--c-gray-800);
  background-color: var(--c-white);
  border-color: var(--c-white);
}

.faq {
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
}
.faq p {
  color: var(--c-text-tertiary);
  font-size: 0.875rem;
}
.faq div {
  margin-top: 0.75rem;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  border-top: 1px solid var(--c-gray-600);
  border-bottom: 1px solid var(--c-gray-600);
  font-size: 0.875rem;
  display: flex;
  align-items: center;
}
.faq div label {
  padding-right: 1rem;
  margin-right: 1rem;
  border-right: 1px solid var(--c-gray-600);
}
.faq div input {
  border: 0;
  background-color: transparent;
  padding: 0.25em 0;
  width: 100%;
}

.payment-section-footer {
  display: flex;
  align-items: center;
  margin-top: 1.5rem;
}

.save-button {
  border: 1px solid currentColor;
  color: var(--c-text-tertiary);
  border-radius: 6px;
  padding: 0.75em 2.5em;
  background-color: transparent;
  transition: 0.25s ease;
  cursor: pointer;
}
.save-button:focus, .save-button:hover {
  color: var(--c-white);
}

.settings-button {
  display: flex;
  align-items: center;
  color: var(--c-text-tertiary);
  background-color: transparent;
  border: 0;
  padding: 0;
  margin-left: 1.5rem;
  cursor: pointer;
  transition: 0.25s ease;
}
.settings-button i {
  margin-right: 0.5rem;
}
.settings-button:focus, .settings-button:hover {
  color: var(--c-white);
}

input:focus,
select:focus,
a:focus,
textarea:focus,
button:focus {
  outline: 0;
  box-shadow: 0 0 0 2px var(--c-gray-800), 0 0 0 4px var(--c-gray-300);
}
</style>

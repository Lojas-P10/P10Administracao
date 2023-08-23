<script>
import 'boxicons'
import { RouterLink } from 'vue-router'
export default { components: { RouterLink } }
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
<script>
	import {RouterView, RouterLink} from "vue-router";

	export default {

	};
</script>

<template>
	<div class="nav container-fluid">
		<div class="left">
			<img src="./../assets/img/LogoWhite.png" alt="" />
		</div>
		<div class="right">
			<ul class="list">
				<li><router-link :to="{name: 'home'}">Home</router-link></li>
				<li><router-link :to="{name: 'map'}">Map</router-link></li>
				<li><router-link :to="{name: 'bestiary'}">Bestiary</router-link></li>
				<!-- <li><a href="/bestiary">Bestiary</a></li> -->
			</ul>

			<a
				class="hamburger"
				data-bs-toggle="offcanvas"
				href="#offcanvasExample"
				role="button"
				aria-controls="offcanvasExample"
			>
                <span class="icon">☰</span>
			</a>

			<div
				class="offcanvas offcanvas-end"
				tabindex="-1"
				id="offcanvasExample"
				aria-labelledby="offcanvasExampleLabel"
			>
				<div class="offcanvas-header">
					<h5 class="offcanvas-title" id="offcanvasExampleLabel"><img src="../assets/img/LogoWhite.png" alt=""></h5>
					<button
						type="button"
						class="btn-close"
						data-bs-dismiss="offcanvas"
						aria-label="Close"
					></button>
				</div>
				<div class="offcanvas-body">
				<ul class="list-canvas text-color-danger">
					<li data-bs-dismiss="offcanvas" aria-label="Close"><router-link :to="{name: 'home'}">Home</router-link></li>
					<li data-bs-dismiss="offcanvas" aria-label="Close"><router-link :to="{name: 'map'}">Map</router-link></li>
					<li data-bs-dismiss="offcanvas" aria-label="Close"><router-link :to="{name: 'bestiary'}">Bestiary</router-link></li>
				</ul>
				</div>
			</div>
		</div>
	</div>
	<router-view />
</template>

<style scoped>
	.offcanvas{
		background-color: rgb(192, 152, 89);
	}

	.offcanvas-header .btn-close{
		font-size: 30px;
	}

	.nav {
		background-color: rgba(0, 0, 0, 0.8);
		width: 98%;
		height: 100px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-radius: 10px;
		position: fixed;
		left: 0;
		top: 0;
		right: 0;
		z-index: 23023;
		padding-inline: 20px;
		margin: 20px auto;
		font-size: 25px;
	}

	img {
		height: 90px;
	}

	ul {
		display: flex;
		margin-bottom: 0;
	}

	li {
		list-style: none;
		margin-inline: 20px;
	}

	li:hover a {
		color: rgb(208, 150, 58);
	}

	a {
		color: white;
		text-decoration: none;
	}

    .hamburger{
        display: none;
    }

    .icon{
        font-size: 46px;
    }

	.list-canvas{
		display: flex;
		flex-direction: column;
		padding-left: 0;
	}

	.list-canvas li{
		margin-top: 30px;
	}

	.list-canvas li a {
		color: white;
		font-size: 30px;
	}

	@media (max-width: 660px) {
		.nav .list {
			display: none;
		}

        .hamburger{
            display: block;
        }

	}
</style>

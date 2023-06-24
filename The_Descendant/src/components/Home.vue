<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import { ref } from "vue";

export default {
	data() {
		return {
			isActive: false,

			isMobile() {
			const screenWidth = window.innerWidth;
			const threshold = 700;

			return screenWidth < threshold;
			},

			caroImg: [
				{
					img: "https://rebeccamastrostefano.github.io/map-descendant//carousel/Tophe.png",
					back: "https://rebeccamastrostefano.github.io/map-descendant//carousel/back-tophe.png",
				},
				{
					img: "https://rebeccamastrostefano.github.io/map-descendant//carousel/pixie-framed.png",
					back: "https://rebeccamastrostefano.github.io/map-descendant//carousel/back-tintin.png",
				},
				{
					img: "https://rebeccamastrostefano.github.io/map-descendant//carousel/alveric.png",
					back: "https://rebeccamastrostefano.github.io/map-descendant//carousel/back-alveric.png",
				},
				{
					img: "https://rebeccamastrostefano.github.io/map-descendant//carousel/malo.png",
					back: "https://rebeccamastrostefano.github.io/map-descendant//carousel/back-malo.png",
				},
			],

			hover: false,
		};
	},

	components: {
		Carousel,
		Slide,
		Pagination,
		Navigation,
	},

	setup() {
		const myCarousel = ref(null);

		return {
			myCarousel,

			breakpoints: {
				// 700px and up
				0: {
					itemsToShow: 1,
					snapAlign: "center"
				},
				// 1024 and up
				1024: {
					itemsToShow: 2,
					snapAlign: "start"
				},

				1324: {
					itemsToShow: 3,
					snapAlign: "start"
				}
			}
		}
	},

	mounted() {
		window.scrollTo(0, 0)
	},

	methods: {
		cardFlip() {
			this.isActive = !this.isActive;

			const card = event.currentTarget;
			const back = card.querySelector('.back');

			if (this.isActive) {
				back.style.zIndex = "22323";
				console.log('ciao')
			}
			else {
				back.style.zIndex = "-22323"
			}
		}
	},
}
</script>

<template>
	<section>
		<div class="jumbo container-fluid">
			<div class="logo">
				<img src="./../assets/img/LogoWhite.svg" />
			</div>
			<h1>A DIVE INTO A STORY OF THE PAST</h1>
			<a href="https://rebeccamastrostefano.github.io/map-descendant//The_Descendant.pdf"
				@mouseover="this.hover = true" @mouseleave="this.hover = false"><img class="img-btn"
					:src="`https://rebeccamastrostefano.github.io/map-descendant//${hover ? 'button-hover.png' : 'button.png'}`" /></a>
		</div>
	</section>

	<div class="divider"></div>

	<section>
		<div class="carousel-container">
			<div class="carousel-btn">
				<h2>Meet the Protagonists</h2>
				<div>
					<a @click="myCarousel.prev" class="prev"><img src="../assets/img/arrow.png" class="arrow flip" /></a>
					<a @click="myCarousel.next" class="next"><img src="../assets/img/arrow.png" class="arrow" /></a>
				</div>
			</div>

			<Carousel :items-to-show="3" :wrap-around="true" :autoplay="3000" :pauseAutoplayOnHover="true"
				:breakpoints="breakpoints" ref="myCarousel">
				<slide v-for="img in caroImg" :key="img">
					<div class="img-container" @click="isMobile() && cardFlip">
						<div class="front">
							<img :src="img.img" alt="" />
						</div>
						<div class="back">
							<img :src="img.back" />
						</div>
					</div>
				</slide>
			</Carousel>
		</div>
	</section>

	<div class="divider"></div>

	<section>
		<div class="map-container">
			<div class="map-content">
				I am William Byrne, an archaeologist on a quest to reveal the enigmatic tales of ancient Ireland.<br>Join me
				as we explore the mesmerizing pages of Tophe's journal, chart the mystical realms on a reconstructed map,
				and delve into the captivating bestiary of magical creatures that roam these lands.
				<span class="hashtags">Discover. Explore. Unveil.</span>
			</div>
		</div>
	</section>
</template>

<style scoped>
.jumbo {
	height: 97vh;
	background-image: url("../assets/img/castle.png");
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	width: 100%;
	padding-top: 130px;
	color: white;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
}

.logo {
	height: 500px;
}

.logo img {
	height: 100%;
	width: 100%;
}

h1 {
	font-size: 50px;
	margin: 0 0 50px 0;
}

.img-btn {
	height: 100px;
	width: 100%;
	object-fit: contain;
}

.divider {
	height: 40px;
	background-size: contain;
	width: 100%;
	background-image: url("../assets/img/divider.png");
	position: relative;
	z-index: 4534543;
}

.carousel-container {
	max-width: 1400px;
	margin: auto;
	padding: 100px 0;
	position: relative;
}

.carousel-btn {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

h2 {
	margin-left: 40px;
	color: white;
}

.arrow {
	height: 56px;
	margin-bottom: 20px;
	margin-inline: 10px;
}

.flip {
	margin-top: -1px;
	transform: rotate(180deg);
}

.img-container {
	height: 600px;
	position: relative;
}

.img-container img {
	height: 100%;
}

.front {
	height: 100%;
}

.back {
	height: 100%;
	width: 100%;
	color: beige;
	position: absolute;
	top: 0;
	left: 0;
	z-index: -16;
}

.img-container:hover .back {
	z-index: 2020;
}

.right {
	color: white;
	max-width: 600px;
	font-size: 30px;
	padding: 15px;
	background-color: rgba(0, 0, 0, 0.4);
}

.map-container {
	height: 900px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-image: url("./../assets/img/mapsfocata.png");
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
}

.map img {
	width: 100%;
	height: 100%;
}

.map-content {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	text-align: center;
	max-width: 1000px;
	font-size: 30px;
	padding: 20px;
	color: rgb(243, 237, 225);
	background-color: rgba(0, 0, 0, 0.507);
	border-radius: 20px;
	line-height: 50px;
}

.hashtags {
	text-align: center;
	padding-top: 5%;
}

@media (max-width:843px) {
	.logo {
		height: 300px;
	}

	h1 {
		font-size: 30px;
	}

	.carousel-btn {
		flex-direction: column;
	}
}

@media (max-width:550px) {
	.hashtags {
		font-size: 20px;
	}

	.map-content {
		font-size: 20px;
		line-height: 27px;
	}

	.img-container {
		height: 500px;
	}
}
</style>

<script>
export default {
  data() {
    return {
      isActive: false,

      cardImg: [
        {
          img: "https://rebeccamastrostefano.github.io/map-descendant//bestiary/Glashtyn_Framed.png",
          back: "https://rebeccamastrostefano.github.io/map-descendant//bestiary/back-glashtyn.png"
        },

        {
          img: "https://rebeccamastrostefano.github.io/map-descendant//bestiary/Tophe.png",
          back: "https://rebeccamastrostefano.github.io/map-descendant//bestiary/back-sidhe.png"
        },

        {
          img: "https://rebeccamastrostefano.github.io/map-descendant//bestiary/puca.png",
          back: "https://rebeccamastrostefano.github.io/map-descendant//bestiary/back-puca.png"
        },

        {
          img: "https://rebeccamastrostefano.github.io/map-descendant//bestiary/pixie-framed.png",
          back: "https://rebeccamastrostefano.github.io/map-descendant//bestiary/back-pixie.png"
        },

        {
          img: "https://rebeccamastrostefano.github.io/map-descendant//bestiary/fomorian-framed.png",
          back: "https://rebeccamastrostefano.github.io/map-descendant//bestiary/back-fomorian.png"
        },

        {
          img: "https://rebeccamastrostefano.github.io/map-descendant//bestiary/gwyllion-framed.png",
          back: "https://rebeccamastrostefano.github.io/map-descendant//bestiary/back-gwyllion.png"
        },
      ]
    }
  },

  mounted() {
    window.scrollTo(0, 0)
  },

  methods: {
    isMobile() {
			const screenWidth = window.innerWidth;
			const threshold = 700;

			return screenWidth < threshold;
		},

    flipCard() {
      this.isActive = !this.isActive

      const card = event.currentTarget;
      const front = card.querySelector('.front');
      const back = card.querySelector('.back');

      if (this.isActive && this.isMobile()) {
        front.style.transform = "perspective(600px) rotateY(180deg)";
        back.style.transform = "perspective(600px) rotateY(360deg)";
      }
      else {
        front.style.transform = "perspective(600px) rotateY(0deg)";
        back.style.transform = "perspective(600px) rotateY(180deg)";
      }
    },

  },
}

</script>

<template>
  <!-- <Nav/> -->
  
  <div class="main-container">
    <h1>Learn About the Creatures of the Land</h1>
    <div class="container-cards">
      <div class="cards" v-for="img in this.cardImg" @click="isMobile() && flipCard()">
        <div class="face front">
          <img :src="img.img">
        </div>

        <div class="face back">
          <img :src="img.back">
        </div>
      </div>
    </div>
  </div>

  <!-- <Foot/>  -->
</template>

<style scoped>
.main-container {
  padding-top: 120px;
  background-image: url('../assets/img/forest.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding-bottom: 30px;
}

h1 {
  font-size: 60px;
  text-align: center;
  color: rgb(247, 247, 247);
  margin-top: 30px;
}

.container-cards {
  max-width: 1399px;
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  flex-wrap: wrap;
}

.cards {
  position: relative;
  width: 350px;
  height: 500px;
  margin-top: 50px;
}

.face {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 10px;
  overflow: hidden;
  transition: .5s;
}

.front {
  transform: perspective(600px) rotateY(0deg);
}

img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.back {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  transform: perspective(600px) rotateY(180deg);
  padding: 15px;
  color: crimson;
  text-align: center;
}

.cards:hover .front {
  transform: perspective(600px) rotateY(180deg);
}

.card-click-front {
  transform: perspective(600px) rotateY(180deg);
}

.cards:hover .back {
  transform: perspective(600px) rotateY(360deg);
}

.card-click-back {
  transform: perspective(600px) rotateY(360deg);
}

@media (max-width: 700px) {
  h1 {
    font-size: 35px;
  }
}
</style>
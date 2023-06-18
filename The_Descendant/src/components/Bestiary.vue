<script>
export default{
  data() {
  return {
    cardImg:[
        {
          img:"https://rebeccamastrostefano.github.io/map-descendant//bestiary/Glashtyn_Framed.png",
          back:"https://rebeccamastrostefano.github.io/map-descendant//bestiary/back-glashtyn.png"
        },

        {
          img:"https://rebeccamastrostefano.github.io/map-descendant//bestiary/Tophe.png",
          back:"https://rebeccamastrostefano.github.io/map-descendant//bestiary/back-sidhe.png"
        },

        {
          img:"https://rebeccamastrostefano.github.io/map-descendant//bestiary/puca.png",
          back:"https://rebeccamastrostefano.github.io/map-descendant//bestiary/back-puca.png"
        },

        {
          img:"https://rebeccamastrostefano.github.io/map-descendant//bestiary/pixie-framed.png",
          back:"https://rebeccamastrostefano.github.io/map-descendant//bestiary/back-pixie.png"
        },
    ]
  }
},
}

</script>

<template>
<!-- <Nav/> -->
<div class="main-container">
  <h1>Learn About the Creatures of the Story World</h1>
  <div class="container-cards">
    <div class="cards" v-for="img in this.cardImg">
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
.main-container{
  padding-top:120px; 
}

h1{
  text-align: center;
  color: white;
  margin-top:30px ;
}

.container-cards{
  max-width: 1399px;
  display: flex;
  justify-content: space-around;
  margin: 20px auto;
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

.cards:hover .back {
    transform: perspective(600px) rotateY(360deg);
}
</style>
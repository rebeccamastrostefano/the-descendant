<script>
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { bounds, point, latLng, CRS } from "leaflet";
// import "../../node_modules/leaflet/dist/leaflet.js"

export default {
    name: "LeafletMap",
    data() {
        return {
            map: null,
            p1: L.point(0, 4096),
            p2: L.point(4096, 0),
            iswick: L.icon({
                iconUrl: 'https://rebeccamastrostefano.github.io/map-descendant//Iswick.png',
                iconSize: [160, 80]
            }),

            hibrook: L.icon({
                iconUrl: 'https://rebeccamastrostefano.github.io/map-descendant//Hibrook.png',
                iconSize: [180, 80]
            }),

            hilltoe: L.icon({
                iconUrl: 'https://rebeccamastrostefano.github.io/map-descendant//HillToe.png',
                iconSize: [160, 90]
            }),

            arshill: L.icon({
                iconUrl: 'https://rebeccamastrostefano.github.io/map-descendant//Arshill.png',
                iconSize: [160, 80]
            }),

            sigdifeld: L.icon({
                iconUrl: 'https://rebeccamastrostefano.github.io/map-descendant//Sigdifeld.png',
                iconSize: [180, 80]
            }),

            selectedMarker: "default", // Descrizione di default
        };
    },

    methods: {
        boundsFun() {
            this.map.setMaxBounds(new L.LatLngBounds(
                this.map.unproject(this.p1, this.map.getMaxZoom()),
                this.map.unproject(this.p2, this.map.getMaxZoom())
            ))
        },

        showDescription(markerId) {
            this.selectedMarker = markerId;
            // Nascondi tutte le descrizioni
            const descriptions = document.querySelectorAll(".right-content > div");
            descriptions.forEach((desc) => {
                desc.classList.add("none");
            });

            // Mostra la descrizione corrispondente al marker cliccato
            const description = document.querySelector(`.${markerId}`);
            if (description) {
                description.classList.remove("none");
            }
        }
    },

    mounted() {
        this.map = L.map("map").setView([0, 0], 1);
        L.tileLayer('https://rebeccamastrostefano.github.io/map-descendant//{z}/{x}/{y}.png', {
            minZoom: 2,
            maxZoom: 4,
            bounds: [[-110,116], [4916,-110]],
            defaultZoom: 2,
            continuousWorld: false,
            noWrap: true,
            errorTileUrl: "src/assets/img/tile_sea.png",
        }).addTo(this.map);
        this.boundsFun()


        L.marker([-6, -85], {
            icon: this.iswick,
        })
            .addTo(this.map)
            .on("click", () => {
                this.showDescription("iswick");
            });

        L.marker([-35, -5], {
            icon: this.hibrook,
        })
            .addTo(this.map)
            .on("click", () => {
                this.showDescription("hibrook");
            });

        L.marker([66, -95], {
            icon: this.hilltoe,
        })
            .addTo(this.map)
            .on("click", () => {
                this.showDescription("hilltoe");
            });

        L.marker([-53, 45], {
            icon: this.arshill,
        })
            .addTo(this.map)
            .on("click", () => {
                this.showDescription("arshill");
            });

        L.marker([73, 113], {
            icon: this.sigdifeld,
        })
            .addTo(this.map)
            .on("click", () => {
                this.showDescription("sigdifeld");
            });

    },
};

</script>

<template>
    <div class="main-container container-fluid">
        <h1>MAP OF THE WORLD</h1>

        <div class="content-map container-fluid">
            <div class="mapContainer">
                <div id="map"></div>
            </div>
            <div class="right">
                <div class="right-content">
                    <div :class="[selectedMarker === 'default' ? 'default' : 'none']">
                        TODO
                    </div>

                    <div class="iswick none">
                        iswick
                    </div>

                    <div class="hibrook none">
                        hibrook
                    </div>

                    <div class="hilltoe none">
                        hilltoe
                    </div>

                    <div class="arshill none">
                        arshill
                    </div>

                    <div class="sigdifeld none">
                        sigdifeld
                    </div>

                </div>
            </div>
        </div>

        <div class="divider"></div>
        
        <div class="content-path container-fluid">
            <h2>LOOK AT THOPE'S JOURNEY</h2>

            <div class="img-container">
                <img src="../assets//img/map-path.png" alt="">
            </div>

        </div>
    </div>
</template>

<style scoped>
h1 {
    margin: 30px 0;
}


.main-container {
    --bs-gutter-x:0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-top: 120px;
    color: white;
    margin: 0;
}

.content-map {
    display: flex;
    margin-inline: 50px;
    max-width: 1500px;
    margin: auto;
}

.mapContainer {
    width: 100%;
    max-width: 1000px;
}

#map {
    height: 700px;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
}

.text {
    position: absolute;
    right: 100px;
    top: 0;
    color: white;
}

img {
    height: 100%;
    width: 100%;
}

.right {
    width: 30%;
    height: 700px;
    background-image: url('./../assets/img/frame.png');
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    position: relative;
}

.right-content {
    color: rgb(0, 0, 0);
    left: 50%;
    transform: translate(-50%, 30%);
    margin-top:100px ;
    position: absolute;
}

.divider {
    height: 40px;
    background-size: contain;
    width: 100%;
    background-image: url('../assets/img/divider.png');
}

h2 {
    margin: 20px 0;
}
.img-container{
    max-width: 1000px;
    margin: 0 auto;
}

.none {
    display: none;
}

@media (max-width:1180px) {
    .content-map{
        flex-direction: column;
        align-items: center;
    }

    #map{
        width: 80%;
        margin: auto;
    }

    .right{
        width: 100%;
    }

    .img-container{
    height: 80%;
    }
}

@media (max-width: 660px) {
    #map{
        height: 400px;
        width: 100%;
    }

    .right{
        height: 400px;
    }
	}
</style>
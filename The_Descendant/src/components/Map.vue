<script>
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { bounds, point, latLng, CRS } from "leaflet";
// import "../../node_modules/leaflet/dist/leaflet.js"
import {ref, onMounted} from 'vue'

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

            iswickhover: L.icon({
                iconUrl: 'https://rebeccamastrostefano.github.io/map-descendant//Iswick-hover.png',
                iconSize: [160, 80]
            }),

            hibrook: L.icon({
                iconUrl: 'https://rebeccamastrostefano.github.io/map-descendant//Hibrook.png',
                iconSize: [180, 80]
            }),

            hibrookhover: L.icon({
                iconUrl: 'https://rebeccamastrostefano.github.io/map-descendant//Hibrook-hover.png',
                iconSize: [180, 80]
            }),

            hilltoe: L.icon({
                iconUrl: 'https://rebeccamastrostefano.github.io/map-descendant//HillToe.png',
                iconSize: [160, 90]
            }),

            hilltoehover: L.icon({
                iconUrl: 'https://rebeccamastrostefano.github.io/map-descendant//HillToe-hover.png',
                iconSize: [160, 90]
            }),

            arshill: L.icon({
                iconUrl: 'https://rebeccamastrostefano.github.io/map-descendant//Arshill.png',
                iconSize: [160, 80]
            }),

            arshillhover: L.icon({
                iconUrl: 'https://rebeccamastrostefano.github.io/map-descendant//Arshill-hover.png',
                iconSize: [160, 80]
            }),

            sigdifeld: L.icon({
                iconUrl: 'https://rebeccamastrostefano.github.io/map-descendant//Sigdifeld.png',
                iconSize: [180, 80]
            }),

            sigdifeldhover: L.icon({
                iconUrl: 'https://rebeccamastrostefano.github.io/map-descendant//Sigdifeld-hover.png',
                iconSize: [180, 80]
            }),

        };
    },

    methods: {
        boundsFun() {
            this.map.setMaxBounds(new L.LatLngBounds(
                this.map.unproject(this.p1, this.map.getMaxZoom()),
                this.map.unproject(this.p2, this.map.getMaxZoom())
            ))
        },

        showDescription: (markerId) => {
            // Nascondi tutte le descrizioni
            const descriptions = document.querySelectorAll(".right > div");
            descriptions.forEach((desc) => {
                desc.classList.add("none");
            });

            // Mostra la descrizione corrispondente al marker cliccato
            const description = document.querySelector(`.${markerId}`);
            if (description) {
                description.classList.remove("none");
            }
        },

        handleMapClick() {
            const descriptions = document.querySelectorAll(".right > div");
            descriptions.forEach((desc) => {
                if (desc.classList.contains("default")) {
                    desc.classList.remove("none");
                } else {
                    desc.classList.add("none");
                }
            });
        },

    },

    mounted() {
        this.map = L.map("map").setView([0, 0], 1);
        L.tileLayer('https://rebeccamastrostefano.github.io/map-descendant//{z}/{x}/{y}.png', {
            minZoom: 2,
            maxZoom: 4,
            bounds: [[-110, 116], [4916, -110]],
            defaultZoom: 2,
            continuousWorld: false,
            noWrap: true,
            errorTileUrl: "src/assets/img/tile_sea.png",
        }).addTo(this.map);
        this.boundsFun()
        


        const Iswick= L.marker([-6, -85], {
            icon: this.iswick,
        })
            .addTo(this.map)
            .on("click", () => {
                this.showDescription("iswick");
            })
            .on('mouseover', () => {
                Iswick.setIcon(this.iswickhover);
            })
            .on('mouseout', () => {
                Iswick.setIcon(this.iswick); 
            });
                

        const Hibrook= L.marker([-35, -5], {
            icon: this.hibrook,
        })
            .addTo(this.map)
            .on("click", () => {
                this.showDescription("hibrook");
            })
            .on('mouseover', () => {
                Hibrook.setIcon(this.hibrookhover);
            })
            .on('mouseout', () => {
                Hibrook.setIcon(this.hibrook);
            });

        const Hilltoe= L.marker([66, -95], {
            icon: this.hilltoe,
        })
            .addTo(this.map)
            .on("click", () => {
                this.showDescription("hilltoe");
            })
            .on('mouseover', () => {
                Hilltoe.setIcon(this.hilltoehover);
            })
            .on('mouseout', () => {
                Hilltoe.setIcon(this.hilltoe);
            });

        const Arshill= L.marker([-53, 45], {
            icon: this.arshill,
        })
            .addTo(this.map)
            .on("click", () => {
                this.showDescription("arshill");
            })
            .on('mouseover', () => {
                Arshill.setIcon(this.arshillhover);
            })
            .on('mouseout', () => {
                Arshill.setIcon(this.arshill);
            });

        const Sigdifeld= L.marker([73, 113], {
            icon: this.sigdifeld,
        })
            .addTo(this.map)
            .on("click", () => {
                this.showDescription("sigdifeld");
            })
            .on('mouseover', () => {
                Sigdifeld.setIcon(this.sigdifeldhover);
            })
            .on('mouseout', () => {
                Sigdifeld.setIcon(this.sigdifeld);
            });

        this.handleMapClick()

        window.scrollTo(0,0)

    },
};

</script>

<template>
    <div class="main-container container-fluid">
        <h1>MAP OF THE WORLD</h1>

        <div class="content-map container-fluid row">

            <div class="mapContainer">
                <div id="map" @click="handleMapClick"></div>
            </div>

            <div class="right">

                <div class="city default">
                    <img src="https://rebeccamastrostefano.github.io/map-descendant//generic-frame.png" alt="">
                </div>

                <div class="iswick none city">
                    <img src="https://rebeccamastrostefano.github.io/map-descendant//iswick-frame.png" alt="">
                </div>

                <div class="hibrook none city">
                    <img src="https://rebeccamastrostefano.github.io/map-descendant//hibrook-frame.png" alt="">
                </div>

                <div class="hilltoe none city">
                    <img src="https://rebeccamastrostefano.github.io/map-descendant//hilltoe-frame.png" alt="">
                </div>

                <div class="arshill none city">
                    <img src="https://rebeccamastrostefano.github.io/map-descendant//arshill-frame.png" alt="">
                </div>

                <div class="sigdifeld none city">
                    <img src="https://rebeccamastrostefano.github.io/map-descendant//sigdifeld-frame.png" alt="">
                </div>

            </div>
        </div>

        <div class="divider"></div>

        <div class="content-path container-fluid">
            <h2>LOOK AT THOPE'S JOURNEY</h2>

            <div class="img-container">
                <video controls loop autoplay>
                    <source src="https://rebeccamastrostefano.github.io/map-descendant//path-video.mp4" type="video/mp4">
                </video>
            </div>

        </div>
    </div>
</template>

<style scoped>
h1 {
    margin: 30px 0;
}

.container-fluid{
    padding-left: 0;
    padding-right: 0;
}

.main-container {
    --bs-gutter-x: 0;
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
    justify-content: center;
    margin-inline: 50px;
    max-width: 1500px;
    margin: auto;
    margin-bottom: 50px;
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

.right {
    display: flex;
    justify-content: center;
    width: 30%;
    height: 700px;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    position: relative;
}

.city img {
    height: 100%;
    width: 100%;
    object-fit: contain;
}

.divider {
    height: 40px;
    background-size: contain;
    width: 100%;
    background-image: url('../assets/img/divider.png');
}

.content-path {
    margin: 40px 0;
}

h2 {
    margin: 40px 0;
}

.img-container {
    max-width: 1000px;
    margin: 0 auto;
}

.img-container video {
    height: 100%;
    width: 100%;
}

.none {
    display: none;
}

@media (max-width:1180px) {
    .content-map {
        flex-direction: column;
        align-items: center;
    }

    #map {
        width: 80%;
        margin: auto;
    }

    .right {
        width: 400px;
        margin-top: 30px;
    }

    .img-container {
        height: 80%;
    }
}

@media (max-width: 660px) {
    #map {
        height: 400px;
        width: 100%;
    }

    .right {
        height: 600px;
        margin-top: 30px;
    }
}

@media (max-width: 400px) {
    .city img{
        width: 85%;
    }
}
</style>
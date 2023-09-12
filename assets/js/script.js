/*

Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue.
Bonus: 
1- al click su una thumb, visualizzare in grande l'immagine corrispondente 
2- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente 
3- quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce



*/

const { createApp } = Vue

createApp({
    data() {
        return {
            activeImage: 0,

            games: [
                {
                    image: "./assets/img/01.webp",
                    title: 'Marvel s Spiderman Miles Morales',
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                },
                {
                    image: "./assets/img/02.webp",
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                },
                {
                    image: "./assets/img/03.webp",
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                },
                {
                    image: "./assets/img/04.webp",
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                },
                {
                    image: "./assets/img/05.webp",
                    title: "Marvel's Avengers",
                    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                }
            ]
        }
    },

    methods: {

        next() {
            console.log("next");
            this.activeImage++;

            if (this.activeImage > this.games.length - 1) {
                this.activeImage = 0
            }

            
        },

        prev() {
            console.log("prev");
            this.activeImage--;

            if (this.activeImage < 0) {
                this.activeImage = this.games.length - 1
            }
        },

        showThumbs (index) {
            this.activeImage = index;
        },

        autoPlay() {
           const play = setInterval(this.next, 2000)   //Si può creare senza il bottone?
           //Come fare per bloccare l'autoplay, posso farlo con lo stesso bottone o devo creare un secondo bottone per farlo fermare?
        },
        

    }
}).mount("#app")



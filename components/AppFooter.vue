<template>
    <footer class="footer">
        <div class="footer-top">
            <button class="footer-btn" @click="() => scrollElement()">
                <img class="btn__down" src="@/assets/images/btn/top.svg" alt="">
                <img class="btn__scroll-text" src="@/assets/images/btn/footer-text.svg" alt="">
            </button>
            <vue-marquee-slider id="marquee-slider" :speed="10000" :autoWidth="true" :space="80">
                <div>
                    <Icon name="emojione:desktop-computer" />
                    Get in Touch
                </div>
                <div>
                    <Icon name="emojione:victory-hand" />
                    Availablefor Work 
                </div>
            </vue-marquee-slider>
        </div>
        <div class="container">
            <div class="footer__nav">
                <nav>
                    <ul>
                        <li><a href="#!">Home</a></li>
                        <li><a href="#!">LinkedIn</a></li>
                        <li><a href="#!">Work</a></li>
                        <li><a href="#!">Instagram</a></li>
                        <li><a href="#!">Me</a></li>
                        <li><a href="#!">Twitter</a></li>
                    </ul>
                </nav>
                <div class="footer__email">
                    Interested in working together? Drop me a line
                    <button><Icon name="mdi:content-copy" />Copy Email</button>
                </div>  
            </div>
        </div>
        <div class="footer__copyright">
            Copyright © Designerz | Designed by VictorFlow Templates - Powered by Webflow
        </div>
    </footer>
</template>
<script setup>
import { VueMarqueeSlider } from 'vue3-marquee-slider';
import '../node_modules/vue3-marquee-slider/dist/style.css';
const scrollElement = () => {
 var element = document.getElementById("header");
 element.scrollIntoView({behavior: "smooth"});
}
</script>
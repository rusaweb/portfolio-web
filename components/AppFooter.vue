<template>
    <footer class="footer">
        <div class="footer-top">
            <button class="footer-btn" @click="() => scrollElement()">
                <img class="btn__down" src="@/assets/images/btn/top.svg" alt="">
                <img class="btn__scroll-text" src="@/assets/images/btn/footer-text.svg" alt="">
            </button>
            <vue-marquee-slider id="marquee-slider" :speed="10000" :autoWidth="true" :space="80">
                <div><Icon name="emojione:desktop-computer" />{{ $t('footer.marquee-slider-1') }}</div>
                <div><Icon name="emojione:victory-hand" />{{ $t('footer.marquee-slider-2') }}</div>
            </vue-marquee-slider>
        </div>
        <div class="container">
            <div class="footer__nav">
                <nav>
                    <ul>
                        <li><nuxt-link :to="localePath('/')">{{$t('navbar.link_1')}}</nuxt-link></li>
                        <li><a href="https://www.linkedin.com/in/ruslan-kurbanbayev-56b637258" target="_blank">LinkedIn</a></li>
                        <li><nuxt-link :to="localePath('/work')">{{$t('navbar.link_2')}}</nuxt-link></li>
                        <li><a href="https://instagram.com/ruslan__web?igshid=ZDdkNTZiNTM=" target="_blank">Instagram</a></li>
                        <li><nuxt-link :to="localePath('/about')">{{$t('navbar.link_3')}}</nuxt-link></li>
                        <li><a href="https://t.me/tashweb" target="_blank">Telegram</a></li>
                    </ul>
                </nav>
                <div class="footer__email">
                    {{$t('footer.email')}}
                    <button @click="copyTextToClipboard('ruslan.web.time@gmail.com')"><Icon v-show="copy" name="mdi:check" /> <Icon v-show="!copy" name="mdi:content-copy" />{{$t('footer.copy')}}</button>
                </div>  
            </div>
        </div>
        <div class="footer__copyright">
            {{$t('copyright')}}
        </div>
    </footer>
</template>
<script setup>
import { VueMarqueeSlider } from 'vue3-marquee-slider';
import '../node_modules/vue3-marquee-slider/dist/style.css';

const localePath = useLocalePath()
const copy = ref(false)

const scrollElement = () => {
 var element = document.getElementById("header");
 element.scrollIntoView({behavior: "smooth"});
}

const fallbackCopyTextToClipboard = (text) => {
  var textArea = document.createElement("textarea");
  textArea.value = text;
  
  // Avoid scrolling to bottom
  textArea.style.top = "0";
  textArea.style.left = "0";
  textArea.style.position = "fixed";

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Fallback: Copying text command was ' + msg);
  } catch (err) {
    console.error('Fallback: Oops, unable to copy', err);
  }

  document.body.removeChild(textArea);
}
const copyTextToClipboard = (text) => {
  if (!navigator.clipboard) {
    fallbackCopyTextToClipboard(text);
    return;
  }
  navigator.clipboard.writeText(text).then(function() {
    console.log('Async: Copying to clipboard was successful!');
    copy.value = true
    setTimeout(() => copy.value = false,2000)
  }, function(err) {
    console.error('Async: Could not copy text: ', err);
  });
}

</script>
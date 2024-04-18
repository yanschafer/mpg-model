<template>
  <div class="preloader" ref="preloader" v-if="loading">
    <div class="flex flex-col justify-around">
      <Vue3Marquee
          :clone=true
          duration="10"
          direction="reverse"
      >
        <h1 class="text-big"> MP Group<span class="pink-big">//</span></h1>
      </Vue3Marquee>
      <Vue3Marquee
          :clone=true
          duration="25"
          class="marquee-text"
      >
        <h1 class="text-big"> STREAMING AGENCY<span class="pink-big">//</span></h1>
      </Vue3Marquee>
      <Vue3Marquee
          :clone=true
          duration="22"
          direction="reverse"
      >
        <h1 class="text-big"> MODEL AGENCY<span class="pink-big">//</span></h1>
      </Vue3Marquee>
    </div>
  </div>

</template>

<script>
export default {
  name: "PreloaderComponent",
  data() {
    return {
      loading: true,
    };
  },
  methods: {
    checkImagesLoaded() {
      const images = document.querySelectorAll('img');
      const totalImages = images.length;
      let imagesLoaded = 0;

      images.forEach((img) => {
        if (img.complete && img.naturalHeight !== 0) {
          imagesLoaded++;
        } else {
          img.addEventListener('load', () => {
            imagesLoaded++;
            this.updateLoadingState(imagesLoaded, totalImages);
          });
          img.addEventListener('error', () => {
            imagesLoaded++;
            this.updateLoadingState(imagesLoaded, totalImages);
          });
        }
      });

      // Если изображения уже загружены до вызова метода
      this.updateLoadingState(imagesLoaded, totalImages);
    },
    updateLoadingState(loaded, total) {
      if (loaded === total) {
        // Добавляем задержку после загрузки всех изображений
        setTimeout(() => {
          // Проверяем, существует ли еще элемент прелоудера
          if (this.$refs.preloader) {
            this.$refs.preloader.classList.add('animate__animated', 'animate__slideOutUp');

            // Подождем, пока анимация завершится, прежде чем установить loading в false
            this.$refs.preloader.addEventListener('animationend', () => {
              this.loading = false;
            });
          }
        }, 1000); // Задержка в 5 секунд
      }
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.checkImagesLoaded();
    });
  },
};
</script>

<style>
.preloader {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(19, 19, 19, 0.95);
  backdrop-filter: blur(40px) saturate(120%);
  z-index: 99999999999999999999;
  overflow: hidden;
}

.text-big {
  font-weight: 900;
  font-size: 6rem;
  color: transparent;
  -webkit-text-stroke: 2px #b4b4b4;
  text-transform: uppercase;
  z-index: -1;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.pink-big {
  color: hotpink;
  -webkit-text-stroke: 0 #b4b4b4;
}
</style>

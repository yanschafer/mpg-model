<template>
  <div class="cursor">
    <div ref="circle" class="circle"></div>
    <div ref="dot" class="dot"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mouseX: 0,
      mouseY: 0,
      circleX: 0,
      circleY: 0,
      dotX: 0,
      dotY: 0,
      requestId: null,
    };
  },
  methods: {
    onHoverEnter() {
      this.$refs.circle.classList.add('circle-hover');
      this.$refs.dot.classList.add('dot-hover');
    },

    onHoverLeave() {
      this.$refs.circle.classList.remove('circle-hover');
      this.$refs.dot.classList.remove('dot-hover');
    },
    animate() {
      const circleSpeed = 0.2;
      const dotSpeed = 0.5;

      this.circleX += (this.mouseX - this.circleX) * circleSpeed;
      this.circleY += (this.mouseY - this.circleY) * circleSpeed;
      this.dotX += (this.mouseX - this.dotX) * dotSpeed;
      this.dotY += (this.mouseY - this.dotY) * dotSpeed;

      this.$refs.circle.style.transform = `translate(${this.circleX - 15}px, ${this.circleY - 15}px)`;
      this.$refs.dot.style.transform = `translate(${this.dotX - 5}px, ${this.dotY - 5}px)`;

      this.requestId = requestAnimationFrame(this.animate);
    },
    followCursor(e) {
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;
    },
  },
  mounted() {
    this.requestId = requestAnimationFrame(this.animate);
    document.addEventListener('mousemove', this.followCursor);

    // Добавление обработчиков для элементов <a> и <button>
    const hoverElements = document.querySelectorAll('a, button');
    hoverElements.forEach(el => {
      el.addEventListener('mouseenter', this.onHoverEnter);
      el.addEventListener('mouseleave', this.onHoverLeave);
    });
  },
  beforeUnmount() {
    document.removeEventListener('mousemove', this.followCursor);
    if (this.requestId) {
      cancelAnimationFrame(this.requestId);
    }

    // Удаление обработчиков для элементов <a> и <button>
    const hoverElements = document.querySelectorAll('a, button');
    hoverElements.forEach(el => {
      el.removeEventListener('mouseenter', this.onHoverEnter);
      el.removeEventListener('mouseleave', this.onHoverLeave);
    });
  },
};
</script>

<style>
@media (max-width: 575.98px) {
 .circle, .dot {
   display: none!important;
 }
}
.circle {
  position: fixed;
  width: 30px;
  height: 30px;
  background-color: rgba(255, 105, 180, 0.53);
  backdrop-filter: blur(10px);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 9999;
  opacity: 1;
  transition: opacity 0.3s ease-in-out;
}

.dot {
  position: fixed;
  width: 10px;
  height: 10px;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 10000;
  transition: width 0.3s ease, height 0.3s ease;
}
.circle-hover {
  opacity: 0;
}

.dot-hover {
  width: 20px;
  height: 20px;
}
.cursor {
  position: relative;
  z-index: 9999999999999;
}
</style>
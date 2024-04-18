<script>
export default {
  name: "ModalComponent"
}
</script>

<template>
  <dialog id="modal" class="modal">
    <div class="modal-box">
      <h1 class="font-bold text-lg text-center">Связаться с нами</h1>
      <p class="py-4 text-center">Мы будем рады новым лицам! Свяжитесь с нами в удобном для вас месседжере</p>
      <div class="flex flex-row justify-around">
        <a class="btn btn-info" href="https://t.me/+79171457266" target="_blank"><i class="fa-brands fa-telegram"></i> Telegram</a>
        <a class="btn btn-success" href="https://wa.me/+79171457266" target="_blank"><i class="fa-brands fa-whatsapp"></i> Whatsapp</a>
      </div>

    </div>
    <form method="dialog" class="modal-backdrop">
      <button>close</button>
    </form>
  </dialog>
</template>

<style scoped>
.modal {
  background-color: rgba(19, 19, 19, 0.9);
  border: 1px solid transparent;
  backdrop-filter: blur(40px);
}
.modal-box {
  background: #131313;
  box-shadow: 11px 10px 93px 0px rgba(161,106,234,0.3),
  -44px 15px 57px -24px rgba(49,34,172,0.22);
}
button:focus-visible {
  border: 1px solid transparent!important;
}
</style>
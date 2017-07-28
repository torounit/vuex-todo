<template>
  <button class="CloseButton"
          @click="$emit('click')">
  </button>

</template>


<style scoped>
  .CloseButton {
    border: none;
    background-color: transparent;
    position: relative;
    display: inline-block;
    width: 1em;
    height: 1em;
    overflow: hidden;
  }
  .CloseButton::before,
  .CloseButton::after {
    content: '';
    position: absolute;
    height: 2px;
    width: 100%;
    top: 50%;
    left: 0;
    margin-top: -1px;
    background: #000;
  }
  .CloseButton::before {
    transform: rotate(45deg);
  }
  .CloseButton::after {
    transform: rotate(-45deg);

  }
</style>

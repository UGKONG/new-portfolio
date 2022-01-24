<template>
  <section>
    <article>
      <div />
    </article>
  </section>
</template>

<style lang="scss" scoped>
@keyframes rotation {
  to {
    transform: rotate(-000deg);
  }
  from {
    transform: rotate(-360deg);
  }
}
section {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;

  article {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: none;
    background: conic-gradient(#fff, #338f6c80 10% 30%, #fff);
    display: flex;
    align-items: center;
    justify-content: center;
    animation: rotation 1s infinite linear;

    div {
      width: 90%;
      height: 90%;
      background: #fff;
      border: none;
      border-radius: 50%;
    }
  }
}
</style>
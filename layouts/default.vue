<template>
  <div class="container">
    <div class="content--fixed">
      <div class="title">
        <Nuxt />
      </div>
    </div>
    <div class="content">
      <SvgWave />
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import SvgWave from "~/components/SvgWave.vue";

export default Vue.extend({
  components: {
    SvgWave,
  },
});
</script>

<style lang="scss" scoped>
.container {
  width: calc(100vw - 40px);
  height: calc(100vh - 40px);
  margin: 20px;
}

.content {
  position: relative;
  top: 0;
  left: 0;
  overflow: hidden;
  height: 100%;
  border-radius: 10px;
  z-index: 1;
}

.content--fixed {
  position: fixed;
  width: calc(100vw - 40px);
  height: calc(100vh - 40px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
}

.title {
  margin: 20px;
  z-index: 11;

  @include lg {
    max-width: 800px;
  }
}
</style>

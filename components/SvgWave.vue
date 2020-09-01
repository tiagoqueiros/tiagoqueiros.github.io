<template>
  <div class="wave-wrapper">
    <WaveStartVector ref="waveStartVector" class="wave" />
    <WaveEndVector v-show="false" ref="waveEndVector" />
  </div>
</template>

<script>
import Vue from "vue";
import { random } from "lodash";

import WaveStartVector from "~/assets/images/waves-start.svg?inline";
import WaveEndVector from "~/assets/images/waves-end.svg?inline";

export default Vue.extend({
  name: "SvgWave",
  components: { WaveStartVector, WaveEndVector },

  mounted() {
    const startPaths = this.$refs.waveStartVector.querySelectorAll("path");
    const endPaths = this.$refs.waveEndVector.querySelectorAll("path");

    startPaths.forEach((path, index) => {
      this.$anime({
        targets: path,
        duration: random(3000, 5000),
        easing: "easeInOutQuad",
        d: endPaths[index].getAttribute("d"),
        loop: true,
        direction: "alternate",
      });
    });
  },
});
</script>

<style lang="scss" scoped>
.wave-wrapper {
  background-color: #12163d;
  width: calc(2 * 100vh);
  height: 0;
  position: relative;
}

.wave {
  position: absolute;
  top: 0;
  left: 0;
}
</style>

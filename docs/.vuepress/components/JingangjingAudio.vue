<!--
  功能: audio 组件
  作者: gyh
-->
<template>
  <div :class="'jingangjing-audio' + name" class="jingangjing-audio">
    <audio>
      <source :src="url" type="audio/mpeg" />
    </audio>
  </div>
</template>

<script>
import GreenAudioPlayer from 'green-audio-player'
import 'green-audio-player/dist/css/green-audio-player.min.css'

export default {
  name: 'JingangjingAudio',
  components: {},
  props: {
    url: '',
  },
  computed: {
    name() {
      return this.url
        .substring(this.url.lastIndexOf('/') + 1, this.url.length)
        .replace('.', 'X')
    },
  },
  mounted() {
    new GreenAudioPlayer('.jingangjing-audio' + this.name)
  },
}
</script>

<style type="text/css">
.jingangjing-audio {
  z-index: 9999;
  position: relative;

  width: 300px;
  height: 50px;

  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.07);
  border: 1px solid #dadada;
}
.play-pause-btn svg {
  width: 12px;
  height: 16px;
}
.volume__button svg {
  width: 16px;
  height: 16px;
}

.controls {
  font-family: PingFang SC !important;
  font-size: 14px !important;
}
</style>

<template>
  <div id="sound-controls" solo="off">
    <button class="p-4 bg-slate-100 rounded-full" @click="start(nSounds)">
      <span class="p-3 rounded-full hover:bg-slate-200 focus:ring-0 focus:border-transparent">
        Start
      </span>
    </button>

    <button class="ml-4 p-4 bg-slate-100 rounded-full" @click="pause(nSounds)">
      <span class="p-3 rounded-full hover:bg-slate-200 focus:ring-0 focus:border-transparent">
        Pause
      </span>
    </button>

    <button class="ml-4 p-4 bg-slate-100 rounded-full" @click="stop(nSounds)">
      <span class="p-3 rounded-full hover:bg-slate-200 focus:ring-0 focus:border-transparent">
        Stop
      </span>
    </button>

    <button class="ml-4 p-4 bg-slate-100 rounded-full" @click="time(-10, nSounds)">
      <span class="p-3 rounded-full hover:bg-slate-200 focus:ring-0 focus:border-transparent">
        - 10s
      </span>
    </button>

    <button class="ml-4 p-4 bg-slate-100 rounded-full" @click="time(10, nSounds)">
      <span class="p-3 rounded-full hover:bg-slate-200 focus:ring-0 focus:border-transparent">
        + 10s
      </span>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    nSounds: {
      type: Number,
      required: true
    }
  },
  methods: {
    start (nSounds) {
      for (let i = 0; i < nSounds; i++) {
        document.getElementById('audio' + i).play()
      }
    },
    pause (nSounds) {
      for (let i = 0; i < nSounds; i++) {
        document.getElementById('audio' + i).pause()
      }
    },
    stop (nSounds) {
      for (let i = 0; i < nSounds; i++) {
        document.getElementById('audio' + i).pause()
        document.getElementById('audio' + i).currentTime = 0
      }
    },
    time (delta, nSounds) {
      if (nSounds > 0) {
        const curTime = document.getElementById('audio0').currentTime
        for (let i = 0; i < nSounds; i++) {
          document.getElementById('audio' + i).currentTime = curTime + delta
        }
      }
    }
  }
}
</script>

<template>
  <div>
    <div :id="'container' + id" />
    <div class="flex w-full py-4">
      <audio :id="'audio' + id" class="w-full" :src="'sounds/' + name + '.wav'" controls crossorigin="anonymous" />
      <button class="ml-4 px-2 bg-slate-100 rounded-full" @click="solo(id, nSounds)">
        <span class="p-3 text-base rounded-full hover:bg-slate-200 focus:ring-0 focus:border-transparent">
          Solo
        </span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    id: {
      type: Number,
      required: true
    },
    nSounds: {
      type: Number,
      required: true
    }
  },
  methods: {
    solo (solId, nSounds) {
      const solo = document.getElementById('sound-controls').getAttribute('solo')

      // clicked new, turn on
      if (solo === 'off') {
        for (let i = 0; i < nSounds; i++) {
          if (i !== solId) {
            document.getElementById('audio' + i).volume = 0
          }
        }
        document.getElementById('audio' + solId).volume = 1
        document.getElementById('sound-controls').setAttribute('solo', solId)
      } else
      // clicked same, turn off
      if (Number(solo) === solId) {
        for (let i = 0; i < nSounds; i++) {
          document.getElementById('audio' + i).volume = 1
        }
        document.getElementById('sound-controls').setAttribute('solo', 'off')
      } else {
        // clicked else, switch to else
        for (let i = 0; i < nSounds; i++) {
          if (i !== solId) {
            document.getElementById('audio' + i).volume = 0
          }
        }
        document.getElementById('audio' + solId).volume = 1
        document.getElementById('sound-controls').setAttribute('solo', solId)
      }
    }
  }
}
</script>

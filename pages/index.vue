<template>
  <div class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0">
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.1.2/dist/tailwind.min.css" rel="stylesheet">
    <div class="max-w-4xl mx-auto sm:px-6 lg:px-8">
      <div class="mt-8 bg-white overflow-hidden shadow sm:rounded-lg p-16">
        <soundControls :n-sounds="2" />

        <div class="prose lg:prose-xl pt-14">
          <h1>Redbone - Childish Gambino</h1>
          <soundPlayer v-for="(s, key) in sounds" :id="key" :key="key" :n-sounds="sounds.length" :name="s.name" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data: function () {
    return {
      sounds: [
        {
          name: 'Redbone - Bass Synth'
        },
        {
          name: 'Redbone - Bass Synth'
        }
      ]
    }
  }
}
</script>

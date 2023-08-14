<script setup>
import { RouterView } from 'vue-router'
import 'flowbite'
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite()
})
window.onload = function () {
  var preloader = document.getElementById('preloader')
  var loader = document.getElementById('loader')

  loader.classList.remove('animate')

  preloader.remove()
}
</script>

<template>
  <div
    id="preloader"
    class="fixed top-0 left-0 w-full h-screen bg-white z-50 flex items-center justify-center"
  >
    <div class="flex items-center justify-center">
      <div id="loader" class="animate h-100 w-100">
        <img id="loader-logo" src="/logo.png" alt="Logo" />
      </div>
    </div>
  </div>
  <RouterView />
</template>

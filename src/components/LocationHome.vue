<script lang="ts" setup>

</script>
<template>
  <div class="py-10 bg-gray-100">
    <div class="grid grid-cols-1 md:grid-cols-2 md:w-3/4 md:m-auto gap-4">
      <!-- Map Column -->
      <div
        class="rounded-3xl overflow-hidden bg-white border border-gray-300 shadow-md flex items-center justify-center"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3446.0448282685297!2d-97.74187842534359!3d30.264303908121963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b5a8692003df%3A0x3041433e6e0a9355!2sAustin%20Convention%20Center!5e0!3m2!1sen!2sph!4v1691741645301!5m2!1sen!2sph"
          width="500"
          height="400"
          style="border: 8px solid #fff"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <!-- Images and Event Details Column -->

      <!-- Images Row -->

      <div class="row row-span-1 gap-4">
        <div class="grid grid-cols-2 gap-4">
          <div class="">
            <div
              class="bg-white p-2 rounded-3xl border border-gray-300 shadow-md h-52 flex flex-col items-center justify-center"
            >
              <img src="/image2.jpg" alt="Image 1" class="h-1/4" />
              <div class="mt-2">#PHDreamin2023</div>
            </div>
          </div>
          <div class="">
            <div
              class="bg-white p-2 rounded-3xl border border-gray-300 shadow-md h-52 flex flex-col items-center justify-center"
            >
              <img src="/2.png" alt="Image 1" class="h-1/4" />
              <div class="mt-2">Trailblazer Community</div>
            </div>
          </div>
        </div>

        <!-- Event Details Row -->
        <div>
          <div
            class="col-span-2 row-span-1 bg-white border border-gray-300 shadow-md md:w-full rounded-3xl"
          >
            <div class="text-black text-sm text-center mt-4 mb-4">
              <p class="mb-4">
                Philippine International Convention Center<br />
                Vicente Sotto St., CCP Complex, Pasay
              </p>
              <p>
                Monday, October 20: 8:00AM - 5:00PM <br />
                Tuesday, October 21: 8:00AM - 5:00PM <br />
                Wednesday, October 21: 8:00AM - 5:00PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

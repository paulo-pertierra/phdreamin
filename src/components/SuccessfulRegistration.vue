<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100 p-2">
    <div class="md:w-3/4 md:m-0 m-2 bg-white border border-gray-300 shadow-md rounded-xl p-8 flex">
      <div class="grid grid-cols-2">
        <div class="md:col-span-1 pt-2 col-span-2">
          <img src="/check.png" alt="Image" class="mx-auto w-3/4" />
          <h2 class="text-xl font-semibold mb-4 text-center">Thank you for your registration</h2>
          <p class="text-center text-sm">
            You successfully registered for the Philippines Dreamin’ Trailblazer Community
            Convention.
          </p>
          <p class="text-center text-sm">
            Be prepared to meet fellow Salesforce professionals from across the Philippines! The
            Trailblazer community welcomes you.
          </p>
          <p class="text-center text-sm">See you!</p>
        </div>
        <div class="md:pr-8 md:col-span-1 md:w-full md:ml-0 ml-8 col-span-2 w-3/4">
          <img src="/registered.png" alt="Image" />
        </div>
        <div class="col-span-2 flex justify-center mt-4">
          <button
            class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-300"
          >
            Go back to Home
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
input:focus ~ label,
input:not(:placeholder-shown) ~ label,
select:focus ~ label,
select:not(:placeholder-shown) ~ label {
  top: -0.5rem;
  font-size: 0.75rem;
  transform: translateY(-100%);
  color: #3498db;
}
</style>

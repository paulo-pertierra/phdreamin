<script setup>
import { reactive } from "vue";
import { useAPIEndpoint } from "../composables/server.connection"
import { useRouter } from "vue-router";

const router = useRouter()
const { postRegistreeDetails } = useAPIEndpoint()

const registree = reactive({
  firstName: "",
  lastName: "",
  contactEmail: "",
  contactNumber: "",
  company: "",
  salesforceUser: false,
  salesforceUserRole: ""
})

const errors = reactive({})
async function submitRequest() {
  const response = await postRegistreeDetails(registree)
  if (response.data.errors) {
    console.log("Contains errors!")
    response.data.errors.forEach((error) => {
      errors[error.path] = error.msg
    console.log(errors)
    })
    return
  }
  router.push("/successfully-registered")
}
</script>

<template>
  <div class="flex items-center justify-center min-h-screen p-2 bg-gray-100">
    <div class="max-w-4xl bg-white border border-gray-300 shadow-md rounded-xl p-8">
      <div class="grid grid-cols-2 gap-2">

          <img src="/registration.png" class="relative md:block md:left-0 left-1/2" alt="Image" />
        <div class="md:col-span-1 md:pt-2 col-span-2 w-80 md:w-full mx-auto">
          <h2 class="text-xl font-semibold mb-2 text-center">Register now</h2>
          <p class="text-black-600 text-sm mb-4 text-center">
            Please fill out the form below to register to #PHDreamin2023!
          </p>

          <div class="mb-4 relative md:ml-16">
            <input
              v-model="registree.firstName"
              type="text"
              placeholder=" "
              class="relative z-10 custom-input md:w-3/4 w-full p-2 focus:border-transparent focus:ring-0 text-sm"
            />
            <label
              class="absolute z-0 left-2 top-2 text-gray-500 transition-all duration-300 ease-in-out transform translate-y-0 cursor-text text-sm"
              >First Name</label
            >
            <div class="text-xs text-red-500" v-if="errors.firstName">{{ errors.firstName }}</div>
          </div>

          <div class="mb-4 relative md:ml-16">
            <input
              v-model="registree.lastName"
              type="text"
              placeholder=" "
              class="relative z-10 custom-input md:w-3/4 w-full p-2 focus:border-transparent focus:ring-0 text-sm"
            />
            <label
              class="absolute z-0 left-2 top-2 text-gray-500 transition-all duration-300 ease-in-out transform translate-y-0 cursor-text text-sm"
              >Last Name</label
            >
          </div>

          <div class="mb-4 relative md:ml-16">
            <input
              v-model="registree.contactEmail"
              type="text"
              placeholder=" "
              class="relative z-10 custom-input md:w-3/4 w-full p-2 focus:border-transparent focus:ring-0 text-sm"
            />
            <label
              class="absolute z-0 left-2 top-2 text-gray-500 transition-all text-sm duration-300 ease-in-out transform translate-y-0 cursor-text"
              >Email Address</label
            >
            <div class="text-xs text-red-500" v-if="errors.contactEmail">{{ errors.contactEmail }}</div>
          </div>
          <div class="mb-4 relative md:ml-16">
            <input
              v-model="registree.contactNumber"
              type="text"
              placeholder=" "
              class="relative z-10 custom-input md:w-3/4 w-full p-2 focus:border-transparent focus:ring-0 text-sm"
            />
            <label
              class="absolute z-0 left-2 top-2 text-gray-500 transition-all text-sm duration-300 ease-in-out transform translate-y-0 cursor-text"
              >Phone Number</label
            >
            <div class="text-xs text-red-500" v-if="errors.contactNumber">{{ errors.contactNumber }}</div>
          </div>
          <div class="mb-4 relative md:ml-16">
            <input
              v-model="registree.company"
              type="text"
              placeholder=""
              class="relative z-10 custom-input md:w-3/4 w-full p-2 focus:border-transparent focus:ring-0 text-sm"
            />
            <label
              class="z-0 absolute left-2 top-2 text-gray-500 transition-all duration-300 ease-in-out transform translate-y-0 cursor-text text-sm"
              >Company</label
            >
          </div>

          <div class="mb-4 relative text-sm md:ml-16">
            <select
              v-model="registree.salesforceUser"
              class="custom-input text-sm md:w-3/4 w-full p-2 focus:border-transparent focus:ring-0"
            >
              <option value="" disabled>Select an option</option>
              <option :value="true">Yes</option>
              <option :value="false">No</option>
            </select>
            <label
              class="absolute left-2 top-2 text-gray-500 transition-all duration-300 ease-in-out transform translate-y-0 cursor-text"
              >Are you a Salesforce professional?</label
            >
          </div>

          <div v-if="registree.salesforceUser" class="mb-4 relative text-sm md:ml-16">
            <select
              v-model="registree.salesforceUserRole"
              class="custom-input p-2 w-3/4 focus:border-transparent focus:ring-0 text-sm"
            >
              <option value="" disabled>Select a role</option>
              <option value="Salesforce Admin" selected>Salesforce Admin</option>
              <option value="Salesforce Developer">Salesforce Developer</option>
              <option value="Other">Other</option>
            </select>
            <label
              class="absolute left-2 top-2 text-gray-500 transition-all duration-300 ease-in-out transform translate-y-0 cursor-text text-sm w-3/4"
              >Select your role</label
            >
          </div>

          <div v-if="registree.salesforceUser && !(registree.salesforceUserRole === 'Salesforce Admin' || registree.salesforceUserRole === 'Salesforce Developer')" class="mb-4 relative text-sm md:ml-16">
            <input
              type="text"
              v-model="registree.salesforceUserRole"
              placeholder=""
              class="custom-input md:w-3/4 w-full p-2 focus:border-transparent focus:ring-0 text-sm"
            />
            <label
              class="absolute left-2 top-2 text-gray-500 transition-all duration-300 ease-in-out transform translate-y-0 cursor-text"
              >or kindly specify your role</label
            >
          </div>

          <div class="flex justify-center items-center">
            <button
              @click="submitRequest()"
              class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-300"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      <span class="mx-auto text-center block mt-4">Scroll down for more details.</span>
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
  color: #3498db;
  transition: all 0.3s;
}

.custom-input {
  background: none;
  border: none;
  border-bottom: 1px solid #3e3e3e;
  outline: none;
}
</style>

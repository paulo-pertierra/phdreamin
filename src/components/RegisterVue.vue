<script setup>
import { reactive, ref, watch } from "vue";
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
})

const role = ref("developer")

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
    <div class="w-3/4 bg-white border border-gray-300 shadow-md rounded-xl p-8 flex">
      <div class="grid grid-cols-2">
        <div class="md:pr-8 md:col-span-1 md:w-full col-span-2 w-1/2 h-1/2">
          <img src="/registration.png" class="ml-14 md:ml-0" alt="Image" />
        </div>

        <div class="md:col-span-1 md:pt-2 col-span-2">
          <h2 class="text-xl font-semibold mb-2 text-center">Register now</h2>
          <p class="text-black-600 text-sm mb-4 text-center">
            Enter your information to register at Philippines Dreamin' 2023
          </p>

          <div class="mb-4 relative md:ml-16">
            <input
              v-model="registree.firstName"
              type="text"
              placeholder=" "
              class="custom-input md:w-3/4 w-full p-2 focus:border-transparent focus:ring-0 text-sm"
            />
            <label
              class="absolute left-2 top-2 text-gray-500 transition-all duration-300 ease-in-out transform translate-y-0 cursor-text text-sm"
              >First Name</label
            >
            <div class="text-xs text-red-500" v-if="errors.firstName">{{ errors.firstName }}</div>
          </div>

          <div class="mb-4 relative md:ml-16">
            <input
              v-model="registree.lastName"
              type="text"
              placeholder=" "
              class="custom-input md:w-3/4 w-full p-2 focus:border-transparent focus:ring-0 text-sm"
            />
            <label
              class="absolute left-2 top-2 text-gray-500 transition-all duration-300 ease-in-out transform translate-y-0 cursor-text text-sm"
              >Last Name</label
            >
          </div>

          <div class="mb-4 relative md:ml-16">
            <input
              v-model="registree.contactEmail"
              type="text"
              placeholder=" "
              class="custom-input md:w-3/4 w-full p-2 focus:border-transparent focus:ring-0 text-sm"
            />
            <label
              class="absolute left-2 top-2 text-gray-500 transition-all text-sm duration-300 ease-in-out transform translate-y-0 cursor-text"
              >Email Address</label
            >
            <div class="text-xs text-red-500" v-if="errors.contactEmail">{{ errors.contactEmail }}</div>
          </div>
          <div class="mb-4 relative md:ml-16">
            <input
              v-model="registree.contactNumber"
              type="text"
              placeholder=" "
              class="custom-input md:w-3/4 w-full p-2 focus:border-transparent focus:ring-0 text-sm"
            />
            <label
              class="absolute left-2 top-2 text-gray-500 transition-all text-sm duration-300 ease-in-out transform translate-y-0 cursor-text"
              >Phone Number</label
            >
            <div class="text-xs text-red-500" v-if="errors.contactNumber">{{ errors.contactNumber }}</div>
          </div>
          <div class="mb-4 relative md:ml-16">
            <input
              v-model="registree.company"
              type="text"
              placeholder=" "
              class="custom-input md:w-3/4 w-full p-2 focus:border-transparent focus:ring-0 text-sm"
            />
            <label
              class="absolute left-2 top-2 text-gray-500 transition-all duration-300 ease-in-out transform translate-y-0 cursor-text text-sm"
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
              v-model="role"
              class="custom-input p-2 w-3/4 focus:border-transparent focus:ring-0 text-sm"
            >
              <option value="" disabled>Select a role</option>
              <option value="admin">Salesforce Admin</option>
              <option value="developer">Salesforce Developer</option>
              <option value="other">Others</option>
            </select>
            <label
              class="absolute left-2 top-2 text-gray-500 transition-all duration-300 ease-in-out transform translate-y-0 cursor-text text-sm w-3/4"
              >Select your role</label
            >
          </div>

          <div v-if="registree.salesforceUser && role ==='other' " class="mb-4 relative text-sm md:ml-16">
            <input
              type="text"
              placeholder=""
              class="custom-input md:w-3/4 w-full p-2 focus:border-transparent focus:ring-0 text-sm"
            />
            <label
              class="absolute left-2 top-2 text-gray-500 transition-all duration-300 ease-in-out transform translate-y-0 cursor-text"
              >Kindly specify your role</label
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
  border-bottom: 2px solid #000;
  outline: none;
}
</style>

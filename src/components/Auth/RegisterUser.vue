<template>
  <form @submit.prevent="registerUser">
    <div>
      <p v-if="error" class="text-red">Register Failed : {{ error.message }}</p>
    </div>
    <div class="row q-mb-md">
      <q-banner class="bg-grey-3 col">
        <template v-slot:avatar>
          <q-icon name="account_circle" color="primary" />
        </template>
        Register Your Account!
      </q-banner>
    </div>

    <span
      class="text-red text-caption text-weight-medium"
      v-if="!$v.name.required && $v.name.$dirty"
      >Name is required.</span
    >
    <span
      class="text-red text-caption text-weight-medium"
      v-if="!$v.name.minLength"
      >Name must be atleast {{ $v.name.$params.minLength.min }} characters</span
    >
    <span
      class="text-red text-caption text-weight-medium"
      v-if="!$v.name.alpha && $v.name.$dirty"
      >Aplhabet characters only.</span
    >
    <div class="row q-mb-md">
      <q-input
        class="col"
        outlined
        v-model.trim="name"
        label="Name"
        stack-label
      />
    </div>

    <span
      class="text-red text-caption text-weight-medium"
      v-if="(!$v.email.required || !$v.email.email) && $v.email.$dirty"
      >Valid email required.</span
    >
    <div class="row q-mb-md">
      <q-input class="col" outlined v-model="email" label="Email" stack-label />
    </div>

    <span
      class="text-red text-caption text-weight-medium"
      v-if="!$v.password.required && $v.password.$dirty"
      >Password is required.</span
    >
    <span
      class="text-red text-caption text-weight-medium"
      v-if="!$v.password.minLength || !$v.password.minLength"
      >Password must be between {{ $v.password.$params.minLength.min }} and
      {{ $v.password.$params.maxLength.max }}</span
    >
    <div class="row q-mb-md">
      <q-input
        class="col"
        type="password"
        outlined
        v-model="password"
        label="Password"
        stack-label
      />
    </div>

    <div class="row">
      <q-space />
      <q-btn type="submit" color="primary" label="Register" />
    </div>

    <div>
      <span class="text-subtitle2">Already have account?</span>
      <q-btn flat to="/login" color="primary" label="Login" />
    </div>
  </form>
</template>

<script>
import axios from "axios";
import swal from "sweetalert";
import {
  required,
  minLength,
  maxLength,
  email,
  alpha,
} from "vuelidate/lib/validators";

export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      role: "customer",
      error: "",
    };
  },
  validations: {
    name: {
      required,
      minLength: minLength(4),
      alpha,
    },
    email: {
      required,
      email,
    },
    password: {
      required,
      minLength: minLength(6),
      maxLength: maxLength(12),
    },
  },
  methods: {
    async registerUser() {
      this.$v.$touch();

      if (!this.$v.$invalid) {
        let userData = {
          name: this.name,
          email: this.email.toLowerCase(),
          password: this.password,
        };

        try {
          const response = await axios.post(
            "http://localhost:3000/user/register",
            userData
          );
          console.log(response);
          swal({
            text: 'User registered successfully!',
            icon: 'success'
          })
          this.$router.push("/login");
        } catch (error) {
          this.error = error;
          console.log(error);
        }
      }
    },
  },
};
</script>
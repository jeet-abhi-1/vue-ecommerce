<template>
  <form @submit.prevent="loginUser">
    <div class="row q-mb-md">
      <q-banner class="bg-grey-3 col">
        <template v-slot:avatar>
          <q-icon name="account_circle" color="primary" />
        </template>
        Login Your Account!
      </q-banner>
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
      <q-btn type="submit" color="primary" label="Login" />
    </div>
    <div>
      <span class="text-subtitle2">Don't have an account?</span>
      <q-btn flat to="/register" color="primary" label="Register" />
    </div>
  </form>
</template>

<script>
import { mapActions } from "vuex";
import { required, email } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  validations: {
    email: {
      required,
      email,
    },
    password: {
      required,
    },
  },

  methods: {
    ...mapActions(["userLogin", "getDetails"]),
    async loginUser() {
      this.$v.$touch();

      if (!this.$v.$invalid) {
        const user = {
          email: this.email,
          password: this.password,
        };

        try {
          await this.userLogin(user);
          this.getDetails();
        } catch (error) {
          console.log(error);
        }
      }
    },
  },
};
</script>
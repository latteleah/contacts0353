<template>
  <h1>Login</h1>
  <v-container id="container">
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
          v-model="username"
          :rules="identifierRules"
          label="Username"
          required
      ></v-text-field>

      <v-text-field
          v-model="password"
          :rules="passwordRules"
          label="Password"
          type="password"
          required
      ></v-text-field>

      <v-btn :disabled="!valid" color="#f7bedb" class="mr-4" @click="submit">
        Login
      </v-btn>

      <v-btn color="#bedff7" class="mr-4" @click="reset"> Reset </v-btn>
    </v-form>
  </v-container>

</template>

<script>

import axios from 'axios'

export default {
  data: () => ({
    username: '',
    password: '',
    valid: true,
    identifierRules: [(v) => !!v || "Username is required"],
    passwordRules: [(v) => !!v || "Password is required"],
    errorMessage: ''
  }),

  methods: {
    async submit() {
      if (await this.$refs.form.validate()) {
        try {
          let response = await axios.post("/login",{
            username: this.username,
            password: this.password
          })
          const token = response.data.token
          localStorage.setItem('token', token)
          this.$router.push('/users')

        }
        catch (error) {
          window.alert("Invalid username or password.")
          this.$refs.form.reset();
          this.errorMessage = error.response.data.message
        }
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
};
</script>
<style>
 h1{
  padding-top: 100px;
}
#container{
  padding-top: 50px;
}

</style>
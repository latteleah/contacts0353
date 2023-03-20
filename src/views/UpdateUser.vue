<template>
  <div className="updateuser">
    <h1>Update Contact</h1>
    <div class="container" v-if="loadedData">
      <table class="table table-striped">
        <v-row>
          <v-col cols="3" class="d-flex align-center justify-center">
            <span>First name:</span>
          </v-col>
          <v-col cols="9">
            <v-text-field
                v-model="User.firstName"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="3" class="d-flex align-center justify-center">
            <span>Middle name:</span>
          </v-col>
          <v-col cols="9">
            <v-text-field
                v-model="User.middleName"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="3" class="d-flex align-center justify-center">
            <span>Last name:</span>
          </v-col>
          <v-col cols="9">
            <v-text-field
                v-model="User.lastName"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="3" class="d-flex align-center justify-center">
            <span>Gender:</span>
          </v-col>
          <v-col cols="9">
            <v-text-field
                v-model="User.gender"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="3" class="d-flex align-center justify-center">
            <span>Email:</span>
          </v-col>
          <v-col cols="9">
            <v-text-field
                v-model="User.email"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="3" class="d-flex align-center justify-center">
            <span>Mobile:</span>
          </v-col>
          <v-col cols="9">
            <v-text-field
                v-model="User.mobile"
            ></v-text-field>
          </v-col>
        </v-row>
      </table>
    </div>
    <br>
    <router-link to="/users">
      <button type="submit" @click="updateToAPI">Submit</button>
    </router-link>
    <!-- @click == v-on:click -->
  </div>
</template>
<script>

import axios from 'axios'

export default {
  name: 'updateuser',
  data() {
    return {
      loadedData: false,
      User: {
        contactID: this.$route.params.userId,
        firstName: null,
        lastName: null,
        middleName: null,
        gender: null,
        email: null,
        mobile:null,
      }
    }
  },
  methods: {
    updateToAPI() {
      console.log(this.User)
      axios.post(process.env.BACKEND_URL + '/users/' + this.$route.params.userId, this.User)
          .then((response) => {
            console.log(response)
          })
          .catch((error) => {
            console.log(error)
          })
    }
  },
  mounted() {
    axios.get(process.env.BACKEND_URL + '/users/' + this.$route.params.userId)
        .then((response) => {
          console.log(response.data)
          this.User = response.data[0]
          this.loadedData = true
        })
        .catch((error) => {
          console.log(error)
        })
  }
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
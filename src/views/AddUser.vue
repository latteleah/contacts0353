<template>
  <div class="adduser">
    <h1>Add User page</h1>
    <v-container>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field
            v-model="user.contactID"
            :rules="contactIDRules"
            label="contactID"
            required
        ></v-text-field>
        <v-text-field
            v-model="user.firstName"
            :rules="nameRules"
            label="FirstName"
            required
        ></v-text-field>
        <v-text-field
            v-model="user.middleName"
            :rules="middleNameRules"
            label="MiddleName"
        ></v-text-field>
        <v-text-field
            v-model="user.lastName"
            :rules="nameRules"
            label="LastName"
            required
        ></v-text-field>
        <v-text-field
            v-model="user.gender"
            :rules="genderRules"
            label="Gender"
            required
        ></v-text-field>
        <v-text-field
            v-model="user.email"
            :rules="emailRules"
            label="Email"
        ></v-text-field>
        <v-text-field
            v-model="user.mobile"
            :rules="mobileRules"
            label="Mobile"
        ></v-text-field>
      </v-form>
      <v-btn :disabled="!valid" color="#f7bedb" class="mr-4" @click="addToAPI">
        Add
      </v-btn>
      <v-btn :color="f7bedb" class="mr-4" @click="reset">
        Clear
      </v-btn>
      <v-btn :color="f7bedb" class="mr-4" @click="cancel">
        Cancel
      </v-btn>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios'

export default{
  data(){
    return{
      valid: true,
      nameRules: [(v) => !!v || "First name is required",
        v => /^[a-zA-Z]+$/.test(v) || 'Name must contain only alphabetical characters'],
      genderRules: [(v) => !!v || "Gender is required",
        v => /^[FM]$/.test(v) || "You must enter 'F' or 'M'"],
      emailRules: [(v) => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v) || "Email must be in standard format"],
      contactIDRules: [(v) => /^[0-9-+\s]+$/.test(v)
          || "contactID must be numeric"],
      mobileRules: [(v) => /^[0-9-+\s]+$/.test(v)
          || "mobile number must be in standard format"],
      middleNameRules: [(v) => /^[a-zA-Z]+$/.test(v) || 'Name must contain only alphabetical characters'],
      errorMessage: '',
      user:{
        contactID: '',
        firstName: '',
        lastName: '',
        middleName: '',
        gender: '',
        email: '',
        mobile: '',
      }
    }
  },
  methods: {
    addToAPI(){
      if (this.$refs.form.validate()) {
        try {
          console.log(this.user)
          axios.post(process.env.BACKEND_URL + '/users' , this.user)
              .then((response) => {
                console.log(response)
              }).catch((error) => {
            console.log(error)
          })
          this.$router.push('./users')
        }
        catch (error) {
          this.errorMessage = error.response.data.message
        }
      }
    }
    ,
    cancel(){
      this.$refs.form.reset()
      this.$router.push('./users')
    },
    reset(){
      this.$refs.form.reset()
    }
  }
}
</script>
<style>

  .adduser {
    min-height: 100vh;
    padding-top: 80px;
    align-items: center;
  }

</style>

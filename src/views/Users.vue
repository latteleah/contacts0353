<template>
  <div class="users">
    <h1>User page</h1>
    <v-container>
      <v-row>
        <v-col>
        <v-text-field
            v-model="search"
            label="Filter by first/last name"
            outlined
            dense
        ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
    <table class="table table-striped">
      <tr>
        <th scope="col">First name</th>
        <th scope="col">Middle name</th>
        <th scope="col">Last name</th>
        <th scope="col">Gender</th>
        <th scope="col">Email</th>
        <th scope="col">Mobile</th>
        <th scope="col">Action</th>
      </tr>
      <tbody>
      <tr v-for="auser in filterUsers" v-bind:key="auser.id">
        <td>{{auser.firstName}}</td>
        <td>{{auser.middleName}}</td>
        <td>{{auser.lastName}}</td>
        <td>{{auser.gender}}</td>
        <td>{{auser.email}}</td>
        <td>{{auser.mobile}}</td>
        <td>
          <router-link :to="{path:'updateuser' , name: 'updateuser', params: {userId: auser.contactID}}">
            <button type="button" class="btn btn-warning">Edit</button>
          </router-link>
          <button type="button" class="btn btn-danger" @click="deleteUser(auser.contactID)">Delete</button>
        </td>
      </tr>
      </tbody>
    </table>
    <v-container>
    <router-link to="adduser">
      <button type="button" class="btn btn-primary-light">Add user</button>
    </router-link>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios'
import Router from "@/router";

export default {
  name: 'Users',
  data() {
    return {
      search: '',
      Users : [],
      uid: ''
    }
  },
  mounted() {
    axios.get(process.env.BACKEND_URL+'/users')
        .then((response)=>{
          console.log(response.data)
          this.Users = response.data
        })
        .catch((error)=>{
          console.log(error)
          if(error.response.status === 401){
            window.alert("You are not logged in.")
            this.$router.push('/login')
          }
        })
  },
  computed :{
    filterUsers: function(){
      return this.Users.filter((user)=>{
        let filteredFN = user.firstName.match(new RegExp(this.search, 'i'))
        let filteredLN = user.lastName.match(new RegExp(this.search, 'i'))
        return filteredFN || filteredLN
      })
    }
  },
  methods:{
    deleteUser(UserId) {
      axios.delete(process.env.BACKEND_URL + "/users/"+UserId)
          .then((response)=>{
            console.log('Delete User Id: '+UserId)
          })
          .catch((error)=>{
            console.log(error)
          })
      window.location.reload()
    }
  }
}
</script>

<style>
.users {
  min-height: 100vh;
  padding-top: 80px;
  display: block;
  align-items: center;
}
</style>


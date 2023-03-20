<template>
  <h1>Logging out page</h1>
</template>


<script>
import axios from 'axios'

export default{
  name : 'Logout',
  mounted() {
    localStorage.removeItem('token');
    this.$router.push('/login');
  }
  }
</script>
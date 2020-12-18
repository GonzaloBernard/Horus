<template>
  <div class="private">
    <h1>This is a private page</h1>
    <button @click="logOut">LogOut</button>
  </div>
</template>
<script>


import 'firebase/auth';
  export default {
    name: 'private',
    methods: {
      logOut() {
        this.firebase
          .auth()
          .signOut()
            .then( () => {
              this.$router.replace('/')
            })
      }
    }
  }
</script>
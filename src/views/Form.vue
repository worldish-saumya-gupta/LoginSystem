<template>
  <div class="form">
    <div v-if="showSignInForm">
      <SignIn/>
    </div>
    <div v-else>
      <SignUp/>
    </div>
  </div>
</template>

<script>

import SignUp from '@/components/SignUp.vue'
import SignIn from '@/components/SignIn.vue';

export default {
  name: 'Form',
  components: {
    SignIn, SignUp
  },
  computed: {
    showSignInForm(){
      return  this.$store.getters['showSignInForm']
    }
  },
}
</script>

<template>
  <div class="sign-up-form">
    <div class="logo">
        <img src="../assets/helen-edu-logo.svg">
    </div>
    <form @submit.prevent="signUp">
      <div class="flex-col-start">
        <h3 class="montserrat-medium">Welcome To Helen Edu</h3>
        <p class="gray">To get started, We need few details from you to create your account</p>
      </div>
      <div class="element-form">
            <label for="name">Name</label><br>
            <input type="text" v-model="name" required>
            <p v-if="msg.name">{{msg.name}}</p>
        </div>
      <div class="element-form">
            <label for="email">Email</label><br>
            <input type="email" v-model="email" required>
        </div>
        <div class="element-form">
            <label for="password">Password</label><br>
            <input type="password" v-model="password" required>
        </div>
        <div class="flex-col-start">  

        <p class="gray">Password length must be between 6 and 40 characters</p>
        <p>By clicking on Sign Up, <a href="#" class="gray">I agree to Worldish AB's Privacy policy</a></p>
      </div>
        
        <div class="btn flex-col">
            <button type="submit">Submit</button>
            <p><a href="#" style="text-decoration: none; color: #FF007F;">Cancel</a></p>
        </div>
      <div>
        <p>Already a user? <a @click="toggleForm">Sign In</a></p>
      </div>
    </form>
  </div>
</template>

<script>

export default {
  components:{},
  data() {
    return {
      name:'',
      email: '',
      password: '',
      msg:{
        name:''
      }
    };
  },
  methods: {
    toggleForm(){
      return this.$store.dispatch('toggleForm')
    },

    signUp() {
      if(this.userNameValidate()){
        alert("Signup Successfully!")
      }
    },
    
    userNameValidate() {
    if (!/^\S+$/.test(this.name)) {
        this.msg.name = 'Username should not contain any whitespace';
        return false;
    } 

    else if (/^_|_$/.test(this.name)) {
        this.msg.name = 'Username should not start or end with _';
        return false;
    }
    
    else {
        this.msg.name = '';
        return true;
    }
}
  }
}
</script>

<style scoped>
/* form css */
.sign-up-form {
    padding: 10px;
    background: white;
    width: 420px;
    border-radius: 20px;
    border:1px solid rgb(196, 193, 193);
    margin-top: 50px;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px !important;         
}

form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.element-form input {
    margin: 10px 0px;
    width: 300px;
    padding: 20px 30px;
    border-radius: 20px;
    border: 0.5px solid grey;
    box-shadow: -4px 4px 4px rgba(0, 0, 0, .15) ;
}

.element-form {
    margin: 15px
}

.flex-row {
    display: flex;
    justify-content: space-around;
}

form button{
  background: #FF007F;
  padding: 20px 30px;
  border: none;
  color: #fff;
  border-radius: 30px;
  font-weight: 700;
  font-size: 16px ;
  box-shadow: -4px 4px 4px rgba(0, 0, 0, .15) ;
  height: auto ;
  align-items: center;
  line-height: 22px ;
}

form a{
    text-decoration: underline;
    color: black;
    font: bold;
}

form label{
    color: gray
}

.gray{
    color: gray;
}

.flex-col{
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 30px;
}

.flex-col-start{
  display: flex;
  flex-direction: column;
  align-items:start;
  padding: 0px 55px;
}

/* google font class */
.montserrat-medium{
  font-family: "Montserrat", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
}

/* logo css */
.logo{
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items:center ;
}

.logo img{
    margin-top: 4rem;
    margin-block:2rem ;
    width: 20%;
}

/* media query */
@media only screen and (max-width: 516px) {
    .flex-row{
        align-items: center;
        flex-direction: column;
    }
    .element-form input {
    /* width: 100%;  */
    width: 250px;
    }
}

@media only screen and (max-width: 576px) {
  form{
    position:absolute;
    z-index: 1;
  }
  
  .sign-up-form{
    padding: 0px;
    border-radius: 0px;
    border:none;
    margin-top: 0px;
    box-shadow: none !important;      
  }

  /* .logo{
    margin-right: 4rem;
  } */
  /* for relative app postion */
  .element-form{
    margin-right: 4rem;

  }
  .flex-col-start{
    padding: 0px 20px;
  }
} 

/* 344px , 360px   --- padding : 0 ; margin-left: -1px */
/* @media only screen and (max-width: 360px) and (min-width: 344px) {
    .element-form{
        margin-left: -1rem !important;
    }
    .flex-col-start{
    padding: 0px;
  }
} */

</style>

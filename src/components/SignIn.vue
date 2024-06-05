<template>
  <div class="sign-in-form">
    <div class="logo">
        <img src="../assets/helen-edu-logo.svg" alt="" srcset="">
    </div>
      <form @submit.prevent="signIn">
          <div class="element-form">
              <label for="email">Email</label><br><br>
              <input type="email" v-model="email" required>
              <p v-if="msg.email">{{msg.email}}</p>
          </div>
          <div class="element-form">
              <label for="password">Password</label><br><br>
              <input type="password" v-model="password" required>
              <p v-if="msg.password">{{msg.password}}</p>
          </div>
          <div class="flex-row">
              <div class="flex-start">
                  <input type="checkbox">
                  <p class="gray">Remenber me</p>
              </div>
              <p>Forgot password?</p>
          </div>
          <div class="btn-primary">
              <button type="submit">Sign in</button>
          </div>
          <div>
              <p>Need an account? <a @click="toggleForm" >Sign up</a></p>
          </div>
      </form>
  </div>
</template>

  <script>

  export default {
      components: {},
      data() {
          return {
              email: '',
              password: '',
              msg: {
                  email: '',
                  password: ''
              },
          };
      },
      methods: {
        toggleForm(){
            return this.$store.dispatch('toggleForm')
        },

          signIn() {
              if (this.validateEmail() && this.validatePassword()) {
                  alert("Congratulations!, You are Successfully Signin.")
              }
          },
        
          validateEmail() {
              const emailRegex = /^\S+@\S+\.\S+$/;
              if (emailRegex.test(this.email)) {
                  this.msg.email = '';
                  return true;
              } else {
                  this.msg.email = 'Email should contain (@ and dot).';
                  return false;
              }
          },
          validatePassword() {
              if (this.password.length === 0) {
                  this.msg.password = 'Password cannot be empty';
                  return false;
              } else if (!/^[A-Z]/.test(this.password)) {
                  this.msg.password = 'First letter of password should be capital';
                  return false;
              } else if (!/(?=.*[a-z])/.test(this.password)) {
                  this.msg.password = 'Atleast one character should be lower';
                  return false;
              } else if (!/[!@#$%^&*]/.test(this.password)) {
                  this.msg.password = 'Password must contain a special character';
                  return false;
              } else if (this.password.length < 6 || this.password.length > 20) {
                  this.msg.password = 'Password length should be between 6 to 20';
                  return false;
              } else if (!/(?=.*\d)/.test(this.password)) {
                  this.msg.password = 'Password should contain at least one digit';
                  return false;
              } else {
                  this.msg.password = '';
                  return true;
              }
          }
  
      }
  }
  </script>
  
  <style scoped>
  /* form css */
  .sign-in-form {
      padding: 10px;
      background: white;
      border:1px solid rgb(196, 193, 193);
      width: 420px;
      border-radius: 20px;
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
      width: 300px;
      padding: 20px 30px;
      border-radius: 20px;
      border: 0.5px solid gray;
      box-shadow: -4px 4px 4px rgba(0, 0, 0, .15);
  }
  
  .element-form {
      margin: 15px
  }
  
  .flex-row {
      display: flex;
      justify-content: space-around;
      width: 100%;
  
  }
  
  form button {
      background: #5bb9eb;
      padding: 20px 30px;
      border: none;
      color: #fff;
      border-radius: 30px;
      font-weight: 700;
      font-size: 16px;
      box-shadow: -4px 4px 4px rgba(0, 0, 0, .15);
      height: auto;
      align-items: center;
      line-height: 22px;
  }
  
 form a {
      text-decoration: underline;
      color: black;
      font: bold;
  }
  
  form label {
      color: gray
  }
  
  .gray {
      color: gray;
  }
  
  .flex-start {
      display: flex;
      justify-content: start;
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
  
      .flex-row {
          align-items: center;
          flex-direction: column;
      }
  
      .element-form input {
          /* width: 100%; */
          width: 250px;
      }
  
  }

@media only screen and (max-width: 576px) {
  form{
    position:absolute;
    z-index: 1;
  }
  .sign-in-form{
    padding: 0px;
    border-radius: 0px;
    border:none;
    margin-top: 0px;
    box-shadow: none !important;      
  }
  /* .logo{
    margin-right: 3rem;
  } */
  .element-form{
    margin-left: 2rem;
  }
} 

/* @media only screen and (max-width: 360px) {
    .element-form{
        margin-left: 1rem !important;
    }
}

@media only screen and (max-width: 430px) and (min-width: 412px) {
    .element-form{
        margin-left: 3rem !important;
    }
} */

</style>
  
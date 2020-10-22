<template>
  <div id="login">
    <div class="grey-container">
      <div class="left">
        <div class="text">
          <h1>Login</h1>
          <p>Login to your account to always be in touch with your project</p>
        </div>
        <form @submit.prevent>
          <div class="inputs">
            <input type="text" placeholder="Email" v-model.trim="email" />
            <input type="text" placeholder="Password" v-model.trim="password" />
            <button @click="login">SIGN IN</button>
          </div>
        </form>
        <div class="links">
          <a>Forgot password ? </a>
        </div>
      </div>

      <div class="overlay">
        <div class="text">
          <h1>Ready to collaborate ?</h1>
          <p>
            This awesome tool will help you to be closer to your projects than
            ever.
          </p>
          <p>
            You'll get a daily feedback of all that's been going in the
            development process
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Auth",
  data(){
    return{
      email:'',
      password:''
    }
  },
  methods: {
    login(){
      this.$store.dispatch('login')
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";
#login {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 10%;

  .grey-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    padding: 0;
    height: 50%;
  }

  .overlay {
    width: 50%;
    height: 100%;
    padding: 20px;
    background: linear-gradient($darkred, $lightred);

    display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
    .text {
      display: flex;
      flex-direction: column;
	  justify-content: space-evenly;
	  height: 70%;
      h1 {
        text-align: center;
        font-size: 2.8vw;
      }
    }
  }

  .left {
    width: 50%;
    height: 70%;
    padding: 20px;
    h1 {
      text-align: center;
    }

    .links {
      padding: 10px;
      a {
        color: $lightred;
      }
    }
    form {
      .inputs {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;

        input {
          border: none;
          border-radius: 5px;
          height: 30px;
          margin: 10px 0;
          width: 90%;
          background-color: $lightgrey;
          font-size: 1.5vw;
        }

        button {
          height: 30px;
          margin: 0px 10px;
          min-width: 100px;
          padding: 5px;
          border: none;
          border-radius: 5px;
          color: $lightgrey;
          font-size: 1.4vw;
          margin-top: 20px;
          background-color: $darkred;
        }
      }
    }
  }
}
</style>
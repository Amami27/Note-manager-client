<template>
  <div>
    <header class="container">
      <div>
        <router-link to="/">
          <Logo />
        </router-link>
      </div>
    </header>
    <div>
      <section>
        <div class="form">
          <div class="login">
            <h1>LOGIN</h1>
          </div>
          <form @submit.prevent="login">
            <div>
              <div class="form-item">
                <label for="email">Email Address</label>
                <input type="email" name="mail" placeholder="Email Address" v-model="user.email" />
              </div>

              <div class="form-item">
                <label for="password">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  v-model="user.password"
                />
              </div>
            </div>

            <div class="form-item">
              <CustomBtn type="submit" value="Login" class="butt" />
            </div>
          </form>

          <div class="form-item hr">
            <hr />
          </div>
          <div class="form-item auth-check">
            <span>Don't have an account?</span>
            <router-link to="/Register">
              <span>Sign Up</span>
            </router-link>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
import CustomBtn from "../components/Button";
import Logo from "../components/Logo";

export default {
  name: "login",
  components: {
    CustomBtn,
    Logo
  },
  data() {
    return {
      user: {
        email: "",
        password: ""
      }
    };
  },
  computed: {
    isValid() {
      if (this.user.email == "" || this.user.password == "") {
        return false;
      } else {
        return true;
      }
    }
  },

  methods: {
    login() {
      if (this.isValid) {
        this.$http
          .post("http://localhost:9000/login", this.user)
          .then(response => {
            console.log(this.user);
            alert(response.data.message);
            this.$router.push("/NewEntry");
          })
          .catch(error => {
            alert(error.response.data.message);
          });
      } else {
        alert("All feilds are required");
      }
    }
  }
};
</script>
<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3em;
}

.form {
  max-width: 400px;
  margin: 0 auto;
  padding: 1em 1.5em;
  border-radius: 4px;
  color: #2c3e50;
}

.form-item {
  margin-bottom: 2em;
  max-width: 100%;
}

input {
  width: calc(100% - 10px);
  margin: 0.5em 0;
  padding: 1em 5px;
  outline: 0;
  font-size: 1em;
  border-radius: 3px;
  border: none;
  box-shadow: 1px 1px 2px 1px rgb(0, 0, 0, 0.4);
}

label {
  font-size: 1.1em;
  font-weight: 700;
}

.login {
  text-align: center;
}

.auth-check {
  text-align: center;
}

span {
  padding-right: 0.5em;
}

a {
  text-decoration: none;
}
</style>

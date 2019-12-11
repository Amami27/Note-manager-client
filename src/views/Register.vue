<template>
  <div class="register">
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
          <div class="signup">
            <h1>SIGN UP</h1>
          </div>
          <form v-on:submit.prevent="submitForm">
            <div>
              <div class="form-item">
                <label for="fistName">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  v-model="newUser.firstName"
                />
              </div>

              <div class="form-item">
                <label for="lastName">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  v-model="newUser.lastName"
                />
              </div>

              <div class="form-item">
                <label for="email">Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  v-model="newUser.email"
                />
              </div>

              <div class="form-item">
                <label for="password">Password</label>
                <input type="password" placeholder="Password" v-model="newUser.password" />
              </div>
            </div>

            <div class="form-item">
              <CustomBtn type="submit" value="Sign Up" class="butt" />
            </div>
          </form>

          <div class="form-item hr">
            <hr />
          </div>
          <div class="form-item auth-check">
            <span>Already have an account?</span>
            <router-link to="/Login">
              <span>Login here</span>
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
  name: "register",
  components: {
    CustomBtn,
    Logo
  },
  data() {
    return {
      newUser: {
        firstName: "",
        lastName: "",
        email: "",
        password: ""
      },
      allusers: []
    };
  },

  computed: {
    isValid() {
      if (
        this.newUser.firstName == "" ||
        this.newUser.lastName == "" ||
        this.newUser.email == "" ||
        this.newUser.password == ""
      ) {
        return false;
      } else {
        return true;
      }
    }
  },

  methods: {
    submitForm() {
      if (this.isValid) {
        console.log(this.user);
        this.$http
          .post("http://localhost:9000/signup", this.newUser)
          .then(response => {
            console.log(response);
            this.newUser = {
              firstName: "",
              lastName: "",
              email: "",
              password: ""
            };
            alert(response.data.message);
            this.$router.push("/Login");
          })
          .catch(error => {
            alert(error.response.data.message);
          });
      } else {
        alert("All feilds are compulsory");
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

.signup {
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

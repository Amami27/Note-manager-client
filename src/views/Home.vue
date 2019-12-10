<template>
  <div class="home">
    <header class="container">
      <router-link to="/">
        <Logo />
      </router-link>
      <div>
        <router-link to="/Login">
          <Butt value="Login" />
        </router-link>
      </div>
    </header>
    <div>
      <div class="image">
        <img src="https://images.pexels.com/photos/745760/pexels-photo-745760.jpeg" />
      </div>
      <div class="signup-btn">
        <router-link to="/Register">
          <CustomBtn type="button" value="Sign Up- It's Free!" class="butt" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import CustomBtn from "../components/Button";
import Butt from "../components/Butt";
import Logo from "../components/Logo";
// @ is an alias to /src

export default {
  name: "home",
  components: {
    Butt,
    CustomBtn,
    Logo
  }
};
</script>
<style scoped>
.home {
  text-align: center;
}

header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.image {
  margin: 0 auto;
}

.image img {
  height: 400px;
  width: 100%;
}

.signup-btn {
  margin-top: 3em;
}

a {
  text-decoration: none;
}
</style>

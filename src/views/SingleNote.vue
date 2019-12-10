<template>
  <div class="one">
    <header class="container">
      <div>
        <router-link to="/">
          <Logo />
        </router-link>
      </div>
      <div>
        <router-link :to="{name:'notes'}">
          <Butt value="Go to Your Notes" />
        </router-link>
      </div>
    </header>
    <form>
      <div>
        <h2>{{currentNote.title}}</h2>
        <p>{{currentNote.content}}</p>
      </div>

      <div class="form-item">
        <router-link :to="{name:'edit', params: { id: currentNote._id}}">
          <CustomBtn type="button" value="Edit" class="butt" />
        </router-link>
      </div>
    </form>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
import CustomBtn from "../components/Button";
import Butt from "../components/Butt";
import Logo from "../components/Logo";

export default {
  name: "single",
  components: {
    CustomBtn,
    Butt,
    Logo
  },

  computed: { ...mapState(["currentNote"]) },

  mounted() {
    this.getOne(this.$route.params.noteid);
  },
  methods: {
    ...mapActions(["getOne"])
  }
};
</script>

<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.one {
  margin: 0 auto;
  max-width: 80%;
}

form {
  margin-top: 6em;
}

.form-item {
  margin-top: 3em;
}

a {
  text-decoration: none;
}

p {
  font-weight: 500;
  font-size: 16px;
}
</style>
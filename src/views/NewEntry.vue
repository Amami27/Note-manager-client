<template>
  <div>
    <header class="container">
      <div>
        <router-link to="/">
          <Logo />
        </router-link>
      </div>
      <div>
        <router-link to="/AllNotes">
          <Butt value="Go to Your Notes" />
        </router-link>
      </div>
    </header>
    <div>
      <section>
        <div class="form">
          <div class="message">
            <span>Start creating your notes here</span>
          </div>

          <form v-on:submit.prevent="submitForm()">
            <div>
              <div class="form-item">
                <label for="title">Title</label>
                <input class="input" v-model="newNote.title" />
              </div>

              <div class="form-item">
                <label for="content">Content</label>
                <textarea rows="10" v-model="newNote.content" />
              </div>
            </div>

            <div class="form-item">
              <CustomBtn type="submit" value="Create" />
            </div>
          </form>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import CustomBtn from "../components/Button";
import Butt from "../components/Butt";
import Logo from "../components/Logo";

export default {
  name: "new",
  components: {
    CustomBtn,
    Butt,
    Logo
  },
  data() {
    return {
      newNote: {
        title: "",
        content: ""
      }
    };
  },
  mounted() {},
  methods: {
    submitForm() {
      console.log(this.newNote);
      this.$http
        .post("http://localhost:9000/create", this.newNote)
        .then(response => {
          console.log(response);
          this.newNote = {
            title: "",
            content: ""
          };
          this.$router.push("/AllNotes");
          alert(response.data.message);
        })
        .catch(error => {
          alert(error.response);
        });
    }
  }
};
</script>

<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* padding: 0 7.2em; */
  padding: 0 18%;
}

.form {
  max-width: 400px;
  margin: 0 auto;
  padding: 1em 1.5em;
  border-radius: 4px;
}

.form-item {
  margin-bottom: 2em;
  max-width: 100%;
}

.input {
  width: calc(100% - 10px);
  margin: 0.5em 0;
  padding: 1em 5px;
  outline: 0;
  font-size: 1em;
  border-radius: 3px;
  border: none;
  box-shadow: 1px 1px 2px 1px rgb(0, 0, 0, 0.4);
}

textarea {
  width: calc(100% - 7px);
  border-radius: 3px;
  box-shadow: 1px 1px 2px 1px rgb(0, 0, 0, 0.4);
  outline: none;
}

label {
  font-size: 1.1em;
  font-weight: 700;
  color: #2c3e50;
}

.message {
  text-align: center;
  color: #c8c3c3;
}

a {
  text-decoration: none;
}
</style>

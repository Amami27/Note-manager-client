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
            <span>Edit this note</span>
          </div>

          <form v-on:submit.prevent="editForm()">
            <div>
              <div class="form-item">
                <label for="title">Title</label>
                <input class="input" v-model="newNote.title" />
              </div>

              <div class="form-item">
                <label for="content">Content</label>
                <textarea rows="10" v-model="newNote.content"></textarea>
              </div>
            </div>

            <div class="form-item">
              <CustomBtn type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import CustomBtn from "../components/Button";
import Butt from "../components/Butt";
import Logo from "../components/Logo";

export default {
  name: "edit",
  components: {
    CustomBtn,
    Butt,
    Logo
  },

  computed: { ...mapState(["currentNote"]) },

  data() {
    return {
      newNote: {
        title: "",
        content: ""
      }
    };
  },
  mounted() {
    this.$http
      .get(`http://localhost:9000/singlenote/${this.$route.params.id}`)
      .then(response => {
        console.log(response.data);
        this.newNote = response.data.data;
      })
      .catch(error => {
        console.log(error.response);
      });
  },
  methods: {
    editForm() {
      this.$http
        .put(
          `http://localhost:9000/noteupdate/${this.$route.params.id}`,
          this.newNote
        )
        .then(response => {
          console.log(response);
          alert(response.data.message);
          this.newNote = {
            title: "",
            content: ""
          };
          console.log("note");
        })
        .catch(error => {
          console.log(error.response.message);
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
  flex-wrap: wrap;
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

label {
  font-size: 1.1em;
  font-weight: 700;
  color: #2c3e50;
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

.message {
  text-align: center;
  color: #c8c3c3;
}

a {
  text-decoration: none;
}

textarea {
  width: calc(100% - 7px);
  box-shadow: 1px 1px 2px 1px rgb(0, 0, 0, 0.4);
  border-radius: 3px;
  outline: none;
}
</style>
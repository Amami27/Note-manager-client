<template>
  <div>
    <header class="container">
      <div>
        <router-link to="/">
          <Logo />
        </router-link>
      </div>
    </header>
    <form>
      <ul>
        <h1>All Notes</h1>
        <p class="message">Click title to view note</p>
        <li v-for="(note, index) in allNotes" v-bind:key="note._id">
          <div class="notes">
            <div>
              <h2>
                <router-link :to="`/note/${note._id}`">{{note.title}}</router-link>
              </h2>
              <span>
                <i class="fas fa-calendar-alt"></i>
                {{ createdAt() }}
              </span>
              <p>{{note.content}}</p>
            </div>
            <div class="delete">
              <button type="submit" v-on:click.prevent="deleteButton(index)">
                <i class="fas fa-trash"></i>
              </button>
            </div>
          </div>
          <div>
            <hr class="form-item" />
          </div>
        </li>
      </ul>

      <div class="form-item customBtn">
        <router-link to="/NewEntry">
          <CustomBtn class="butt" type="submit" value="Create" />
        </router-link>
      </div>
    </form>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import CustomBtn from "../components/Button";
import Logo from "../components/Logo";

var moment = require("moment");

export default {
  name: "notes",
  moment: moment,
  components: {
    CustomBtn,
    Logo
  },

  computed: { ...mapGetters(["allNotes", "singleNote"]) },

  created() {
    this.getAll();
  },

  mounted() {
    this.getAll();
  },

  methods: {
    createdAt() {
      var today = new Date();
      var date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();

      return date;
    },
    deleteButton(index) {
      this.deleteNote(this.allNotes[index]._id);
      this.allNotes.splice(index, 1);
    },
    ...mapActions(["getAll", "getOne", "deleteNote"]),

    display(id) {
      this.getOne(id);
      //  this.$router.push('/SingleNote')
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

form {
  margin: 0 1em;
  color: #2c3e50;
}

form h1 {
  text-align: center;
  font-size: 30px;
  letter-spacing: 2px;
  font-weight: 800;
}

.message {
  text-align: center;
  color: #c8c3c3;
}

.form-item {
  margin-bottom: 2em;
  max-width: 100%;
}

h2 {
  text-transform: uppercase;
}

.notes {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3em;
}

.notes a {
  color: #2c3e50;
}

a {
  text-decoration: none;
}

li {
  list-style: none;
}

.butt {
  width: calc(100% - 2.3em);
  margin: 0 0 0 2em;
}

ul {
  width: calc(100% - 3em);
  font-weight: 500;
  font-size: 16px;
}

.delete button {
  background: #efebeb;
  border: none;
  font-weight: 900;
  font-size: 30px;
  color: red;
  transition: 0.3s;
  outline: none;
  font-size: 20px;
}

.delete button:hover {
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.3);
  transform: translateY(-1px);
  color: #2c3e50;
  border-radius: 50%;
}

span {
  font-weight: 600;
  font-size: 15px;
  color: #2c3e50;
  opacity: 0.7;
}

.customBtn {
  margin-top: 4em;
}
</style>
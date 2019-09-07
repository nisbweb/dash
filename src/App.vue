<template>
  <div id="app">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            alt="Bulma: Free, open source, & modern CSS framework based on Flexbox"
            width="112"
            height="28"
          />
        </a>

        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div class="navbar-menu">
        <div class="navbar-start">
          <a
            :class="{'navbar-item': true, 'is-active is-tab':current_page=='events'}"
            @click="change_page('events')"
          >Events</a>
          <a
            :class="{'navbar-item': true, 'is-active is-tab':current_page=='members'}"
            @click="change_page('members')"
          >Members</a>
          <a
            :class="{'navbar-item': true, 'is-active is-tab':current_page=='dash'}"
            @click="change_page('dash')"
          >dash</a>
          <a
            :class="{'navbar-item': true, 'is-active is-tab':current_page=='addEvent'}"
            @click="change_page('addEvent')"
          >Add Event</a>
        </div>
      </div>
    </nav>
    <div class="main-container">
      <events v-show="current_page=='events'" :events_list="events" @reloadEvents="loadEvents"></events>
      <members v-show="current_page=='members'" :members_list="members" @reloadMembers="loadMembers"></members>
      <dash v-show="current_page=='dash'"></dash>
      <addEvent v-show="current_page=='addEvent'"></addEvent>
    </div>
  </div>
</template>

<script>
import Events from "./pages/events.vue";
import Members from "./pages/members.vue";
import dash from "./pages/dash.vue";
import addEvent from "./pages/addEvent.vue";
import axios from 'axios';


export default {
  name: "app",
  components: {
    Events,
    Members,
    dash,
    addEvent
  },
  data() {
    return {
      current_page: "events",
      events:[],
      members:[]
    };
  },
  methods: {
    change_page(page) {
      this.current_page = page;
      if (page=='events'){this.loadEvents()}
      else if (page=='members'){this.loadMembers()}
    },
    alert(m) {
      alert(m);
    },
    loadEvents(){
      axios.get("https://nisb-events.herokuapp.com/events").then(respose => {
        this.events = respose.data
      })
    },
    loadMembers(){
      axios.get("https://nisb-members.herokuapp.com/members?auth=all").then(respose => {
        this.members = respose.data
      })
    }
  },
  created(){
    this.loadEvents()
  }
};
</script>
<style>
.main-container {
  padding: 20px;
}
html,
body {
  position: absolute;
  background: #eee;
  min-height: 100% !important;
  width: 100%;
}
</style>

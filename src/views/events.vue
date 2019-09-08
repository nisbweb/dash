<template>
  <div class="events">
    
    <nav class="navbar">
      <div class="navbar-brand">
        <a class="navbar-item">EVENTS :</a>
      </div>
      <div class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item">
            <router-link to="/event/add">Add Event</router-link>
          </a>
          <a class="navbar-item">
            <router-link to="/events/upcoming">View: Upcoming</router-link>
          </a>
          <a class="navbar-item">
            <router-link to="/events/past">View: Past</router-link>
          </a>
        </div>
      </div>
    </nav>
    <br />

    <b-table :data="events_list" :mobile-cards="true" :loading="isLoading">
      <template slot-scope="props">
        <b-table-column field="title" label="Title" width="40">{{ props.row.title }}</b-table-column>
        <b-table-column field="venue" label="Venue" width="40">{{ props.row.venue }}</b-table-column>
        <b-table-column field="timestamp" label="Timestamp" width="40">{{ props.row.timestamp }}</b-table-column>
        <b-table-column field="actions" label="Actions" width="80" class="no-padding">
          <!-- {{ props.row.id }} -->
          <b-button type="is-info">Edit</b-button>&nbsp;
          <b-button type="is-info" @click="deleteEvent(props.row.id)">Delete</b-button>&nbsp;&nbsp;
          <b-button type="is-dark">Registrations</b-button>&nbsp;
          <b-button type="is-danger">Payments</b-button>&nbsp;
          <b-button type="is-success">Attendance</b-button>
        </b-table-column>
      </template>
    </b-table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Events",
  data() {
    return {
      events_list: [],
      isLoading: false
    };
  },
  methods: {
    loadEvents() {
      this.isLoading = true;
      axios.get("https://nisb-events.herokuapp.com/events").then(Response => {
        this.events_list = Response.data;
        this.isLoading = false;
      });
    },

    deleteEvent(event_id) {
      let vapp = this
      this.$buefy.dialog.confirm({
        title: "Deleting Event",
        message:
          "Are you sure you want to <b>delete</b> the event? This action cannot be undone.",
        confirmText: "Delete Event",
        type: "is-danger",
        hasIcon: true,
        onConfirm: () => {
          axios
            .delete(
              "https://nisb-events.herokuapp.com/event?event_id=" + event_id
            )
            .then(function() {
              vapp.loadEvents();
              vapp.$buefy.toast.open("Event deleted!");
            });
        }
      })
    }//delete event
  },
  created() {
    this.loadEvents()
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.no-padding {
  padding: 0;
}
</style>

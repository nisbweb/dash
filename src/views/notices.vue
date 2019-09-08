<template>
  <div class="notices-main">
    <nav class="navbar">
      <div class="navbar-brand">
        <a class="navbar-item">NOTICES :</a>
      </div>
      <div class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item">
            <router-link to="/notice/add">Add Notice</router-link>
          </a>
          <a class="navbar-item">
            <router-link to="/notice/add">Topic: general</router-link>
          </a>
        </div>
      </div>
    </nav>
    <br />

    <b-table :data="notices_list" :mobile-cards="true" :loading="isLoading">
      <template slot-scope="props">
        <b-table-column field="topic" label="Topic" width="40">{{ props.row.topic }}</b-table-column>
        <b-table-column field="message" label="Message" width="40">{{ props.row.message }}</b-table-column>
        <b-table-column field="timestamp" label="Timestamp" width="40">{{ props.row.timestamp }}</b-table-column>
        <b-table-column field="actions" label="Actions" width="80" class="no-padding">
          <!-- {{ props.row.id }} -->
          <b-button type="is-info">Edit</b-button>&nbsp;
          <b-button type="is-info" @click="deleteNotice(props.row.id)">Delete</b-button>&nbsp;&nbsp;
        </b-table-column>
      </template>
    </b-table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Notices",
  data() {
    return {
      notices_list: [],
      isLoading: false
    };
  },
  methods: {
    loadNotices() {
      this.isLoading = true;
      axios.get("https://nisb-events.herokuapp.com/notices").then(Response => {
        this.notices_list = Response.data;
        this.isLoading = false;
      });
    },
    deleteNotice(id) {
      let vapp = this;
      this.$buefy.dialog.confirm({
        title: "Deleting Notice",
        message:
          "Are you sure you want to <b>delete</b> the notice? This action cannot be undone.",
        confirmText: "Delete Notice",
        type: "is-danger",
        hasIcon: true,
        onConfirm: () => {
          axios
            .delete("https://nisb-events.herokuapp.com/notice?notice_id=" + id)
            .then(function() {
              vapp.loadNotices();
              vapp.$buefy.toast.open("Notice deleted!");
            });
        }
      });
    }
  },
  created() {
    this.loadNotices();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

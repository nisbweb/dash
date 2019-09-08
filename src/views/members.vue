<template>
  <div class="members">
    <nav class="navbar">
      <div class="navbar-brand">
        <a class="navbar-item">MEMBERS :</a>
      </div>
      <div class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item">
            <router-link to="/member/add">Add Member</router-link>
          </a>
          <a class="navbar-item">
            <router-link to="/members/ieee">View: IEEE</router-link>
          </a>
          <a class="navbar-item">
            <router-link to="/members/cs">View: CS</router-link>
          </a>
        </div>
      </div>
    </nav>
    <br />

    <b-table :data="members_list" :mobile-cards="true" :loading="isLoading">
      <template slot-scope="props">
        <b-table-column field="name" label="Name" width="40">{{ props.row.name }}</b-table-column>
        <b-table-column field="email" label="Email" width="40">{{ props.row.email }}</b-table-column>
        <b-table-column field="mobile" label="Mobile" width="40">{{ props.row.mobile }}</b-table-column>
        <b-table-column field="actions" label="Actions" width="80" class="no-padding">
          <!-- {{ props.row.id }} -->
          <b-button type="is-dark">View</b-button>&nbsp;
          <b-button type="is-info">Edit</b-button>&nbsp;
          <b-button type="is-info" @click="deleteMember(props.row.email)">Delete</b-button>&nbsp;&nbsp;
        </b-table-column>
      </template>
    </b-table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Members",
  data() {
    return {
      isLoading: false,
      members_list: [],
      columns: [
        { field: "name", label: "Name" },
        { field: "email", label: "Email" },
        { field: "mobile", label: "Mobile" }
      ]
    };
  },
  methods: {
    loadMembers() {
      this.isLoading = true;
      axios
        .get("https://nisb-members.herokuapp.com/members?auth=all")
        .then(respose => {
          this.members_list = respose.data;
          this.isLoading = false;
        });
    },
    deleteMember(email) {
      let vapp = this;
      this.$buefy.dialog.confirm({
        title: "Deleting Member",
        message:
          "Are you sure you want to <b>delete</b> the member? This action cannot be undone.",
        confirmText: "Delete Member",
        type: "is-danger",
        hasIcon: true,
        onConfirm: () => {
          axios
            .delete(
              "https://nisb-members.herokuapp.com/member?auth=all&email=" +
                email
            )
            .then(function() {
              vapp.loadMembers();
              vapp.$buefy.toast.open("Member deleted!");
            });
        }
      });
    }
  },
  created() {
    this.loadMembers();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

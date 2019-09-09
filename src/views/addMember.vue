<template>
  <div class="addMember">
    <form class="vue-form">
        <section>
            <b-field label="Name">
                <b-input v-model="name"></b-input>
            </b-field>

            <b-field label="Email">
                <b-input v-model="email"></b-input>
            </b-field>

            <b-field label="Mobile Number">
                <b-input v-model="mobile"></b-input>
            </b-field>

            <b-field label="Semester">
                <b-input v-model="sem">Open</b-input>
            </b-field>

            <b-field label="Branch">
                <b-input v-model="branch"></b-input>
            </b-field>

            <b-field label="CS Member?">
                <b-input v-model="cs"></b-input>
            </b-field>

            <b-field label="Paid Amount">
                <b-input v-model="paid"></b-input>
            </b-field>

            <b-field label="Receipt Number">
                <b-input v-model="receipt"></b-input>
            </b-field>

            <div class="buttons is-centered">
                <b-button v-on:click="submitMember" class="is-primary" outlined>Submit</b-button>
                <b-button v-on:click="cancel"  class="is-primary" outlined>Cancel</b-button>
            </div>
            
        </section>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "addEvent",

  data: function() {
    return  {
        name: '',
        email: '',
        mobile:'',
        sem: '',
        branch: '',
        cs:'',
        paid: '',
        receipt: '',
    }
  },

  methods: {
    // submit form handler
    submitMember: function() {

        var params = {
                      "name":this.name,
                      "email":this.email,
                      "mobile":this.mobile,
                      "sem":this.sem,
                      "branch":this.branch,
                      "cs":this.cs,
                      "paid": this.paid,
                      "receipt": this.receipt
        };

        axios.post('http://nisb-members.herokuapp.com/member?auth=5dbb78f41c594ff08cebf701b3ab77cb', params).then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });

    },

    cancel: function() {
        //DO SOMETHING
    },
  },
}
</script>

<style scoped>

</style>
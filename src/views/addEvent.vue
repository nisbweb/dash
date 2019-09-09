<template>
  <div class="addEvent">
    <form class="vue-form" @submit.prevent="submit">
        <section>
            <b-field label="Title">
                <b-input v-model="title"></b-input>
            </b-field>

            <b-field label="Image Link">
                <b-input v-model="link"></b-input>
            </b-field>

            <b-field label="Description">
                <b-input maxlength="200" type="textarea" vmodel="desc"></b-input>
            </b-field>

            <b-field label="Registration">
                <b-input v-model="register">Open</b-input>
            </b-field>

            <b-field label="Group">
                <b-input v-model="group"></b-input>
            </b-field>

            <b-field label="Venue">
                <b-input v-model="venue"></b-input>
            </b-field>

            <b-field label="CS Fees">
                <b-input v-model="cs_fee"></b-input>
            </b-field>

            <b-field label="IEEE Fees">
                <b-input v-model="ieee_fee"></b-input>
            </b-field>

            <b-field label="Non-IEEE Fees">
                <b-input v-model="non_ieee_fee"></b-input>
            </b-field>

            <div class="buttons is-centered">
                <b-button type="submit" class="is-primary" outlined>Submit</b-button>
                <b-button type="cancel" class="is-primary" outlined>Cancel</b-button>
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
    return {
      submitted: false
    };
  },

  methods: {
    // submit form handler
    submit: function() {
    this.submitted = true;

    var today = new Date();
    var day = today.getDate() + "";
    var month = (today.getMonth() + 1) + "";
    var year = today.getFullYear() + "";
    var hour = today.getHours() + "";
    var minutes = today.getMinutes() + "";
    var seconds = today.getSeconds() + "";

    var timestamp = day + "/" + month + "/" + year + " " + hour + ":" + minutes + ":" + seconds;

    var params = {   "title": this.title,
                     "image" : this.link,
                     "desc" : this.desc,
                     "register" : this.register,
                     "group" : this.group,
                     "venue" : this.venue,
                     "timestamp" : timestamp,
                     "fee" : {
                         "ieee" : this.ieee_fee,
                         "non" : this.non_ieee_fee,
                         "cs" : this.cs_fee
                     } 
    };

    console.log(params); 
    axios.post('http://localhost:8080/#/event', params);

    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

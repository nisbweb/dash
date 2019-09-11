<template>
  <div class="addEvent">
    <form class="vue-form">
        <section>
            <b-field label="Title">
                <b-input v-model="title"></b-input>
            </b-field>

            <b-field label="Image Link">
                <b-input v-model="link"></b-input>
            </b-field>

            <b-field label="Description">
                <b-input maxlength="200" type="textarea" v-model="desc"></b-input>
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
                <b-button v-on:click="submitEvent" class="is-primary" outlined>Submit</b-button>
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
    return  {
        title: '',
        link: '',
        desc:'',
        register: '',
        group: '',
        venue:'',
        ieee_fee: '',
        non_ieee_fee: '',
        cs_fee : '',
    }
  },

  methods: {
    // submit form handler
    submitEvent: function() {

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

        axios.post('http://nisb-events.herokuapp.com/event', params).then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });

    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

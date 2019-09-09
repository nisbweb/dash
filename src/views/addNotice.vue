<template>
  <div class="addNotice">
    <form class="vue-form">
        <section>
            <b-field label="Topic">
                <b-input v-model="topic"></b-input>
            </b-field>

            <b-field label="Message">
                <b-input maxlength="200" type="textarea" v-model="message"></b-input>
            </b-field>
            
            <!--
            <b-field label="Data">
                <b-input v-model="data"></b-input>
            </b-field>
            -->

            <div class="buttons is-centered">
                <b-button v-on:click="submitNotice" class="is-primary" outlined>Submit</b-button>
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
        topic: '',
        message: '',
        data: ''
    }
  },

  methods: {
    // submit form handler
    submitNotice: function() {

        var today = new Date();
        var day = today.getDate() + "";
        var month = (today.getMonth() + 1) + "";
        var year = today.getFullYear() + "";
        var hour = today.getHours() + "";
        var minutes = today.getMinutes() + "";
        var seconds = today.getSeconds() + "";
        var timestamp = day + "/" + month + "/" + year + " " + hour + ":" + minutes + ":" + seconds;

        var params = {
                      "topic":this.topic,
                      "message":this.message,
                      "data":{},
                      "time": timestamp,
        };

        axios.post('http://nisb-events.herokuapp.com/notice', params).then(function (response) {
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
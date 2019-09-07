<template>
  <div class="events">
    <!-- {{events_list}} -->

    <div class="box" v-for="event in events_list" :key="event.id">
      <div class="columns">
        <div class="column">
          <p><b>{{event.title}}</b></p>
        </div>
        <div class="column">
            <p v-if="event.venue">{{event.venue}}</p> 
            <p v-else>Venue not set</p>
        </div>
        <div class="column">
            <p v-if="event.timestamp">{{event.timestamp}}</p>
            <p v-else>Date/Time not set</p>
        </div>
        <div class="column is-half">
          <b-button type="is-info">Edit</b-button>&nbsp;
          <b-button type="is-info" @click="deleteEvent(event.id)">Delete</b-button>&nbsp;&nbsp;

          <b-button type="is-dark">Registrations</b-button>&nbsp;
          <b-button type="is-danger">Payments</b-button>&nbsp;
          <b-button type="is-success">Attendance</b-button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "Events",
  props: ["events_list"],
  methods:{
      deleteEvent(event_id){
          alert("delete " + event_id)
          axios.delete("https://nisb-events.herokuapp.com/event?event_id="+event_id).then(Response =>{
              console.log(Response)
              this.$emit('reloadEvents','delete')
          })
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p{
    padding: 5px;
}
.left-float {
  float: left;
}
</style>

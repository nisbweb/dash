<template>
  <div class="addEvent">
    <section>
        <b-field label="Title">
            <b-input v-model="title"></b-input>
        </b-field>

        <b-field label="Image Link">
            <b-input v-model="link"></b-input>
        </b-field>

        <b-field label="Description">
            <b-input maxlength="200" type="textarea"></b-input>
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
            <b-button type="is-primary" outlined>Submit</b-button>
            <b-button type="is-primary" outlined>Cancel</b-button>
        </div>
        
    </section>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "addEvent",
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

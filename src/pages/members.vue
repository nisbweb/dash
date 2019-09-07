<template>
  <div class="members">
    Members Page
    {{members_list}}
    <b-table :data="members_list" :columns="columns"></b-table>
  </div>
</template>

<script>
export default {
  name: 'Members',
  props: ["members_list"],
  data(){
    return{
      columns:[
        {"field":"name","label":"Name"},
        {"field":"email","label":"Email"},
        {"field":"mobile","label":"Mobile"},
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

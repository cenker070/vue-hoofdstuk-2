<template>
  <div>
  <h1>pick your next vacation</h1>
  <ul class="list-group">
    <li class="list-group-item"  v-for="country in countryData.countries" v-bind:key="country.id">
      <span :id="country.id" :title="country.details">
        {{country.id}} name;
      {{country.name}} capital;
        {{country.capital}} cost;
        {{country.cost}}
      </span>
    </li>
    <h3>Teller: {{counter}}</h3>
    <button v-on:click="counter++" class="btn btn-success">+</button>
    <button v-on:click="counter--" class="btn btn-danger">-</button>
  </ul>
  </div>
</template>

<script>
import countryData from "@/DATA/CountryData.js";
export default {
name: "VacationPicker",
  data(){
  return {
    countryData,

    counter: 0
  }
  }
}
</script>

<style scoped>

</style>
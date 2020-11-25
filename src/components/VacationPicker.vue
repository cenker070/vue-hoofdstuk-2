<template>
  <div>
  <h1>pick your next vacation</h1>
  <ul class="list-group">
    <li class="list-group-item" @click="selectCountry(index)" v-for="(country, index) in countryData.countries" v-bind:key="country.id">
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
    <select name="list1" id="list1"> == $0
    <option value="10">10</option>
      <option value="20">20</option>
      <option value="30">30</option>
      <option value="40">40</option>
      <option value="50">50</option>
    </select>
    <h2>Selected</h2>
    <ul class="list-group">
      <li class="list-group-item">{{selectedCountry.id}}</li>
      <li class="list-group-item">{{selectedCountry.name}}</li>
    </ul>
  </div>
</template>

<script>
import countryData from "@/DATA/CountryData.js";
export default {
name: "VacationPicker",
  methods: {
  selectCountry(index) {
    this.selectedCountryIndex = index;
  }
  },
  computed : {
  selectedCountry() {
    console.log('selectedCountry  aangeroepen');
    return {
      //spread operator
    id: this.countryData.countries[this.selectedCountryIndex].id,
    name: this.countryData.countries[this.selectedCountryIndex].name,
      capital: this.countryData.countries[this.selectedCountryIndex].capital,
      cost: this.countryData.countries[this.selectedCountryIndex].cost,
      details: this.countryData.countries[this.selectedCountryIndex].details,
    }
  }
  },
  data(){
  return {

    selectedCountryIndex: 0
  }
  },
}
</script>



<style scoped>

</style>
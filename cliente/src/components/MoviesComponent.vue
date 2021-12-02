<template>
  <div class="MoviesComponent">
    <b-container>
      <b-row align-v="center">
        <b-col
          class="bv-example-row"
          v-for="movie in moviesList"
          :key="movie.name"
          md="3"
        >
          <b-card tag="service" style="max-width: 20rem" class="mb-2" footer="Película">
            <h1>{{ movie.name }}</h1>
            <b-card-text>
              {{ movie.year }} <br />
              ID: {{ movie.id }} <br />
            </b-card-text>
            <b-button variant="secondary" v-on:click="MovieDelete(movie.id)"
              >Eliminar</b-button
            >
          </b-card>
        </b-col>
      </b-row>
    </b-container>
    <b-container>
      <b-row align-v="center">
        <b-col md="2">
          <b-button variant="primary" v-on:click="movieAdd">Agregar película</b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>

import axios from "axios";

export default {
  name: "MoviesComponent",
  props: {
    moviesList: null,
  },
  methods: {
    movieAdd() {
      this.$router.push("MovieAdd");
    },
    MovieEdit() {
      this.$router.push("MovieEdit");
    },
    MovieDelete(id) {
      console.log("Entramos a función eliminar: ", id);
      axios
        .put(`http://localhost:3001/movies/borrar/${id}`)
        .then((result) => {
          console.log(result);  
        })
        .catch((e) => console.log(e));
    },
  },
};
</script>

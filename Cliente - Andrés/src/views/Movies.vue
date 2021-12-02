<template>
  <div class="services">
    <MoviesComponent :moviesList="movies" />
  </div>
</template>

<script>
import axios from "axios";

import MoviesComponent from "@/components/MoviesComponent.vue";

export default {
  name: "Movies",
  components: {
    MoviesComponent,
  },
  data() {
    return {
      movies: null,
    };
  },
  mounted() {
    this.getMovies();
  },
  methods: {
    getMovies() {
      axios
        .get("http://localhost:3001/movies/mostrarTodas")
        .then((result) => {
          this.movies = result.data.data;
          console.log('movies: ', result.data.data);
        })
        .catch((e) => console.log(e));
    },
  },
};
</script>

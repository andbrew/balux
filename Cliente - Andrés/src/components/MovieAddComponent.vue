<template>
  <div class="MovieAddComponent">
    <div class="container">
      <form action="" class="form-horizontal">
        <div class="form-group left"> <br>
          <label for="" class="control-label col-sm-2">Nombre de la película</label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              name="title"
              id="title"
              v-model="form.name"
            />
          </div>
        </div>
        <div class="form-group left">
          <label for="" class="control-label col-sm">Año</label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              name="description"
              id="description"
              v-model="form.year"
            />
          </div>
        </div>
        <div class="form-group left">
          <label for="" class="control-label col-sm">ID</label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              name="description"
              id="description"
              v-model="form.id"
            />
          </div>
        </div>
        <div class="form-group">
          <button type="button" class="btn btn-primary" v-on:click="guardar()">
            Guardar
          </button>
          <button type="button" class="btn btn-dark margen" v-on:click="salir()">
            Atrás
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "MovieAddComponent",
  props: {},
  data: function () {
    return {
      form: {
        name: "",
        year: "",
        id: "",
      },
    };
  },
  methods: {
    salir() {
      this.$router.push("/movies");
    },
    guardar() {
      //   this.form.token = localStorage.getItem("token");
      axios
        .post("http://localhost:3001/movies/crear", this.form)
        .then((data) => {
          console.log(data);
          this.makeToast("Hecho", "Película agregada", "success");
          this.$router.push("/movies");
        })
        .catch((e) => {
          console.log(e);
          this.makeToast("Error", "Error al guardar", "error");
        });
    },
    makeToast(titulo, texto, tipo) {
      this.toastCount++;
      this.$bvToast.toast(texto, {
        title: titulo,
        variant: tipo,
        autoHideDelay: 5000,
        appendToast: true,
      });
    },
  },
};
</script>

<style scoped>
.left {
  text-align: left;
}
</style>

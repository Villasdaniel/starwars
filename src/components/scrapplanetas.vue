<template>
  <div class="UserSup">
    <div class="wrapper fadeInDown">
        <form class="FormUserSup" >
          <div class="pepito">
            <div class="title-box">
              <h1>PLANETAS</h1>
            </div>
            <table class="table table-responsive table-bordered">
              <thead>
                <tr>
                  <th>NOMBRE</th>
                  <th>DIA</th>
                  <th>AÑO</th>
                  <th>DIAMETRO</th>
                  <th>CLIMA</th>
                  <th>GRAVEDAD</th>
                  <th>AGUA</th>
                  <th>POBLACIÓN</th>
                </tr>
              </thead>
              <paginate name="planetas" :list="planetas" :per="10" tag="tbody">
                  <tr v-for="planeta in paginated('planetas')" :key = "planeta.data">
                    <td> <a class="nombre" href="../reference/uri-url.html">{{ planeta.name }}</a></td>
                    <td> {{ planeta.rotation_period }} </td>
                    <td> {{ planeta.orbital_period }} </td>
                    <td> {{ planeta.diameter }} </td>
                    <td> {{ planeta.climate }} </td>
                    <td> {{ planeta.gravity}} </td>
                    <td> {{ planeta.surface_water }} </td>
                    <td> {{ planeta.population }} </td>
                </tr>
              </paginate>
              <div id="melocentro">
                <paginate-links for="planetas" :limit="5" :show-step-links="true" :classes="{'ul': 'pagination', 'li': 'page-item', 'a': 'page-link'}"></paginate-links>
              </div>
            </table>
          </div>
        </form>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  // import Vue from 'vue'
  export default {
      data() {
        return {
          planetas: [],
          paginate: ['planetas']
        }
      },
      mounted() {
        let vue = this;
        axios.get('https://swapi.dev/api/planets/')
        .then( function (response) {
          console.log(response)
          vue.planetas = response.data.results
        })
      }
  }
</script>
<style scoped>

h1{
  align-content: center;
  font: bold 40px arial;
  text-align: center;
}
table {
  font-size: calc(0.3em + 1vw);
  color: white;
}
* {
    margin: 0;
    padding: 0;
}
.FormUserSup {
  -webkit-border-radius: 10px 10px 10px 10px;
  border-radius: 10px 10px 10px 10px;
  background: black;
  padding: 50px;
  -webkit-box-shadow: 0 30px 60px 0 rgba(98, 96, 96, 0.979);
  box-shadow: 0 30px 60px 0 rgba(98, 96, 96, 0.979);
  width: 90%;
  height: 80%;
  margin-top: 5%;
}
.title-box {
  align-content: center;
  font: bold 40px arial;
  text-align: center;
  margin-top: 25px;
  margin-bottom: 25px;
}

.title-box h1 {
    color: #F1C40F;
}
#stilo {  
  background-color: #630986f5 ;
  color: white;
  padding: 10px 40px 10px;
  font-size: 15px; 
  -webkit-box-shadow: 0 10px 30px 0 rgba(195, 176, 238, 0.4);
  box-shadow: 0 10px 30px 0 rgba(129, 140, 146, 0.4);
  -webkit-border-radius: 5px 5px 5px 5px;
  border-radius: 5px 5px 5px 5px;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  
}

#melocentro {
  display: flex;
  justify-content: center;
}
.nombre {
    color: white;
}

th {
    color:#6198D8;
}
</style>
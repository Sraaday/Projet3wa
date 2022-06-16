<template>
    <div>

      <nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
    </div>
    <ul class="nav navbar-nav">
      <li><router-link to="/main">Acceuil</router-link></li>
      <li class="active"><router-link to="/profil">Consulter mon Profil</router-link></li>
      <li><router-link to="/ForumPost">Forum Multimédia </router-link></li>
    </ul>

     <Deconnexion/>
  </div>
</nav>
      
      <DisplayProfil :id="id" v-if="show"/>
    </div>
</template>

<style scoped>
@media screen and (max-width: 600px) {
  .navbar-header{
    display: flex;
    justify-content: center;
  }
}
</style>



<script>
import DisplayProfil from '../components/Forum/DisplayProfil.vue';
import APICall from '../components/APICall/APICall.vue'
import Deconnexion from '../components/Connexion/Deconnexion.vue';
export default {
  name: 'Profil',
  components: { DisplayProfil, Deconnexion
  },
  data: () => {
        return {
            id: 0,
            show: false,
            admin: false
        }
        
    },
  mounted: function () {
    this.id = APICall.methods.getParsedToken().userId;
    this.show = true;
  }
}
</script>
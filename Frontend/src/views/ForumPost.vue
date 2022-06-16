<template>
    <div class="background">
        <nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <ul class="nav navbar-nav">
      <li><router-link to="/main">Acceuil</router-link></li>
      <li><router-link to="/profil">Consulter mon Profil</router-link></li>
      <li class="active"><router-link to="/ForumPost">Forum Multimédia </router-link></li>
    </ul>
     <Deconnexion/>
  </div>
</nav>
        <h1> Espace Multimédia </h1>
        
        <DisplayAllPosts />
        
    </div>
</template>


<script>
import DisplayAllPosts from '../components/Forum/DisplayAllPosts.vue';
import Deconnexion from '../components/Connexion/Deconnexion.vue';
import APICall from '../components/APICall/APICall.vue';
export default {
  name: 'ForumPost',
  components: {
    Deconnexion,
    DisplayAllPosts
  },
  data: () => {
    return {
      admin: false
    }
  },
  mounted: function () {
      this.admin = APICall.methods.getParsedToken().isAdmin;
  }
  
}
</script>

<style scoped>
.background{
    background-color: rgba(255, 0, 0, 0.281) ;
}
.logo {
    width: 150px;
    display: flex;
    align-self: center;
    border: red;
    border-style: solid ;
    border-radius: 5px;
    margin: auto;
    margin-bottom: 10px;
    margin-top: 10px;
  }
  @media screen and (max-width: 600px) {
  .navbar-header{
    display: flex;
    justify-content: center;
  }
}
  
</style>
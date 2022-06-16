<template>
    <section>
        <nav class="navbar navbar-inverse">
            <div class="container-fluid">
                <ul class="nav navbar-nav">
                    <li class="active"><router-link to="/main">Acceuil</router-link></li>
                    <li><router-link to="/profil">Consulter mon Profil</router-link></li>
                    <li><router-link to="/ForumPost">Forum Multimédia </router-link></li>
                </ul>
                <Deconnexion/>
            </div>
        </nav>

        <article>
            <img id="logo" src="../assets/cropped-big.png">
            <h1>Bienvenue sur notre réseau social !</h1>
            <h2> Créez des posts dès maintenant ! </h2>
            <h3> <router-link class="link" to="/ForumPost">Accès au forum Multimédia !</router-link> </h3>
        </article>

    </section>
</template>


<script>
import Deconnexion from '../components/Connexion/Deconnexion.vue';
import APICall from '../components/APICall/APICall.vue';
export default {
  name: 'Main',
  components : {
    Deconnexion
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
#logo {
    width: 450px;
    display: flex;
    align-self: center;
    border: #000000;
    border-style: solid ;
    border-radius: 5px;
    margin: auto;
    margin-bottom: 10px;
    margin-top: 15px;
  }
@media screen and (max-width: 992px) {
  a{
    font-size: 14px;
  }
 
  .link{
    font-size: 20px;
  }
  #logo {
    width: 450px;
    display: flex;
    align-self: center;
    border: #000000;
    border-style: solid ;
    border-radius: 10px;
  }
}
/* On screens that are 600px or less */
@media screen and (max-width: 600px) {
  div {
    display: flex;
    flex-direction: column;
  }
  #logo {
    max-width: 290px;
    display: flex;
    align-self: center;
    border: #000000;
    border-style: solid ;
    border-radius: 5px;
  }
  .container-fluid{
    display: flex;
    flex-direction: column;
  }
  a{
    font-size: 14px;
  }
  
  h2 {
    font-size: 23px;
  }
  h1 {
    font-size: 27px;
  }
}
</style>
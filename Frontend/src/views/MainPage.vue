<template>
    <section>
        <Nav active="Main"/>

        <article>
            <img id="logo" src="../assets/cropped-big.png">
            <h1>Bienvenue sur notre réseau social !</h1>
            <DailyMessage/>
            <h2> Créez des posts dès maintenant ! </h2>
            <h3> <router-link class="link" to="/ForumPost">Accès au forum Multimédia !</router-link> </h3>
        </article>

    </section>
</template>


<script>
import Nav from '../components/Utils/Nav.vue';
import DailyMessage from '../components/Utils/DailyMessage.vue';
export default {
  name: 'Main',
  components : {
    Nav,
    DailyMessage
  },
  data: () => {
    return {
    }
  },
  mounted: function () {
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
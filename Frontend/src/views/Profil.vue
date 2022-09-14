<template>
    <div>

      <Nav active="Profil"/>
      
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
import Nav from '../components/Utils/Nav.vue';
export default {
  name: 'Profil',
  components: { 
    DisplayProfil, 
    Nav
  },
  data: () => {
        return {
            id: 0,
            show: false,
        }
        
    },
  mounted: function () {
    this.id = APICall.methods.getParsedToken().userId;
    this.show = true;
  }
}
</script>
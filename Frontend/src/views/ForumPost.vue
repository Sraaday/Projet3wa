<template>
    <div class="background">
        <Nav active="ForumPost"/>

        <h1> Espace Multimédia </h1>
        
        <DisplayAllPosts />
        
    </div>
</template>


<script>
import DisplayAllPosts from '../components/Forum/DisplayAllPosts.vue';
import Nav from '../components/Utils/Nav.vue';
export default {
  name: 'ForumPost',
  components: {
    DisplayAllPosts,
    Nav
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
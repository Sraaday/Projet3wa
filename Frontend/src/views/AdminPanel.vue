<template>
    <div>

        <Nav active="Admin"/>
      
        <ModifyDailyMessage />

    </div>
</template>


<script>
import Nav from '../components/Utils/Nav.vue';
import ModifyDailyMessage from '../components/Admin/ModifyDailyMessage.vue';
export default {
  name: 'Admin',
  components: { 
    Nav,
    ModifyDailyMessage
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
</style>
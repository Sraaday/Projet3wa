<template>
    <nav class="navbar navbar-inverse">
            <div class="container-fluid">
                <ul class="nav navbar-nav">
                    <li :class='getClass("Main")'><router-link to="/main">Acceuil</router-link></li>
                    <li :class='getClass("Profil")'><router-link to="/profil">Consulter mon Profil</router-link></li>
                    <li :class='getClass("ForumPost")'><router-link to="/ForumPost">Forum Multimédia </router-link></li>
                    <li v-if="isAdmin" :class='getClass("Admin")'><router-link to="/admin">Administration</router-link></li>
                </ul>
                <Deconnexion/>
            </div>
        </nav>
</template>



<script>
import Deconnexion from '../Connexion/Deconnexion.vue';
import APICall from '../APICall/APICall.vue';
export default {
    name: 'DailyMessage',
    props: {
        active: String
    },
    components : {
        Deconnexion,
    },
    data: () => {
        return {
            isAdmin: true
        }
    },
    
    methods: {
        getClass: function(name) {
            if (name === this.active)
                return "active"
            return ""
        }
    },
    mounted: function () {
        this.isAdmin = APICall.methods.isAdmin()
    },
}
</script>

<style scoped>

</style>
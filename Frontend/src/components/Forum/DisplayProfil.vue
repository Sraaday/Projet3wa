<template>
       <div class="outline">
        <h1> Ma page de profil </h1>
        <h2> Mon pseudo : {{pseudo}} </h2>
        <h2> Mon adresse mail : {{mail}}</h2>
        <button v-if="id == userId" v-on:click="deleteProf(id)">Supprimer mon profil ?</button>
    </div>
</template>

<style scoped>
</style>

<script>
import APICall from '../APICall/APICall.vue'
export default {
    name: 'DisplayProfil',
    props: {
        id: Number
    },
    data: () => {
        return {
            pseudo: "",
            mail: "",
            userId: 0,
        }
    },
    methods: {
        deleteProf: async function (profId) {
            APICall.methods.delete(`user/${profId}`);
            if (this.userId == this.id) {
                APICall.methods.removeToken();
                this.$router.push({ name: "home" });
            } else {
                this.$router.go();
            }
        }
    },
    mounted: async function () {
        this.userId = APICall.methods.getParsedToken().userId;
        const responseUser = await APICall.methods.get(`user/${this.id}`);
        this.pseudo = responseUser.pseudo;
        this.mail = responseUser.mail;
    }
}
</script>
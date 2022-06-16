<template>
    <div class="outline">
        <form>
            <h1>Connexion</h1>
            <label for="mail">Entrez votre Email</label>
            <input id="mail" type="mail" placeholder="" v-model="mail"/>
            <label for="password">Entrez votre mot de passe</label>
            <input id="password" type="password" placeholder="" v-model="password"/>
            <button type="button" v-on:click="sendForm">Connexion</button>
        </form>
        <p v-if='error != ""' >{{error}}</p>
    </div>
</template>
<script>
import APICall from '../APICall/APICall.vue'
export default {
    name: 'Connexion',
    data: () => {
        return {
            mail: "",
            password: "",
            error: ""
        }
    },
    props: {
        href: String
    },
    methods: {
        sendForm: async function() {
            const response = await APICall.methods.post("user/login", {"mail": this.mail, "password": this.password});
            APICall.methods.setToken(response.token);
            this.error = response.error;
            if (response.token != null) {
                this.onConnectionSuccess();
            }
        },
        onConnectionSuccess: function() {
            this.$router.push({ name: this.href });
        }
    }
}
</script>

<style scoped>
input {
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-items: center;
    justify-self: center;
    padding: 7px;
    margin: auto;
    margin-top: 10px;
    margin-bottom: 10px;
}
</style>
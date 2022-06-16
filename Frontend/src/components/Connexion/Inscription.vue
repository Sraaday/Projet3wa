<template>
    <div class="outline" aria-label="Inscription">
        <form>
            <h1>Inscrivez-vous</h1>
            <label for="mail">Entrez votre Email</label>
            <input id="mail" type="mail" placeholder="ex: email@email.com" v-model="mail"/>
            <label for="pseudo">Votre pseudo</label>
            <input id="pseudo" type="text" placeholder="ex: Jean" v-model="pseudo"/>
            <label for="password">Choisissez un mot de passe</label>
            <input id="password" type="password" placeholder="****" v-model="password"/>
            <div>
                <button type="button" v-on:click="sendForm">S'inscrire</button> 
            </div>
        </form>
    </div>
</template>


<script>
import APICall from '../APICall/APICall.vue'
export default {
    name: 'Inscription',
    data: () => {
        return {
            pseudo: "",
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
            // if (this.isValid()) {
                const response = await APICall.methods.post("user/signup", {"mail": this.mail, "password": this.password, "pseudo": this.pseudo});
                this.error = response.error;
                if (response.message === "Utilisateur créé"){
                    this.onInscriptionSuccess();
                }
            // }
        },
        // isValid: function() {
        //     return /[A-Za-z-\s]/.test(this.pseudo) && /[A-Za-z-\s]/.test(this.password);
        // },
        onInscriptionSuccess: function() {
            this.$router.push({ name: this.href });
        }
    }
}
</script>




<style scoped>
    .outline {
        outline: solid 1px lightskyblue;
        outline-offset: 1vh;
        display: flex;
        margin: auto;
    }
    button {
        background-color: rgb(88, 60, 9);
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin-top: 1vh;
    }
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
    form {
        display: flex;
        margin: auto;
        flex-direction: column;
        vertical-align: auto;
    }
/* On screens that are 992px or less */
@media screen and (max-width: 992px) {
  div {
    display: flex;
    flex-direction: column;
  }
  #nav {
    padding: 10px;
  }
}
/* On screens that are 600px or less */
@media screen and (max-width: 600px) {
  div {
    display: flex;
    flex-direction: column;
  }
}
</style>
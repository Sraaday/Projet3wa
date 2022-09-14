<template>
    <div class="dailyMessage">
        <form>
            <label for="titre">Choix du titre</label>
            <input id="titre" type="text" :placeholder="title" v-model="newTitle"/>
            <label for="message">Choix du message</label>
            <input id="message" type="text" :placeholder="message" v-model="newMessage"/>
            <button type="button" v-on:click="sendForm">Enregistrer</button>
        </form>
        <h1>{{title}}</h1>
        <p>{{message}}</p>
    </div>
</template>



<script>
import APICall from '../APICall/APICall.vue'
export default {
    name: 'ModifyDailyMessage',
    props: {
    },
    components: {
    },
    data: () => {
        return {
            title: "Erreur de chargement du titre",
            message: "Erreur de chargement du message du jour",
            newMessage: "",
            newTitle: "",
        }
    },
    
    methods: {
        sendForm: async function() {
            const response = await APICall.methods.post(`dailyMessage/create`, {"content": this.newMessage, "title": this.newTitle});
            this.error = response.error;
        }
    },
    mounted: async function () {
        const data = await APICall.methods.get(`dailyMessage`);
        if (data.title)
            this.title = data.title
        if (data.content)
            this.message = data.content
        this.newMessage = this.message;
        this.newTitle = this.title
    },
}
</script>

<style scoped>

</style>
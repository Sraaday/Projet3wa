<template>
    <div class="dailyMessage">
        <h1>{{title}}</h1>
        <p>{{message}}</p>
    </div>
</template>



<script>
import APICall from '../APICall/APICall.vue'
export default {
    name: 'DailyMessage',
    props: {
    },
    components: {
    },
    data: () => {
        return {
            title: "Erreur de chargement du titre",
            message: "Erreur de chargement du message du jour"
        }
    },
    
    methods: {
    },
    mounted: async function () {
        const data = await APICall.methods.get(`dailyMessage`);
        if (data.title)
            this.title = data.title
        if (data.content)
            this.message = data.content
    },
}
</script>

<style scoped>

</style>
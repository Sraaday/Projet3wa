<template>
    <div class="outline">
        <form>
            <label for="commentaire">Entrez votre commentaire</label>
            <input id="commentaire" type="text" placeholder="" v-model="content"/>
            <button type="button" v-on:click="sendForm">Envoyer</button>
        </form>
    </div>
</template>
<script>
import APICall from '../APICall/APICall.vue'
export default {
    name: 'uploadComment',
    props: {
        postId: Number,
    },
    data: () => {
        return {
            content: ""
        }
    },
    methods: {
        sendForm: async function() {
            if (this.content != "") {
                const response = await APICall.methods.post("comment/create", {"content": this.content, "postId": this.postId});
                if (!response.error){
                    this.content = "";
                }
                this.error = response.error;
            }
            
        }
    }
}
</script>
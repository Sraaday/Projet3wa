<template>
    <div class="outline">
        <form>
            <label for="commentaire">Modifiez votre commentaire</label>
            <input id="commentaire" type="text" :placeholder="content" v-model="newContent"/>
            <button type="button" v-on:click="sendForm">Enregistrer</button>
        </form>
    </div>
</template>
<script>
import APICall from '../APICall/APICall.vue'
export default {
    name: 'ModifyComment',
    props: {
        commentId: Number,
        content: String,
    },
    data: () => {
        return {
            newContent: "",
        }
    },
    methods: {
        sendForm: async function() {
            if (this.content != "") {
                const response = await APICall.methods.put(`comment/${this.commentId}`, {"content": this.newContent});
                this.error = response.error;
            }
            
        }
    },
    mounted: async function () {
        this.newContent = this.content;
    }
}
</script>
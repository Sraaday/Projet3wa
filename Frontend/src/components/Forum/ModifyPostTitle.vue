<template>
    <div class="outline">
        <form>
            <label for="commentaire">Modifiez votre titre</label>
            <input id="commentaire" type="text" :placeholder="title" v-model="newTitle"/>
            <button type="button" v-on:click="sendForm">Enregistrer</button>
        </form>
    </div>
</template>
<script>
import APICall from '../APICall/APICall.vue'
export default {
    name: 'ModifyPostTitle',
    props: {
        postId: Number,
        title: String,
    },
    data: () => {
        return {
            newTitle: "",
        }
    },
    methods: {
        sendForm: async function() {
            if (this.content != "") {
                const response = await APICall.methods.put(`post/${this.postId}`, {"title": this.newTitle});
                if (!response.error){
                    this.$emit('update:title', this.newTitle)
                }
                this.error = response.error;
            }
            
        }
    },
    mounted: async function () {
        this.newTitle = this.title;
    }
}
</script>
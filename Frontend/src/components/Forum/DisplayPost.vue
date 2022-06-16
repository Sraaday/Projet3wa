<template>
    <div class="outline">
        <h1>{{title}}</h1>
        <p> Crée par {{userName}} {{createdAt}}</p>
        
        
        <img :alt="title" :src="imgUrl" />
        <h1>Commentaires</h1>
        <PostComments :postId="id"/>
        <uploadComment :postId="id"/>
    </div>
</template>


<script>
import APICall from '../APICall/APICall.vue'
import PostComments from './PostComments.vue'
import uploadComment from './uploadComment.vue'
export default {
    name: 'DisplayPost',
    props: {
        id: Number
    },
    components: {
        PostComments,
        uploadComment,
    },
    data: () => {
        return {
            title: "",
            imgUrl: "",
            userName:"",
            createdAt: 0,
            show: false
        }
    },
    mounted: async function () {
        const formatDate = (date) => {
            const splitDate = date.split('-');
            return `le ${splitDate[2]}/${splitDate[1]}/${splitDate[0]}`
        }
        const responsePost = await APICall.methods.get(`post/${this.id}`);
        this.title = responsePost.Title;
        this.imgUrl = responsePost.imgUrl;
        this.createdAt = formatDate(responsePost.createdAt);
        const responseUser = await APICall.methods.get(`user/${responsePost.userId}`);
        this.userName = `${responseUser.pseudo}`;
        
        this.show = true;
    }
}
</script>

<style scoped>
img {
    padding-bottom: 10px;
}
@media screen and (max-width: 600px) {
  p {
   font-size: 15px;
  }
}
</style>
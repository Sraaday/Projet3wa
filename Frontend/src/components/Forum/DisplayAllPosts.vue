<template>
    <div class="outline">
        <div v-if="currentPostSelected != -1">
            <button type="button" v-on:click="closeShowOnePost()">Fermer</button>
            <DisplayPost :id="currentPostSelected" />
        </div>
        <div v-show="currentPostSelected == -1">
            <UploadPost />
            <ul>
                <li v-for="item in items" :key="item.id" >

                    <h1><a v-on:click="showOnePost(item.id)">{{item.title}}</a></h1>
                    <p> Créé par {{item.pseudo}} {{item.createdAt }}</p>
                    <button v-if="item.userId == userId" v-on:click="deletePost(item.id)">Supprimer</button>
                    <img :alt="item.title" v-bind:src="item.imgUrl" />
                </li>
            </ul>
            
        </div>    
    </div>
</template>



<script>
import APICall from '../APICall/APICall.vue'
import DisplayPost from './DisplayPost.vue'
import UploadPost from './UploadPost.vue'
export default {
    name: 'DisplayAllPosts',
    props: {
        id: Number
    },
    components: {
        DisplayPost,
        UploadPost,
    },
    data: () => {
        return {
            items: [],
            pageOfItems: [],
            tempItems: [],
            currentPostSelected: -1,
            timer: null,
            userId: 0,
            admin: false
        }
    },
    
    methods: {
        refreshComments: async function () {
            if (this.items.length != this.tempItems.length ){
                this.items = this.tempItems;
            }
            await this.getPosts();
        },
        getPosts: async function () {
            this.tempItems = [];
            const responsePost = await APICall.methods.get(`post`);
            responsePost.forEach(async (item) => {
                const responseUser = await APICall.methods.get(`user/${item.userId}`);
                const newItem = { title: item.Title, imgUrl: item.imgUrl, id: item.id
                                , userId: item.userId, pseudo: `${responseUser.pseudo}`
                                , createdAt: item.createdAt};
                this.tempItems.unshift(newItem);
            });
        },
        showOnePost: function (postId){
            this.currentPostSelected = postId;
        },
        closeShowOnePost: function () {
            this.currentPostSelected = -1;
        },
        deletePost: async function (postId) {
            APICall.methods.delete(`post/${postId}`);
        },
        onChangePage(pageOfItems) {
           this.pageOfItems = pageOfItems;
        }
    },
    computed: {
        formatDate: function (date) {
            const splitDate = date.split('-');
            return `le ${splitDate[2]}/${splitDate[1]}/${splitDate[0]}`
        }
    },
    mounted: async function () {
        const formatDate = (date) => {
            const splitDate = date.split('-');
            return `le ${splitDate[2]}/${splitDate[1]}/${splitDate[0]}`
        }
        this.userId = APICall.methods.getParsedToken().userId;
        const responsePost = await APICall.methods.get(`post`);
        responsePost.forEach(async (item) => {
            const responseUser = await APICall.methods.get(`user/${item.userId}`);
            const newItem = { title: item.Title, imgUrl: item.imgUrl, id: item.id
                            , userId: item.userId, pseudo: `${responseUser.pseudo}`
                            , createdAt: formatDate(item.createdAt)};
            this.items.unshift(newItem);
            this.tempItems.unshift(newItem);
        });
        this.timer = setInterval(() => {
            this.refreshComments()
        }, 1000);
    },
    beforeDestroy() {
        clearInterval(this.timer)
    }
}
</script>

<style scoped>
img {
    width: 900px;
    margin: auto;
}
button {
   display: flex;
   flex-direction: column;
   margin: auto;
   margin-bottom: 10px;
   margin-top: 10px;
}
ul {
    margin: 0px;
    padding: 0px;
}
li {
    margin: auto;
}
li {
    border: black;
    border-style: solid ;
    border-radius: 5px;
    margin-top: 15px;
    margin-bottom: 15px;
    background-color: white;
    width: 80%;
  }
  ul {
  list-style-type: none;
}
@media screen and (max-width: 992px) {
  div {
    display: flex;
    flex-direction: column;
  }
  #nav {
    padding: 10px;
  }
  img {
    width: 500px;
}
    li {
        width: 95%;
    }
}
/* On screens that are 600px or less */
@media screen and (max-width: 992px) {
    .pagination {
        display: flex;
        align-self: center;
    }
}
/* On screens that are 600px or less */
@media screen and (max-width: 600px) {
  div {
    display: flex;
    flex-direction: column;
  }
  img {
    width: 270px;
}
.pagination {
    font-size: 12px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    justify-items: center;
    align-self: center;
}
p{
    font-size: 15px;
}
}
</style>
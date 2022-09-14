<template>
    <div class="outline">
        <ul>
            <li v-for="item in items" :key="item.id" >
                <p> Ecrit par {{item.userName}} {{item.createdAt}}</p>
                <p>{{item.content}}</p>
                <ModifyComment v-if="item.userId == userId" v-bind:commentId=item.id v-bind:content=item.content />
                <button v-if="admin || item.userId == userId" v-on:click="deleteCom(item.id)">Supprimer</button>
                
            </li>
        </ul>
    </div>
</template>
<script>
import APICall from '../APICall/APICall.vue'
import ModifyComment from './ModifyComment.vue';
export default {
    name: 'PostComments',
    props: {
        postId: Number
    },
     components: {
        ModifyComment,
    },
    data: () => {
        return {
            items: [],
            tempItems: [],
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
            this.items = this.tempItems;
            await this.getComments();
        },
        getComments: async function () {
            this.tempItems = [];
            const responseComments = await APICall.methods.get(`comment/find/${this.postId}`);
            responseComments.forEach(async (item) => {
                const responseUser = await APICall.methods.get(`user/${item.userId}`);
                const newItem = {content: item.content, userName:`${responseUser.pseudo}`, userId: item.userId, id: item.id, createdAt: item.createdAt};
                this.tempItems.push(newItem);
            });
        },
        deleteCom: async function (comId) {
            APICall.methods.delete(`comment/${comId}`);
        }
    },
    mounted: async function () {
        const formatDate = (date) => {
            const splitDate = date.split('-');
            return `le ${splitDate[2]}/${splitDate[1]}/${splitDate[0]}`
        }
        this.userId = APICall.methods.getParsedToken().userId;
        const responseComments = await APICall.methods.get(`comment/find/${this.postId}`);
        responseComments.forEach(async (item) => {
            const responseUser = await APICall.methods.get(`user/${item.userId}`);
            const newItem = {content: item.content, userName: `${responseUser.pseudo}`, userId: item.userId, id: item.id, createdAt: formatDate(item.createdAt)};
            this.items.push(newItem);
            this.tempItems.push(newItem);
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
ul {
    margin: 0px;
    padding: 0px;
}
li {
    display: flex;
    align-self: center;
    flex-direction: column;
    border: #ba4e38;
    border-style: solid ;
    border-radius: 5px;
    margin: 5px;
    background-color: #fd8671;
}
button {
    width: 33%;
    align-self: center;
    margin-top: 10px;
    margin-bottom: 10px;
}
@media screen and (min-width: 992px) {
  li {
    width: 33%;
    align-self: center;
    margin: auto;
    margin-top: 10px ;
    margin-bottom: 10px ;
  }
}
@media screen and (max-width: 600px) {
  p {
   font-size: 15px;
  }
}
</style>
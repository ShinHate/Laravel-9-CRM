<template>
    <div>
        <h2>
            {{ title }}
        </h2>
        <user-card
            v-for="(user, index) in users"
            :user="user"
            text="some text...."
            v-bind:key="index"
        />
    </div>
</template>

<script>
import User from "../components/users/User";

export default {
    name: "UsersList",
    components: {
      'user-card': User,
    },
    data() {
        return{
            title: 'GG',
            users: [],
        }
    },
    async  mounted() {
        let result = await axios.get('/users');
        this.users = result.data
    },
}
</script>

<style scoped>

</style>

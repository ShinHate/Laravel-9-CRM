<template>
    <div>
        {{ user.name }}
    </div>
</template>

<script>
export default {
    name: "UserPage",
    data() {
        return {
            userId: null,
            user:{},
        }
    },
    async  mounted() {
        let userId = this.this.$route.params.id;
        let result = await axios.get(`/users/${userId}`);
        this.users = result.data;
    },
}
</script>

<style scoped>

</style>

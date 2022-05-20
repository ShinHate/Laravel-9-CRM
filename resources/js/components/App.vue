<template>
    <h3>Меню</h3>
    <ul>
        <li><router-link to="/users">Users list</router-link></li>
        <li><router-link to="/admin">Admin</router-link></li>
    </ul>
    <router-view/>
</template>

<script>
export default {
    name: "App",
}
</script>

<style scoped>

</style>

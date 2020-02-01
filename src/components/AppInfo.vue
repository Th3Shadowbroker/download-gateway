<template>
    <v-container class="col-md-6 col-sm-auto">
        <v-card elevation="10">
            <v-card-title>{{ name }}</v-card-title>
            <v-card-subtitle>{{ version }}</v-card-subtitle>
            <v-card-text>
                <slot/>
            </v-card-text>
            <v-card-actions class="font-weight-light">
                <v-spacer/>
                Made with <span role="img" aria-label="heart">💜</span> and <span role="img" aria-label="coffee">☕</span>
                <v-spacer/>
            </v-card-actions>
        </v-card>
    </v-container>
</template>

<script>
    export default {
        name: "AppInfo",
        props: ["name", "version"]
    }
</script>

<style scoped>

</style>

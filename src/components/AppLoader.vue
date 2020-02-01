<template>
    <v-content>
        <AppInfo :name="app" :version="version" v-if="valid">
            <AppNotice :app="app" :download-url="downloadUrl"/>
        </AppInfo>
        <v-container class="text-center fill-height justify-center" v-else>
            <v-container>
                <h1 class="font-weight-light">404</h1>
                <h2>Not found <span role="img" aria-label="ohhhh">😱</span></h2>
                <img src="https://media.giphy.com/media/Nm8ZPAGOwZUQM/giphy.gif" type="image/gif">
            </v-container>
        </v-container>
    </v-content>
</template>

<script>
    import AppInfo from "./AppInfo";
    import AppNotice from "./AppNotice";
    export default {
        name: "AppLoader",
        components: {AppNotice, AppInfo},
        data() {
            return {
                app: "",
                version: "",
                downloadUrl: "",
                author: "Th3Shadowbroker",
                valid: false
            }
        },
        created() {
            const path = window.location.pathname.substr(1).split("/");

            if (path.length === 2) {
                this.app = path[0];
                this.version = path[1];
                this.downloadUrl = `https://github.com/${this.author}/${this.app}/releases/tag/${this.version}`;
                document.title = `${this.app} v${this.version}`;
                this.valid = true;
            }
        }
    }
</script>

<style scoped>

</style>

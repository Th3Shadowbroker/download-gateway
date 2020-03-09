<template>
    <v-container>
        <h1 class="text-center secondary--text">Hi there <span role="img" aria-label="live-long-and-prosper">🖖</span></h1>
        <br/>
        <v-container class="font-weight-medium text-center">
            Thank you for downloading {{ app }}!<br/>
            <br/>
            As the software you're about to download is and always will be free, I would really appreciate your support.<br/>
            <br/>

            <h2 class="text-center">Ways to support me</h2>

            <v-row>

                <!-- Patreon -->
                <v-col>
                    <h3>Patreon</h3>
                    <p class="text-left">
                        Patreon is a platform to support
                        your favourite creators through monthly
                        payments.
                    </p><br/>
                    <v-container>
                        <a href="https://www.patreon.com/bePatron?u=16360103" data-patreon-widget-type="become-patron-button">Become a Patron!</a>
                    </v-container>
                </v-col>

                <!-- Ko-fi -->
                <v-col>
                    <h3>Ko-fi</h3>
                    <p class="text-left">
                        Want to buy me a coffee?
                        Then Ko-fi is the best place to do so.
                    </p><br/>
                    <br/>
                    <v-container>
                        <a href='https://ko-fi.com/V7V0GYAP' target='_blank'><img height='36' style='border:0;height:36px;' src='https://az743702.vo.msecnd.net/cdn/kofi2.png?v=2' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>
                    </v-container>
                </v-col>

                <!-- Sponsor -->
                <v-col>
                    <h3>GitHub-Sponsors</h3>
                    <p class="text-left">
                        GitHub sponsors offers the possibility
                        of monthly support similar to patreon.
                    </p><br/>
                    <br/>
                    <v-container>
                        <a class="github-button" href="https://github.com/sponsors/Th3Shadowbroker" data-icon="octicon-heart" data-size="large" aria-label="Sponsor @Th3Shadowbroker on GitHub">Sponsor</a>
                    </v-container>
                </v-col>

            </v-row>
            <br/>
            <!-- Direct download -->
            <v-container class="text-center">
                <h2>Download</h2>
                <br/>
                <v-btn target="_blank" v-on:click="this.openDownload" color="primary">Take me to the download!</v-btn><br/>
                <span class="grey--text"><a :href="downloadUrl" class="invisible-link">Download doesn't work?</a></span>
            </v-container>
            <br/>
        </v-container>
    </v-container>
</template>

<script>
    export default {
        name: "AppNotice",
        props: ["app", "downloadUrl"],
        methods: {
            openDownload() {
                window.open(this.downloadUrl, "_blank");
            }
        }
    }
</script>

<style scoped>
    h1 {
        font-size: 42px;
    }

    .invisible-link,
    .invisible-link:visited,
    .invisible-link:active,
    .invisible-link:hover
    {
        color: inherit;
        text-decoration: none;
    }
</style>

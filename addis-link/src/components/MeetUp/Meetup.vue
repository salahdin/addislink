<template>
    <v-container>
        <v-row no-gutters>
            <v-col>
                <v-card>
                    <v-card-title>Top 10 Australian beaches</v-card-title>
                    <v-img
                    class="white--text align-end"
                    height="200px"
                    src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                    >
                    </v-img>
                    <v-card-subtitle class="pb-0">
                    {{meetup.id}}
                    </v-card-subtitle>
                    <v-card-text class="info--text">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis dolores, praesentium soluta temporibus.</p>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn icon color="pink"><v-icon>mdi-heart</v-icon></v-btn>
                        <v-spacer></v-spacer>
                        <v-btn elevation="9" class="">Register</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

export default {
    props: ['id'],
    computed:{
        meetup(){
            return this.$store.getters.loadedMeetup(this.id)
        }
    }

}
</script>

<style>

</style>
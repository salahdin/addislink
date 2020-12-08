<template>
  <v-container>
    <v-row no-gutters>
        <v-col v-for="item in meetups" :key="item.id" cols="12" sm="4">
            <v-container>
                <v-card>
                    <v-img
                    class="white--text align-end"
                    height="200px"
                    :src="item.imgUrl"
                    >
                    <v-card-title>{{item.title}}</v-card-title>
                    </v-img>
                    <v-card-subtitle class="pb-0">
                    {{item.date}}
                    </v-card-subtitle>

                    <v-card-text class="text--primary">
                    <div>Whitehaven Beach</div>

                    <div>Whitsunday Island, Whitsunday Islands</div>
                    </v-card-text>

                    <v-card-actions>
                    <v-btn
                        color="orange"
                        text
                    >
                        Share
                    </v-btn>
                    <router-link :to="'meetup/detail/1'+ item.id">
                        <v-btn
                            color="orange"
                            text
                        >
                            Explore
                        </v-btn>
                    </router-link>
                    </v-card-actions>
                </v-card>
            </v-container>    
        </v-col>
    </v-row>
          
  </v-container>
</template>

<script>
export default {
    computed:{
        meetups(){
            return this.$store.getters.loadedMeetups
        }
    }

}
</script>

<style>

</style>
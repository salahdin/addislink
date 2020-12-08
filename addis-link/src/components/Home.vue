<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col>
          <v-carousel>
            <v-carousel-item
              v-for="(item, i) in meetups"
              :key="i"
              :src="item.imgUrl"
              reverse-transition="fade-transition"
              transition="fade-transition"
            ></v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  computed: {
    meetups() {
      return this.$store.getters.loadedMeetups;
    },
  },
};
</script>

<style>
</style>
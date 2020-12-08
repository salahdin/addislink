<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="6" md="8">
        <v-card elevation="4" light tag="section">
          <v-card-title>
            <v-layout align-center justify-space-between>
              <v-flex>
                <v-img
                  class="ml-3"
                  contain
                  height="48px"
                  position="center right"
                  src="https://www.mobygames.com/images/i/12/25/1435075.png"
                ></v-img>
              </v-flex>
            </v-layout>
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <p>Sign in with your username and password:</p>
            <v-form @submit.prevent="signin">
              <v-text-field
                outline
                label="Email"
                type="email"
                v-model="email"
              ></v-text-field>
              <v-text-field
                outline
                hide-details
                label="Password"
                type="password"
                v-model="password"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions :class="{ 'pa-3': $vuetify.breakpoint.smAndUp }">
            <v-btn color="info" text> Forgot password? </v-btn>
            <v-spacer></v-spacer>
            <v-btn  @click="signin" color="info" :large="$vuetify.breakpoint.smAndUp">
              <v-icon left>mdi-login</v-icon>
              Login
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

  export default {
    data(){
      return {
        email: '',
        password: ''
      }

    },
    methods: {
      signin(){
        var obj = {
          email: this.email,
          password: this.password
        }
        this.$store.dispatch('signinUser', obj)
        
      }
    },
    computed: {
      user (){
        return this.$store.getters.user
      }
    },
    watch: {
      user (value){
        if(value !== null && value !== undefined){
          this.$router.push('/')
        }
      }
    }
  };
</script>

<style>
</style>
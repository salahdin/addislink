<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="6" md="8">

        <h3>Create account</h3>

        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
          @submit.prevent="signup"
        >
          <v-text-field
            v-model="email"
            label="E-mail"
            required
          ></v-text-field>

          <v-text-field
            v-model="password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="Normal with hint text"
            hint="At least 8 characters"
            counter
            @click:append="show1 = !show1"
          ></v-text-field>

          <v-text-field
            v-model="Confirmpassword"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min, rules.confirmPass]"
            :type="show2 ? 'text' : 'password'"
            name="input-10-1"
            label="Normal with hint text"
            hint="At least 8 characters"
            counter
            @click:append="show2 = !show2"
          ></v-text-field>

          <v-spacer></v-spacer>
          <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="signup"
          >
            Submit
          </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

  export default {
    data () {
      return {
        show1: false,
        show2: false,
        email: '',
        valid:false,
        password: 'pass',
        Confirmpassword: 'pass',
        rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
          emailMatch: () => (`The email and password you entered don't match`),
          confirmPass: pass => this.password === pass || 'the password doesnt match'
        },
      }
    },
    methods: {
      signup(){
        var obj = {
          email: this.email,
          password: this.password
        }
        this.$store.dispatch('signupUser', obj)
        
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
  }
</script>

<style>
</style>
<template>
  <v-container>
      <v-row justify="center" align="center">
          <v-col
            cols="12" 
            sm="6"
            md="8"
        >
              <h3>Create new event</h3>
                <v-form
                    ref="form"
                    v-model="valid"
                    lazy-validation
                    @submit.prevent="createMeetup"
                >
                    <v-text-field
                    v-model="title"
                    :counter="10"
                    label="Title"
                    required
                    ></v-text-field>

                    <v-text-field
                    v-model="location"
                    :counter="10"
                    label="location"
                    required
                    ></v-text-field>

                    <v-textarea
                    solo
                    name="input-7-4"
                    label="descritpion"
                    v-model="description"
                    ></v-textarea>

                    <h3>pick date</h3>
                    <v-date-picker v-model="picker" full-width></v-date-picker>

                    <v-file-input
                    label="File input"
                    filled
                    prepend-icon="mdi-camera"
                    ></v-file-input>                 

                    <v-checkbox
                    v-model="checkbox"
                    :rules="[v => !!v || 'You must agree to continue!']"
                    label="Do you agree?"
                    required
                    ></v-checkbox>

                    <v-btn
                    :disabled="!valid"
                    color="success"
                    class="mr-4"
                    @click="createMeetup"
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
          title: '',
          description: '',
          imageUrl: '',
          location : '',
          checkbox: '',
          picker: new Date().toISOString().substr(0, 10),
        }
    },
    methods:{
        createMeetup () {
            const meetup = {
                title: this.title,
                location: this.location,
                imgUrl: this.imgUrl,
                description: this.description,
                date: this.picker  
            }
            console.log(meetup)
            this.$store.dispatch('createMeetup', meetup)
            this.$router.push('/meetups')
        }

    },
    computed: {
        valid(){
            return this.title !== ''&& this.location !== '' && this.picker !== ''
        }
    }

}
</script>

<style>

</style>